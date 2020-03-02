CREATE PROCEDURE [dbo].[CustOrdersOrders] @CustomerID nvarchar(5)
AS
SELECT OrderID, 
	OrderDate,
	RequiredDate,
	ShippedDate
FROM Orders
WHERE CustomerID = @CustomerID
ORDER BY OrderID
