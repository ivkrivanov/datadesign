-- =============================================
-- Author:		Ivan Ivanov
-- Create date: 2019.03.13
-- Description:	Store for one ware between two dates>
-- =============================================
CREATE PROCEDURE [dbo].[usp_WaresFile]
	-- Add the parameters for the stored procedure here
	@shopid int = 0, 
	@waresid int = 0,
	@dateFrom datetime = 0,
	@dateTill datetime = 0,
	@Tenant int = 0
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT
	    s.Position, 
		s.ShopID, 
		sh.ShopName AS ShopName,
		s.WaresID, 
		w.WaresCode AS WaresCode,
		w.WaresName AS WaresName,
		s.Date, 
		s.[Key], 
		s.OperationID,
		dt.DocumentName AS DocumentType, 
		wmd.DocumentNumber AS DocumentNumber,
		wmd.DocumentDate AS DocumentDate,
		s.IncomeQuantity AS IncomeQuantity,
		s.IncomeSinglePrice AS IncomeSinglePrice,
		s.IncomeValue AS IncomeValue,
		s.ExpenceQuantity AS ExpenceQuantity,
		s.ExpenceSinglePrice AS ExpenceSinglePrice, 
		s.ExpenceValue AS ExpenceValue,
		s.RestQuantity AS RestQuantity,
		s.RestSinglePrice AS RestSinglePrice, 
		s.RestValue AS RestValue,
		s.ReCost AS ReCost,
		s.Mistake AS Mistake
	FROM dbo.DocumentType as dt
	INNER JOIN dbo.[WaresMovement Doc] as wmd
	ON dt.DocumentTypeID = wmd.DocumentTypeID 
	RIGHT OUTER JOIN dbo.Store as s
	ON wmd.WaresMoveID = s.MoveID
	INNER JOIN dbo.Wares AS w
	ON w.WaresID = s.WaresID
	INNER JOIN Shops AS sh
	ON sh.ShopID = s.ShopID
	WHERE (s.Date BETWEEN @dateFrom AND @dateTill) AND s.TenantId = @Tenant
END
