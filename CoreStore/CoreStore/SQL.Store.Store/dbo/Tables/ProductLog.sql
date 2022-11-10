CREATE TABLE [dbo].[ProductLog] (
    [ProductLogID]    BIGINT         IDENTITY (1, 1) NOT NULL,
    [OperationType]   SMALLINT       NOT NULL,
    [ChangingUserId]  INT            NULL,
    [ValidFrom]       DATETIME       NOT NULL,
    [ValidUntil]      DATETIME       NOT NULL,
    [ProductID]       INT            NOT NULL,
    [ProductName]     NVARCHAR (40)  NULL,
    [ProductImage]    NVARCHAR (100) NULL,
    [Discontinued]    BIT            NULL,
    [SupplierID]      INT            NULL,
    [CategoryID]      INT            NULL,
    [QuantityPerUnit] NVARCHAR (20)  NULL,
    [UnitPrice]       MONEY          NULL,
    [UnitsInStock]    SMALLINT       NULL,
    [UnitsOnOrder]    SMALLINT       NULL,
    [ReorderLevel]    SMALLINT       NULL,
    CONSTRAINT [PK_ProductLog] PRIMARY KEY CLUSTERED ([ProductLogID] ASC)
);

