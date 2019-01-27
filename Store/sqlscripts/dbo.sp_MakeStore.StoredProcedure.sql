-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Datadesign
-- Create date: 2017-01-25
-- Description:	Refilling Store
-- =============================================
ALTER PROCEDURE sp_MakeStore 
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
           [ExpenceQuantiry], [ExpenceSinglePrice], [ExpenceValue], 
		   --[AExpenceSinglePrice], [AExpenceValue],
           [RestQuantity], [RestSinglePrice], [RestValue],
		   --[ARestQuantity], [ARestSinglePrice], [ARestValue],
		   --[IsActive],
           --[ReCost],[AReCost],
           [Mistake], [AMistake],
		   [TenantId])
		   --[InsertDate],[InsertUserId],[UpdateDate],[UpdateUserId],[IsActive],[TenantId])

	SELECT TOP (100) PERCENT
		0 AS Position, 0 AS WaresMode, wm.WaresMoveID,
		wm.ShopID, wmd.WaresID, w.WaresCode AS [Key], wm.OrderDate AS Date, op.OperationTypeID AS OperationID, --wm.IsActive,  
		(IIF (op.OpCode > 101 AND op.OpCode < 200, wmd.Quantity*(IIF (op.OpCode = 109, -1, 1)) ,0)) AS IncomeQuantity,
		(IIF (op.OpCode > 101 AND op.OpCode < 200, IIF (wmd.Quantity <> 0, wmd.SinglePrice ,0), 0)) AS IncomeSinglePrice,
		((IIF (op.OpCode > 101 AND op.OpCode < 200, wmd.Quantity*(IIF (op.OpCode = 109, -1, 1)) ,0)) * (IIF (op.OpCode > 101 AND op.OpCode < 200, IIF (wmd.Quantity <> 0, wmd.SinglePrice ,0), 0))) AS IncomeValue,
		--(IIF (wm.IsActiv = 1 AND (wm.OperationTypeID > 101 AND wm.OperationTypeID < 200), wmd.SinglePrice, 0)) AS AIncomeSinglePrice,
		--((IIF (wm.OperationTypeID > 101 AND wm.OperationTypeID < 200, wmd.Quantity*(IIF (wm.OperationTypeID = 109, -1, 1)) ,0)) * (IIF (wm.IsActiv = 1 AND (wm.OperationTypeID > 101 AND wm.OperationTypeID < 200), wmd.SinglePrice, 0))) AS AIncomeValue,

		(IIF (op.OpCode BETWEEN 200 AND 215, wmd.Quantity, 0)) AS ExpenceQuantiry,
		0 AS ExpenceSinglePrice,
		0 AS ExpenceValue,
		--0 AS AExpenceSinglePrice,
		--0 AS AExpenceValue,
		
		(IIF (op.OpCode = 101 OR op.OpCode = 500, wmd.Quantity,0)) AS RestQuantity, 
		(IIF (op.OpCode = 101 OR op.OpCode = 500, wmd.SinglePrice,0)) AS RestSinglePrice, 
		(IIF (op.OpCode = 101 OR op.OpCode = 500, wmd.Quantity,0))  * (IIF (op.OpCode = 101 OR op.OpCode = 500, wmd.SinglePrice, 0)) AS RestValue,
		--(IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.Quantity,0)), 0)) AS ARestQuantity, 
		--(IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.SinglePrice,0)), 0)) AS ARestSinglePrice,
		--(IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.Quantity,0)), 0)) * (IIF (wm.IsActiv = 1, (IIF (wm.OperationTypeID = 101 OR wm.OperationTypeID = 500, wmd.SinglePrice,0)) , 0)) AS ARestValue,
		
		0 AS Mistake,
		0 AS AMistake,
		@Tenant AS TenantId

	FROM dbo.Wares AS w 
		INNER JOIN dbo.[WaresMovement Details] AS wmd ON w.WaresID = wmd.WaresID
		INNER JOIN dbo.WaresMovement AS wm ON wmd.WaresMoveID = wm.WaresMoveID 
		INNER JOIN dbo.Categories AS c ON w.CategoryID = c.CategoryID
		INNER JOIN dbo.OperationType AS op ON wm.OperationTypeID = op.OperationTypeID

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
	ORDER BY wm.ShopID,[Key], wm.OrderDate, wm.OperationTypeID, wm.WaresMoveID



END
GO
