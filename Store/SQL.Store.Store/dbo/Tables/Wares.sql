﻿CREATE TABLE [dbo].[Wares] (
    [WaresID]         INT             IDENTITY (1, 1) NOT NULL,
    [WaresCode]       NVARCHAR (15)   NOT NULL,
    [WaresBarcode]    NVARCHAR (15)   NULL,
    [WaresLabel]      NVARCHAR (20)   NULL,
    [WaresName]       NVARCHAR (60)   NULL,
    [WaresImage]      NVARCHAR (255)  NULL,
    [SupplierID]      INT             NULL,
    [CounterpartyID]  NVARCHAR (14)   NULL,
    [CategoryID]      INT             NULL,
    [MeasureID]       INT             NOT NULL,
    [QuantityPerUnit] DECIMAL (15, 4) NULL,
    [UnitPrice]       DECIMAL (15, 4) NULL,
    [UnitsInStock]    DECIMAL (15, 4) NULL,
    [UnitsOnOrder]    DECIMAL (15, 4) NULL,
    [Discontinued]    BIT             NOT NULL,
    [AccountID]       INT             NULL,
    [InsertDate]      DATETIME        DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT             DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME        NULL,
    [UpdateUserId]    INT             NULL,
    [IsActive]        INT             DEFAULT ((1)) NOT NULL,
    [TenantId]        INT             DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Wares] PRIMARY KEY CLUSTERED ([WaresID] ASC),
    CONSTRAINT [FK_Wares_Categories] FOREIGN KEY ([CategoryID]) REFERENCES [dbo].[Categories] ([CategoryID]),
    CONSTRAINT [FK_Wares_Counterparties] FOREIGN KEY ([CounterpartyID]) REFERENCES [dbo].[Counterparties] ([CounterpartyID]),
    CONSTRAINT [FK_Wares_Measures] FOREIGN KEY ([MeasureID]) REFERENCES [dbo].[Measures] ([MeasureID]),
    CONSTRAINT [FK_Wares_Suppliers] FOREIGN KEY ([SupplierID]) REFERENCES [dbo].[Suppliers] ([SupplierID])
);

