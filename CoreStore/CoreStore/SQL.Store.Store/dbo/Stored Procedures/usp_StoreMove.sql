-- =============================================
-- Author:		Ivan Ivanov
-- Create date: 2019.03.13
-- Description:	Store between two dates
-- =============================================
Create PROCEDURE [dbo].[usp_StoreMove] 
	-- Add the parameters for the stored procedure here
	@shopid int = 0, 
	@dateFrom datetime = 0,
	@dateTill datetime = 0,
	@Tenant int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

		SELECT 
			s.ShopID AS ShopID,
			sh.ShopName AS ShopName,
			s.WaresID AS WaresID,
			w.WaresCode AS WaresCode,
			w.WaresName AS WaresName,
			me.MeasureName AS MeasureName,
			SUM(IIF(s.Date >= @dateFrom, s.IncomeQuantity, 0)) AS IncomeQuantity,
			SUM(IIF(s.Date >= @dateFrom, s.IncomeValue, 0)) AS IncomeValue,
			SUM(IIF(s.Date >= @dateFrom, s.ExpenceQuantity, 0)) AS ExpenceQuantity,
			SUM(IIF(s.Date >= @dateFrom, s.ExpenceValue, 0)) AS ExpenceValue,
			MAX(s.RestQuantity) AS RestQuantity,
			MAX(s.RestValue) AS RestValue,
			MIN(IIF(s.Date >= @dateFrom, s.Mistake, 0)) AS Mistake,
			SUM(IIF(s.Date >= @dateFrom, s.ReCost, 0)) AS ReCost
		FROM Store AS s
		INNER JOIN
		(SELECT MAX(Position) AS Position, 
			ShopID, 
			WaresID
			FROM dbo.Store
			WHERE (Date <= @dateTill AND TenantId = @Tenant)
			GROUP BY ShopID, WaresID
		) AS T
		ON s.Position = T.Position
		INNER JOIN Wares AS w
		ON w.WaresID = s.WaresID
		INNER JOIN Shops AS sh
		ON sh.ShopID = s.ShopID
		INNER JOIN Measures AS me
		ON me.MeasureID = w.MeasureID
		WHERE (s.Date <= @dateTill)
		GROUP BY s.ShopID, sh.ShopName, s.WaresID, w.WaresCode, w.WaresName, me.MeasureName
		ORDER BY WaresCode
END
