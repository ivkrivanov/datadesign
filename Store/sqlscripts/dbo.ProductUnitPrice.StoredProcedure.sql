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
-- Description:	Product Unit Price
-- =============================================
ALTER PROCEDURE [dbo].[usp_ProductUnitPrice]
	-- Add the parameters for the stored procedure here
	@productid int = 0,
	@tenantid int = 4
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	SELECT
	p.ProductID, 
	SUM(pd.PlanPrice * pd.Quantity / pd.ProductQuantity - pd.Discount) AS UnitPrice
	FROM dbo.Products AS p 
	INNER JOIN dbo.[Product Details] AS pd
	ON p.ProductID = pd.ProductID
	WHERE (p.TenantId = @tenantid)
	GROUP BY p.ProductID
	
END
GO
