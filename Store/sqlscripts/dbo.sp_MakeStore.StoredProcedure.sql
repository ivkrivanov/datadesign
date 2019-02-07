USE [Store_Store_v1]
GO
/****** Object:  StoredProcedure [dbo].[sp_MakeStore]    Script Date: 7.2.2019 г. 15:29:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Datadesign
-- Create date: 2017-01-25
-- Description:	Refilling Store
-- =============================================
ALTER PROCEDURE [dbo].[sp_MakeStore] 
	-- Add the parameters for the stored procedure here
	@Tenant int = 0, 
	@Wares int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT @Tenant, @Wares

	DELETE FROM Store WHERE TenantId = @Tenant --AND WaresID = @Wares

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

	SELECT 0 AS Position, ItemMode AS WaresMode, MoveID, ShopID, WaresID, [Key], OrderDate AS Date, OpCode AS OperationID, --wm.IsActive,  
		(IIF (OpCode > 101 AND OpCode < 300, Quantity*(IIF (OpCode = 109, -1, 1)) ,0)) AS IncomeQuantity,
		(IIF (OpCode > 101 AND OpCode < 300, IIF (Quantity <> 0, SinglePrice ,0), 0)) AS IncomeSinglePrice,
		((IIF (OpCode > 101 AND OpCode < 300, Quantity*(IIF (OpCode = 109, -1, 1)) ,0)) * (IIF (OpCode > 101 AND OpCode < 200, IIF (Quantity <> 0, SinglePrice ,0), 0))) AS IncomeValue,
		--(IIF (wm.IsActiv = 1 AND (wm.OperationTypeID > 101 AND wm.OperationTypeID < 200), wmd.SinglePrice, 0)) AS AIncomeSinglePrice,
		--((IIF (wm.OperationTypeID > 101 AND wm.OperationTypeID < 200, wmd.Quantity*(IIF (wm.OperationTypeID = 109, -1, 1)) ,0)) * (IIF (wm.IsActiv = 1 AND (wm.OperationTypeID > 101 AND wm.OperationTypeID < 200), wmd.SinglePrice, 0))) AS AIncomeValue,

		(IIF (OpCode > 300 AND OpCode < 499, Quantity, 0)) AS ExpenceQuantity,
		0 AS ExpenceSinglePrice,
		0 AS ExpenceValue,
		--0 AS AExpenceSinglePrice,
		--0 AS AExpenceValue,
		
		(IIF (OpCode = 101 OR OpCode = 500, Quantity,0)) AS RestQuantity, 
		(IIF (OpCode = 101 OR OpCode = 500, SinglePrice,0)) AS RestSinglePrice, 
		(IIF (OpCode = 101 OR OpCode = 500, Quantity,0))  * (IIF (OpCode = 101 OR OpCode = 500, SinglePrice, 0)) AS RestValue,
		--(IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.Quantity,0)), 0)) AS ARestQuantity, 
		--(IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.SinglePrice,0)), 0)) AS ARestSinglePrice,
		--(IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.Quantity,0)), 0)) * (IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.SinglePrice,0)) , 0)) AS ARestValue,
		
		0 AS Mistake,
		0 AS AMistake,
		@Tenant AS TenantId

	--FROM dbo.Wares AS w 
	--	INNER JOIN dbo.[WaresMovement Details] AS wmd ON w.WaresID = wmd.WaresID
	--	INNER JOIN dbo.WaresMovement AS wm ON wmd.WaresMoveID = wm.WaresMoveID 
	--	INNER JOIN dbo.Categories AS c ON w.CategoryID = c.CategoryID
	--	INNER JOIN dbo.OperationType AS op ON wm.OperationTypeID = op.OperationTypeID
	FROM [Expence/Income]
	WHERE TenantId = @Tenant
	ORDER BY ShopID, [Key], OrderDate, OpCode, MoveID

	--UNION ALL
	--SELECT 0 AS ItemMode, o.ShipVia AS ShopID, o.IsActive, pd.WaresID, w.WaresCode AS [Key], 
	--	o.OrderDate AS Date, o.OrderID, SUM(od.Quantity * od.Quantity / od.Quantity) AS Quantity, 0 AS SinglePrice
	--FROM dbo.Orders  AS o
	--	INNER JOIN dbo.[Order Details] AS od ON o.OrderID = od.OrderID 
	--	INNER JOIN dbo.Products AS p ON od.ProductID = p.ProductID
	--	INNER JOIN dbo.[Product Details] AS pd ON p.ProductID = pd.ProductID 
	--	INNER JOIN dbo.Wares AS w ON pd.WaresID = w.WaresID
	--GROUP BY o.ShipVia, o.IsActive, pd.WaresID, o.OrderDate, o.OrderID, w.WaresCode
	----ORDER BY o.ShipVia, pd.WaresID, o.OrderID
	--ORDER BY wm.ShopID,[Key], wm.OrderDate, wm.OperationTypeID, wm.WaresMoveID



END
