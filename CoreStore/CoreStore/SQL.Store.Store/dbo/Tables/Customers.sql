CREATE TABLE [dbo].[Customers] (
    [ID]           INT            IDENTITY (1, 1) NOT NULL,
    [CustomerID]   NVARCHAR (14)  DEFAULT ((0)) NOT NULL,
    [CompanyName]  NVARCHAR (40)  NOT NULL,
    [ContactName]  NVARCHAR (40)  NULL,
    [ContactTitle] NVARCHAR (30)  NULL,
    [Address]      NVARCHAR (60)  NULL,
    [City]         NVARCHAR (15)  NULL,
    [Region]       NVARCHAR (15)  NULL,
    [PostalCode]   NVARCHAR (10)  NULL,
    [Country]      NVARCHAR (20)  NULL,
    [Phone]        NVARCHAR (24)  NULL,
    [Fax]          NVARCHAR (24)  NULL,
    [Email]        NVARCHAR (255) NULL,
    [InsertDate]   DATETIME       DEFAULT (getdate()) NOT NULL,
    [InsertUserId] INT            DEFAULT ((1)) NOT NULL,
    [UpdateDate]   DATETIME       NULL,
    [UpdateUserId] INT            NULL,
    [IsActive]     INT            DEFAULT ((1)) NOT NULL,
    [TenantId]     INT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED ([CustomerID] ASC)
);


GO
CREATE NONCLUSTERED INDEX [City]
    ON [dbo].[Customers]([City] ASC);


GO
CREATE NONCLUSTERED INDEX [CompanyName]
    ON [dbo].[Customers]([CompanyName] ASC);


GO
CREATE NONCLUSTERED INDEX [PostalCode]
    ON [dbo].[Customers]([PostalCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Region]
    ON [dbo].[Customers]([Region] ASC);

