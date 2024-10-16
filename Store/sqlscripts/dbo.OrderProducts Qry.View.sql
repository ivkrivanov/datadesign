USE [Store_Store_v1]
GO
/****** Object:  View [dbo].[OrderProducts Qry]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[OrderProducts Qry] AS
SELECT OrderProducts.OrderProductsID, OrderProducts.CounterpartyID, OrderProducts.EmployeeID, OrderProducts.OrderDate, OrderProducts.RequiredDate, 
	OrderProducts.ShippedDate, OrderProducts.ShipVia, OrderProducts.Freight, OrderProducts.ShipName, OrderProducts.ShipAddress, OrderProducts.ShipCity, 
	OrderProducts.ShipRegion, OrderProducts.ShipPostalCode, OrderProducts.ShipCountry, 
	Counterparties.CompanyName, Counterparties.Address, Counterparties.City, Counterparties.Region, Counterparties.PostalCode, Counterparties.Country
FROM Counterparties INNER JOIN OrderProducts ON Counterparties.CounterpartyID = OrderProducts.CounterpartyID
GO
