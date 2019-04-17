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

USE [Store_Store_v1]
GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Ivan Ivanov
-- Create date: 2019.04.14
-- Description:	WaresMovementTotal
-- =============================================
ALTER PROCEDURE [dbo].[usp_WaresMovementTotal]
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
GO
