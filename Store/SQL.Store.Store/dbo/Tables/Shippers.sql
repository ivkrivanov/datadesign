CREATE TABLE [dbo].[Shippers] (
    [ShipperID]    INT           IDENTITY (1, 1) NOT NULL,
    [CompanyName]  NVARCHAR (40) NOT NULL,
    [Phone]        NVARCHAR (24) NULL,
    [InsertDate]   DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId] INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]   DATETIME      NULL,
    [UpdateUserId] INT           NULL,
    [IsActive]     INT           DEFAULT ((1)) NOT NULL,
    [TenantId]     INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Shippers] PRIMARY KEY CLUSTERED ([ShipperID] ASC)
);

