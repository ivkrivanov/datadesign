-- =============================================
-- Author:		Ivan Ivanov
-- Create date: 2019.04.14
-- Description:	WaresMovementTotal
-- =============================================
CREATE PROCEDURE [dbo].[usp_WaresMovementTotal]
	-- Add the parameters for the stored procedure here
	@tenantid int = 4
	
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT
	wmd.WaresMoveID AS WaresMoveID,
	SUM(wmd.SinglePrice * wmd.Quantity - wmd.Discount) AS Total
	FROM dbo.[WaresMovement Details] as wmd
	INNER JOIN dbo.WaresMovement as wm
	ON wm.WaresMoveID = wmd.WaresMoveID
	WHERE (wm.TenantId = @tenantid)
	GROUP BY wmd.WaresMoveID

END
