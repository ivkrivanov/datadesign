﻿CREATE TABLE [dbo].[Products] (
    [ProductID]       INT            IDENTITY (1, 1) NOT NULL,
    [ProductCode]     NVARCHAR (15)  NOT NULL,
    [ProductBarcode]  NVARCHAR (15)  NULL,
    [ProductLabel]    NVARCHAR (20)  NULL,
    [ProductName]     NVARCHAR (60)  NOT NULL,
    [ProductImage]    NVARCHAR (255) NULL,
    [SupplierID]      INT            NULL,
    [CounterpartyID]  NVARCHAR (14)  NULL,
    [CategoryID]      INT            NULL,
    [MeasureID]       INT            NOT NULL,
    [QuantityPerUnit] NVARCHAR (20)  NULL,
    [UnitPrice]       MONEY          CONSTRAINT [DF_Products_UnitPrice] DEFAULT ((0)) NULL,
    [UnitsInStock]    SMALLINT       CONSTRAINT [DF_Products_UnitsInStock] DEFAULT ((0)) NULL,
    [UnitsOnOrder]    SMALLINT       CONSTRAINT [DF_Products_UnitsOnOrder] DEFAULT ((0)) NULL,
    [ReorderLevel]    SMALLINT       CONSTRAINT [DF_Products_ReorderLevel] DEFAULT ((0)) NULL,
    [Discontinued]    BIT            CONSTRAINT [DF_Products_Discontinued] DEFAULT ((0)) NOT NULL,
    [InsertDate]      DATETIME       DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT            DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME       NULL,
    [UpdateUserId]    INT            NULL,
    [IsActive]        INT            DEFAULT ((1)) NOT NULL,
    [TenantId]        INT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED ([ProductID] ASC),
    CONSTRAINT [CK_Products_UnitPrice] CHECK ([UnitPrice]>=(0)),
    CONSTRAINT [CK_ReorderLevel] CHECK ([ReorderLevel]>=(0)),
    CONSTRAINT [CK_UnitsInStock] CHECK ([UnitsInStock]>=(0)),
    CONSTRAINT [CK_UnitsOnOrder] CHECK ([UnitsOnOrder]>=(0)),
    CONSTRAINT [FK_Product_Counterparties] FOREIGN KEY ([CounterpartyID]) REFERENCES [dbo].[Counterparties] ([CounterpartyID]),
    CONSTRAINT [FK_Product_Measures] FOREIGN KEY ([MeasureID]) REFERENCES [dbo].[Measures] ([MeasureID]),
    CONSTRAINT [FK_Products_Categories] FOREIGN KEY ([CategoryID]) REFERENCES [dbo].[Categories] ([CategoryID]),
    CONSTRAINT [FK_Products_Suppliers] FOREIGN KEY ([SupplierID]) REFERENCES [dbo].[Suppliers] ([SupplierID])
);

