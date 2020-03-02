CREATE TABLE [dbo].[WaresMovement] (
    [WaresMoveID]     INT           IDENTITY (1, 1) NOT NULL,
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
    CONSTRAINT [PK_OrderStock] PRIMARY KEY CLUSTERED ([WaresMoveID] ASC),
    CONSTRAINT [FK_WaresMovement_Counterparties] FOREIGN KEY ([CounterpartyID]) REFERENCES [dbo].[Counterparties] ([CounterpartyID]),
    CONSTRAINT [FK_WaresMovement_Employees] FOREIGN KEY ([EmployeeID]) REFERENCES [dbo].[Employees] ([EmployeeID]),
    CONSTRAINT [FK_WaresMovement_OperationTypes] FOREIGN KEY ([OperationTypeID]) REFERENCES [dbo].[OperationType] ([OperationTypeID]),
    CONSTRAINT [FK_WaresMovement_Shippers] FOREIGN KEY ([ShipperID]) REFERENCES [dbo].[Shippers] ([ShipperID]),
    CONSTRAINT [FK_WaresMovement_Shops] FOREIGN KEY ([ShopID]) REFERENCES [dbo].[Shops] ([ShopID])
);

