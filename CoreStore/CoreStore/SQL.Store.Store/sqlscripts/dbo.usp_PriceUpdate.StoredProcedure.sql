SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ivan Ivanov
-- Create date: 2019 03 08
-- Description:	Updated Wares price and quantity after Store update
-- =============================================
ALTER PROCEDURE [dbo].[usp_PriceUpdate]
	-- Add the parameters for the stored procedure here
	@Tenant int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	BEGIN TRANSACTION;
	BEGIN TRY
		UPDATE 
			[dbo].[Wares]
		SET 
			[UnitPrice] = WS.UnitPrice,
			[UnitsInStock] = WS.UnitsInStock
		FROM
			(SELECT 
				s.WaresID, 
				s.RestSinglePrice AS UnitPrice, 
				s.RestQuantity AS UnitsInStock
			FROM Store AS s
			INNER JOIN
			(SELECT MAX(Position) AS Position, 
				ShopID, 
				WaresID
				FROM dbo.Store
				WHERE (Date <= (SELECT MAX(Date) AS Date FROM dbo.Store) AND TenantId = @Tenant)
				GROUP BY ShopID, WaresID
			) AS T
			ON s.Position = T.Position AND s.WaresID = T.WaresID) AS WS
		WHERE Wares.WaresID = WS.WaresID
	END TRY
		BEGIN CATCH
		IF @@TRANCOUNT > 0  
			ROLLBACK TRANSACTION; 
	END CATCH
	IF @@TRANCOUNT > 0  
		COMMIT TRANSACTION;

END
GO
