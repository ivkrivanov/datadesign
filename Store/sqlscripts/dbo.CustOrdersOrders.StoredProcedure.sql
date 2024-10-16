USE [Store_Store_v1]
GO
/****** Object:  StoredProcedure [dbo].[CustOrdersOrders]    Script Date: 13.01.2019 20:31:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Batch submitted through debugger: StoreDB_script.sql|5169|0|D:\Projects\Store\StoreDB_script.sql
CREATE PROCEDURE [dbo].[CustOrdersOrders] @CustomerID nvarchar(5)
AS
SELECT OrderID, 
	OrderDate,
	RequiredDate,
	ShippedDate
FROM Orders
WHERE CustomerID = @CustomerID
ORDER BY OrderID
GO
