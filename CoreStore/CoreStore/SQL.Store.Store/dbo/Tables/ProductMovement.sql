CREATE TABLE [dbo].[ProductMovement] (
    [ProductMoveID]   INT           IDENTITY (1, 1) NOT NULL,
    [ShopID]          NVARCHAR (14) NOT NULL,
    [CounterpartyID]  NVARCHAR (14) NOT NULL,
    [EmployeeID]      INT           NULL,
    [ShipperID]       INT           NULL,
    [OperationTypeID] INT           NOT NULL,
    [OrderDate]       DATETIME      NULL,
    [RequiredDate]    DATETIME      NULL,
    [ShippedDate]     DATETIME      NULL,
    [InsertDate]      DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME      NULL,
    [UpdateUserId]    INT           NULL,
    [IsActive]        INT           DEFAULT ((1)) NOT NULL,
    [TenantId]        INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_ProductMovement] PRIMARY KEY CLUSTERED ([ProductMoveID] ASC),
    CONSTRAINT [FK_ProductMovement_Counterparties] FOREIGN KEY ([CounterpartyID]) REFERENCES [dbo].[Counterparties] ([CounterpartyID]),
    CONSTRAINT [FK_ProductMovement_Employees] FOREIGN KEY ([EmployeeID]) REFERENCES [dbo].[Employees] ([EmployeeID]),
    CONSTRAINT [FK_ProductMovement_OperationTypes] FOREIGN KEY ([OperationTypeID]) REFERENCES [dbo].[OperationType] ([OperationTypeID]),
    CONSTRAINT [FK_ProductMovement_Shippers] FOREIGN KEY ([ShipperID]) REFERENCES [dbo].[Shippers] ([ShipperID]),
    CONSTRAINT [FK_ProductMovement_Shops] FOREIGN KEY ([ShopID]) REFERENCES [dbo].[Shops] ([ShopID])
);

