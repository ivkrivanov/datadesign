CREATE TABLE [dbo].[WaresMovement Details] (
    [DetailID]     INT             IDENTITY (1, 1) NOT NULL,
    [WaresMoveID]  INT             NOT NULL,
    [WaresID]      INT             NOT NULL,
    [Quantity]     DECIMAL (15, 4) CONSTRAINT [DF_WaresMovement Detail_Quantity] DEFAULT ((1)) NOT NULL,
    [SinglePrice]  DECIMAL (15, 4) CONSTRAINT [DF_WaresMovement Detail_SinglePrice] DEFAULT ((0)) NOT NULL,
    [Discount]     DECIMAL (15, 4) CONSTRAINT [DF_WaresMovement Detail_Discount] DEFAULT ((0)) NOT NULL,
    [InsertDate]   DATETIME        DEFAULT (getdate()) NOT NULL,
    [InsertUserId] INT             DEFAULT ((1)) NOT NULL,
    [UpdateDate]   DATETIME        NULL,
    [UpdateUserId] INT             NULL,
    [IsActive]     INT             DEFAULT ((1)) NOT NULL,
    [TenantId]     INT             DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_WaresMovement Detail] PRIMARY KEY CLUSTERED ([WaresMoveID] ASC, [WaresID] ASC),
    CONSTRAINT [FK_WaresMovement_Details_Wares] FOREIGN KEY ([WaresID]) REFERENCES [dbo].[Wares] ([WaresID]),
    CONSTRAINT [FK_WaresMovement_Details_WaresMovement] FOREIGN KEY ([WaresMoveID]) REFERENCES [dbo].[WaresMovement] ([WaresMoveID])
);

