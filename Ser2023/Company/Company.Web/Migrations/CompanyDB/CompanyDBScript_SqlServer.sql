/****** Object:  View [dbo].[Invoices]    Script Date: 08/12/2011 11:46:04 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [person].[AddrtessView] AS
SELECT at.Name AS Naem,
    sp.StateProvinceCode AS StateProvinceCode,
    sp.Name AS SPName,
    a.AddressLine1 AS AddressLine1,
    a.AddressLine2 AS AddressLine2,
    a.City AS City,
    a.PostalCode AS PostalCode,
    c.Name AS CName
FROM person.BusinessEntityAddress AS bea INNER JOIN
     person.AddressType AS at ON bea.AddressTypeId = at.AddressTypeId INNER JOIN
     person.BusinessEntity AS be ON bea.BusinessEntityId = be.BusinessEntityId INNER JOIN
     person.StateProvince AS sp INNER JOIN
     person.Address AS a ON sp.StateProvinceId = a.StateProvinceId ON bea.AddressId = a.AddressId INNER JOIN
     person.Country AS c ON sp.CountryCode = c.CountryCode

