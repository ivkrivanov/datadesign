CREATE TABLE [dbo].[ProductMovement Details] (
    [ProductMoveID] INT             NOT NULL,
    [ProductID]     INT             NOT NULL,
    [Quantity]      REAL            CONSTRAINT [DF_ProductMovement Detail_Quantity] DEFAULT ((1)) NOT NULL,
    [SinglePrice]   DECIMAL (15, 4) CONSTRAINT [DF_ProductMovement Detail_SinglePrice] DEFAULT ((0)) NOT NULL,
    [Discount]      DECIMAL (15, 4) CONSTRAINT [DF_ProductMovement Detail_Discount] DEFAULT ((0)) NOT NULL,
    [DetailID]      INT             IDENTITY (1, 1) NOT NULL,
    [InsertDate]    DATETIME        DEFAULT (getdate()) NOT NULL,
    [InsertUserId]  INT             DEFAULT ((1)) NOT NULL,
    [UpdateDate]    DATETIME        NULL,
    [UpdateUserId]  INT             NULL,
    [IsActive]      INT             DEFAULT ((1)) NOT NULL,
    [TenantId]      INT             DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_ProductMovement Detail] PRIMARY KEY CLUSTERED ([ProductMoveID] ASC, [ProductID] ASC),
    CONSTRAINT [CK_SinglePrice] CHECK ([SinglePrice]>=(0)),
    CONSTRAINT [FK_ProductMovement_Details_Product] FOREIGN KEY ([ProductID]) REFERENCES [dbo].[Products] ([ProductID]),
    CONSTRAINT [FK_ProductMovement_Details_ProductMovement] FOREIGN KEY ([ProductMoveID]) REFERENCES [dbo].[ProductMovement] ([ProductMoveID])
);

