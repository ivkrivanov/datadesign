CREATE TABLE [dbo].[Shops] (
    [ID]           INT           IDENTITY (1, 1) NOT NULL,
    [ShopID]       NVARCHAR (14) DEFAULT ((0)) NOT NULL,
    [ShopName]     NVARCHAR (40) NOT NULL,
    [ContactName]  NVARCHAR (30) NULL,
    [ContactTitle] NVARCHAR (30) NULL,
    [Address]      NVARCHAR (60) NULL,
    [City]         NVARCHAR (15) NULL,
    [Region]       NVARCHAR (15) NULL,
    [PostalCode]   NVARCHAR (10) NULL,
    [Country]      NVARCHAR (15) NULL,
    [Phone]        NVARCHAR (24) NULL,
    [InsertDate]   DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId] INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]   DATETIME      NULL,
    [UpdateUserId] INT           NULL,
    [IsActive]     INT           DEFAULT ((1)) NOT NULL,
    [TenantId]     INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Shops] PRIMARY KEY CLUSTERED ([ShopID] ASC)
);


GO
CREATE NONCLUSTERED INDEX [City]
    ON [dbo].[Shops]([City] ASC);


GO
CREATE NONCLUSTERED INDEX [PostalCode]
    ON [dbo].[Shops]([PostalCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Region]
    ON [dbo].[Shops]([Region] ASC);


GO
CREATE NONCLUSTERED INDEX [ShopName]
    ON [dbo].[Shops]([ShopName] ASC);

