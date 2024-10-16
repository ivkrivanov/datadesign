USE [Store_Store_v1]
GO
/****** Object:  StoredProcedure [dbo].[CustOrderHist]    Script Date: 13.01.2019 20:31:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Batch submitted through debugger: StoreDB_script.sql|5141|0|D:\Projects\Store\StoreDB_script.sql
CREATE PROCEDURE [dbo].[CustOrderHist] @CustomerID nvarchar(5)
AS
SELECT ProductName, Total=SUM(Quantity)
FROM Products P, [Order Details] OD, Orders O, Customers C
WHERE C.CustomerID = @CustomerID
AND C.CustomerID = O.CustomerID AND O.OrderID = OD.OrderID AND OD.ProductID = P.ProductID
GROUP BY ProductName
GO
