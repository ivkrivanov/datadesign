-- =============================================
-- Author:		Ivan Ivanov
-- Create date: 17.2.2019
-- Description:	
-- =============================================
CREATE PROCEDURE [dbo].[sp_StoreMove]
	-- Add the parameters for the stored procedure here
	@Object as int,
	@FromDate datetime, 
	@TillDate datetime
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	SET @FromDate = CONVERT(datetime, @FromDate, 102)
	SET @TillDate = CONVERT(datetime, @TillDate, 102)

    -- Insert statements for procedure here
	SELECT DISTINCT store.ShopID, store.WaresID, store.[Key] AS [Key], 
		MIN(DISTINCT wares.WaresName) AS WaresName, 
		SUM(CASE WHEN (store.Date >= @FromDate) THEN store.IncomeQuantity
			ELSE 0
			END) AS IncomeQuantity, 
		SUM(CASE WHEN (store.Date >= @FromDate) THEN store.IncomeValue
			ELSE 0
			END) AS IncomeValue, 
		SUM(CASE WHEN (store.Date >= @FromDate) THEN store.ExpenceQuantity
			ELSE 0
			END) AS ExpenceQuantity, 
		SUM(CASE WHEN (store.Date >= @FromDate) THEN store.ExpenceValue
			ELSE 0
			END) AS ExpenceValue, 
		MAX(DISTINCT stores.RestQuantity) AS RestQuantity, 
		MAX(DISTINCT stores.RestValue) AS RestValue
	FROM (SELECT st.ShopID, st.WaresID, st.RestQuantity, st.RestSinglePrice, st.RestValue
			FROM dbo.Store AS st INNER JOIN
			(SELECT ShopID, WaresID, MAX(Position) AS Position
				FROM dbo.Store
				WHERE (Date BETWEEN @FromDate AND @TillDate)
				GROUP BY ShopID, WaresID) AS ss ON ss.Position = st.Position
		 ) AS stores
	INNER JOIN dbo.Wares as wares ON stores.WaresID = wares.WaresID 
	INNER JOIN dbo.Store as store ON stores.ShopID = store.ShopID AND stores.WaresID = store.WaresID
	WHERE store.Date <= @TillDate AND store.ShopID = @Object
	GROUP BY store.ShopID, store.WaresID, store.[Key]





END
