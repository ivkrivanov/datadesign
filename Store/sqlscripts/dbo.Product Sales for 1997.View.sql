USE [Store_Store_v1]
GO
/****** Object:  View [dbo].[Product Sales for 1997]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- Batch submitted through debugger: StoreDB_script.sql|249|0|D:\Projects\Store\StoreDB_script.sql
create view [dbo].[Product Sales for 1997] AS
SELECT Categories.CategoryName, Products.ProductName, 
Sum(CONVERT(money,("Order Details".UnitPrice*Quantity*(1-Discount)/100))*100) AS ProductSales
FROM (Categories INNER JOIN Products ON Categories.CategoryID = Products.CategoryID) 
	INNER JOIN (Orders 
		INNER JOIN "Order Details" ON Orders.OrderID = "Order Details".OrderID) 
	ON Products.ProductID = "Order Details".ProductID
WHERE (((Orders.ShippedDate) Between '19970101' And '19971231'))
GROUP BY Categories.CategoryName, Products.ProductName
GO
