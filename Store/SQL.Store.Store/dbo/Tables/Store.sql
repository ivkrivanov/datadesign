CREATE TABLE [dbo].[Store] (
    [Position]            BIGINT          DEFAULT ((0)) NULL,
    [WaresMode]           BIT             NULL,
    [MoveID]              INT             NOT NULL,
    [ShopID]              INT             NOT NULL,
    [WaresID]             INT             NOT NULL,
    [Key]                 NVARCHAR (15)   NULL,
    [Date]                DATETIME        NOT NULL,
    [OperationID]         INT             NOT NULL,
    [IncomeQuantity]      DECIMAL (15, 4) NULL,
    [IncomeSinglePrice]   DECIMAL (15, 4) NULL,
    [IncomeValue]         DECIMAL (15, 4) NULL,
    [AIncomeSinglePrice]  DECIMAL (15, 4) NULL,
    [AIncomeValue]        DECIMAL (15, 4) NULL,
    [ExpenceQuantity]     DECIMAL (15, 4) NULL,
    [ExpenceSinglePrice]  DECIMAL (15, 4) NULL,
    [ExpenceValue]        DECIMAL (15, 4) NULL,
    [AExpenceSinglePrice] DECIMAL (15, 4) NULL,
    [AExpenceValue]       DECIMAL (15, 4) NULL,
    [RestQuantity]        DECIMAL (15, 4) NULL,
    [RestSinglePrice]     DECIMAL (15, 4) NULL,
    [RestValue]           DECIMAL (15, 4) NULL,
    [ARestQuantity]       DECIMAL (15, 4) NULL,
    [ARestSinglePrice]    DECIMAL (15, 4) NULL,
    [ARestValue]          DECIMAL (15, 4) NULL,
    [ReCost]              DECIMAL (15, 4) NULL,
    [AReCost]             DECIMAL (15, 4) NULL,
    [Mistake]             BIT             NULL,
    [AMistake]            BIT             NULL,
    [InsertDate]          DATETIME        DEFAULT (getdate()) NOT NULL,
    [InsertUserId]        INT             DEFAULT ((1)) NOT NULL,
    [UpdateDate]          DATETIME        NULL,
    [UpdateUserId]        INT             NULL,
    [IsActive]            INT             DEFAULT ((1)) NOT NULL,
    [TenantId]            INT             DEFAULT ((1)) NOT NULL
);


GO
CREATE NONCLUSTERED INDEX [NonClusteredIndex-Key]
    ON [dbo].[Store]([Key] ASC);


GO
CREATE NONCLUSTERED INDEX [NonClusteredIndex-20190204-211834]
    ON [dbo].[Store]([Date] ASC);

