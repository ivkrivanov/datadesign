-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[sp_StoreS] 
	-- Add the parameters for the stored procedure here
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
	SELECT st.ShopID, st.WaresID, st.RestQuantity, st.RestSinglePrice, st.RestValue
	FROM dbo.Store AS st INNER JOIN
		(SELECT ShopID, WaresID, MAX(Position) AS Position
         FROM dbo.Store
         WHERE (Date BETWEEN @FromDate AND @TillDate)
         GROUP BY ShopID, WaresID) AS ss ON ss.Position = st.Position
END
