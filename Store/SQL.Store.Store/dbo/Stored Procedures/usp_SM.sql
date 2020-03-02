-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
create PROCEDURE [dbo].[usp_SM]
	-- Add the parameters for the stored procedure here
	@shopid int = 0, 
	@dateTill datetime = 0,
	@Tenant int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT ws.WaresID,
		ws.WaresName,
		ws.WaresCode,
		ms.MeasureName
		FROM Wares AS ws
		INNER JOIN Measures AS ms
		ON ws.MeasureID = ms.MeasureID
		GROUP BY ws.WaresID, ws.WaresCode, ws.WaresName, ms.MeasureName
		ORDER BY ws.WaresCode ASC


END
