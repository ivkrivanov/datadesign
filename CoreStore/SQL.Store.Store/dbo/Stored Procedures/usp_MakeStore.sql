-- =============================================
-- Author:		Datadesign
-- Create date: 2017-01-25
-- Description:	Refilling Store
-- =============================================
CREATE PROCEDURE [dbo].[usp_MakeStore] 
	-- Add the parameters for the stored procedure here
	@Tenant int = 0 
	--@Wares int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
    -- Insert statements for procedure here

	DELETE FROM Store WHERE TenantId = @Tenant

	INSERT INTO [dbo].[Store]
        ([Position],[WaresMode],[MoveID],[ShopID],[WaresID],[Key],[Date],[OperationID],
		[IncomeQuantity],[IncomeSinglePrice],[IncomeValue],
		--[AIncomeSinglePrice],[AIncomeValue],
        [ExpenceQuantity], [ExpenceSinglePrice], [ExpenceValue], 
		--[AExpenceSinglePrice], [AExpenceValue],
        [RestQuantity], [RestSinglePrice], [RestValue],
		--[ARestQuantity], [ARestSinglePrice], [ARestValue],
		--[IsActive],
        --[ReCost],[AReCost],
        [Mistake], [AMistake],
		[TenantId])
		--[InsertDate],[InsertUserId],[UpdateDate],[UpdateUserId],[IsActive],[TenantId])
		SELECT
			0 AS Position, 
			ItemMode AS WaresMode, 
			MoveID, ShopID, 
			WaresID, [Key], 
			DATE AS [Date], 
			OperationID AS OperationID, --wm.IsActive,  
			(IIF (OperationID > 101 AND OperationID < 300, Quantity * (IIF (OperationID = 109, -1, 1)) ,0)) AS IncomeQuantity,
			(IIF (OperationID > 101 AND OperationID < 300, IIF (Quantity <> 0, SinglePrice ,0), 0)) AS IncomeSinglePrice,
			(IIF (OperationID > 101 AND OperationID < 300, Quantity * (IIF (OperationID = 109, -1, 1)) ,0)) * (IIF (OperationID > 101 AND OperationID < 200, IIF (Quantity <> 0, SinglePrice ,0), 0)) AS IncomeValue,
			
			(IIF (OperationID > 300 AND OperationID < 499, Quantity, 0)) AS ExpenceQuantity,
			0 AS ExpenceSinglePrice,
			0 AS ExpenceValue,
			
			(IIF (OperationID = 101 OR OperationID = 500, Quantity,0)) AS RestQuantity, 
			(IIF (OperationID = 101 OR OperationID = 500, SinglePrice,0)) AS RestSinglePrice, 
			(IIF (OperationID = 101 OR OperationID = 500, Quantity,0))  * (IIF (OperationID = 101 OR OperationID = 500, SinglePrice, 0)) AS RestValue,
			0 AS Mistake,
			0 AS AMistake,
			@Tenant AS TenantId
		FROM(
			SELECT 0 AS ItemMode,
				WM.ShopID AS ShopID, 
				WMD.WaresID AS WaresID, 
				W.WaresCode AS [Key], 
				WM.OrderDate AS [DATE], 
				OP.OpCode AS OperationID,  
				WM.WaresMoveID AS MoveID, 
				WMD.Quantity AS Quantity, 
				WMD.SinglePrice AS SinglePrice, 
				WM.TenantId AS TenantId
			FROM dbo.Wares AS W WITH(NOLOCK)
				INNER JOIN dbo.[WaresMovement Details] AS WMD WITH(NOLOCK)
				ON W.WaresID = WMD.WaresID AND W.TenantId = WMD.TenantId 
				INNER JOIN dbo.WaresMovement AS WM WITH(NOLOCK)
				ON WMD.WaresMoveID = WM.WaresMoveID AND WMD.TenantId = WM.TenantId
				INNER JOIN dbo.OperationType AS OP WITH(NOLOCK)
				ON WM.OperationTypeID = OP.OperationTypeID AND WM.TenantId = OP.TenantId
			WHERE WM.TenantId = @Tenant
			UNION ALL
			SELECT 1 AS ItemMode, 
				PM.ShopID AS ShopID, 
				W.WaresID AS WaresID,  
				W.WaresCode AS [Key], 
				PM.OrderDate AS [DATE], 
				OP.OpCode AS OperationID, 
				PM.ProductMoveID AS MoveID, 
				SUM(PMD.Quantity * PD.Quantity / PD.ProductQuantity) AS Quantity,
				0 AS SinglePrice, 
				PM.TenantId AS TenantId
			FROM  dbo.OperationType AS OP WITH(NOLOCK)
				INNER JOIN dbo.ProductMovement AS PM WITH(NOLOCK)
				ON OP.OperationTypeID = PM.OperationTypeID 
				INNER JOIN dbo.[ProductMovement Details] AS PMD WITH(NOLOCK)
				ON PM.ProductMoveID = PMD.ProductMoveID 
				INNER JOIN dbo.Products AS P WITH(NOLOCK)
				ON PMD.ProductID = P.ProductID 
				INNER JOIN dbo.[Product Details] AS PD WITH(NOLOCK)
				ON P.ProductID = PD.ProductID 
				INNER JOIN dbo.Wares AS W WITH(NOLOCK)
				ON PD.WaresID = W.WaresID
			GROUP BY PM.ShopID, 
				W.WaresID, 
				W.WaresCode, 
				PM.OrderDate, 
				OP.OpCode, 
				PM.ProductMoveID, 
				PM.TenantId
			
		) AS [Expence/Income]
		ORDER BY ShopID, [Key], [DATE], OperationID, MoveID
END
