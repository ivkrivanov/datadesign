CREATE TABLE [dbo].[Product Details] (
    [ProductID]       INT        NOT NULL,
    [WaresID]         INT        NOT NULL,
    [PlanPrice]       MONEY      CONSTRAINT [DF_Product_Details_PlanPrice] DEFAULT ((0)) NOT NULL,
    [Quantity]        REAL       CONSTRAINT [DF_Product_Details_Quantity] DEFAULT ((1)) NOT NULL,
    [ProductQuantity] FLOAT (53) NOT NULL,
    [Discount]        REAL       CONSTRAINT [DF_Product_Details_Discount] DEFAULT ((0)) NOT NULL,
    [InsertDate]      DATETIME   DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT        DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME   NULL,
    [UpdateUserId]    INT        NULL,
    [IsActive]        INT        DEFAULT ((1)) NOT NULL,
    [TenantId]        INT        DEFAULT ((1)) NOT NULL,
    [DetailID]        INT        IDENTITY (1, 1) NOT NULL,
    CONSTRAINT [PK_Product_Details] PRIMARY KEY CLUSTERED ([ProductID] ASC, [WaresID] ASC),
    CONSTRAINT [FK_Product Details_Products] FOREIGN KEY ([ProductID]) REFERENCES [dbo].[Products] ([ProductID]),
    CONSTRAINT [FK_Product_Details_Wares] FOREIGN KEY ([WaresID]) REFERENCES [dbo].[Wares] ([WaresID])
);

