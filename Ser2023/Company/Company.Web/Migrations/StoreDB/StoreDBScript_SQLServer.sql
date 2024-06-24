USE Company_Store_V1
GO

/****** Object:  Table [dbo].[Categories]    Script Date: 19.6.2024 г. 12:17:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Categories] (
    [CategoryID]     INT           IDENTITY (1, 1) NOT NULL,
    [CategoryTypeID] INT           NOT NULL,
    [CategoryCode]   NVARCHAR (20) NULL,
    [CategoryName]   NVARCHAR (20) NOT NULL,
    [Description]    NTEXT         NULL,
    [Picture]        NVARCHAR(255) NULL,
    [InsertDate]     DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]   INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           DEFAULT ((1)) NOT NULL,
    [TenantId]       INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED ([CategoryID] ASC),
    CONSTRAINT [FK_Categories_CategoryTypes] FOREIGN KEY ([CategoryTypeID]) REFERENCES [dbo].[CategoriesType] ([CategoryTypeID])
);

GO
CREATE NONCLUSTERED INDEX [CategoryCode]
    ON [dbo].[Categories]([CategoryCode] ASC);


GO
CREATE NONCLUSTERED INDEX [CategoryName]
    ON [dbo].[Categories]([CategoryName] ASC);


/****** Object: ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CategoriesLang] (
    [ID]           INT            IDENTITY (1, 1) NOT NULL,
    [CategoryID]   INT            NOT NULL,
    [LanguageID]   INT            NOT NULL,
    [CategoryName] NVARCHAR (40)  NULL,
    [Description]  NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_CategoriesLang] PRIMARY KEY CLUSTERED ([ID] ASC)
);

/****** Object: ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CategoriesType] (
    [CategoryTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [Type]           SMALLINT      NOT NULL,
    [CategoryType]   NVARCHAR (30) NOT NULL,
    [InsertDate]     DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]   INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           DEFAULT ((1)) NOT NULL,
    [TenantId]       INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_CategoryType] PRIMARY KEY CLUSTERED ([CategoryTypeID] ASC)
);

GO

CREATE NONCLUSTERED INDEX [CategoryType]
    ON [dbo].[CategoriesType]([CategoryType] ASC);

  /****** Object: ******/
  
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Counterparties] (
    [ID]             INT           IDENTITY (1, 1) NOT NULL,
    [CounterpartyID] NVARCHAR (14) DEFAULT ((0)) NOT NULL,
    [CompanyName]    NVARCHAR (40) NOT NULL,
    [ContactName]    NVARCHAR (40) NULL,
    [ContactTitle]   NVARCHAR (30) NULL,
    [Address]        NVARCHAR (60) NULL,
    [City]           NVARCHAR (15) NULL,
    [Region]         NVARCHAR (15) NULL,
    [PostalCode]     NVARCHAR (10) NULL,
    [Country]        NVARCHAR (20) NULL,
    [Phone]          NVARCHAR (24) NULL,
    [InsertDate]     DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]   INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           DEFAULT ((1)) NOT NULL,
    [TenantId]       INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Counterparties] PRIMARY KEY CLUSTERED ([CounterpartyID] ASC)
);


GO
CREATE NONCLUSTERED INDEX [City]
    ON [dbo].[Counterparties]([City] ASC);


GO
CREATE NONCLUSTERED INDEX [CompanyName]
    ON [dbo].[Counterparties]([CompanyName] ASC);


GO
CREATE NONCLUSTERED INDEX [PostalCode]
    ON [dbo].[Counterparties]([PostalCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Region]
    ON [dbo].[Counterparties]([Region] ASC);


/****** Object: [CounterpartyDetails] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CounterpartyDetails] (
    [ID]              INT            NOT NULL,
    [LastContactDate] DATETIME       NULL,
    [LastContactedBy] INT            NULL,
    [Email]           NVARCHAR (100) NULL,
    [SendBulletin]    BIT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_CounterpartyDetails] PRIMARY KEY CLUSTERED ([ID] ASC),
    CONSTRAINT [FK_CounterpartyDetails_LastContactedBy] FOREIGN KEY ([LastContactedBy]) REFERENCES [dbo].[Employees] ([EmployeeID])
);

/****** Object: [CounterpartyRepresentatives] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CounterpartyRepresentatives] (
    [RepresentativeID] INT IDENTITY (1, 1) NOT NULL,
    [CounterpartyID]   INT NOT NULL,
    [EmployeeID]       INT NOT NULL,
    CONSTRAINT [PK_CounterpartyRepresentatives] PRIMARY KEY CLUSTERED ([RepresentativeID] ASC)
);

/****** Object: [DocumentType] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[DocumentType] (
    [DocumentTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [DocumentName]   NVARCHAR (50) NOT NULL,
    [InsertDate]     DATETIME      NOT NULL DEFAULT (getdate()),
    [InsertUserId]   INT           NOT NULL DEFAULT ((1)),
    [UpdateDate]     DATETIME      NULL,
    [UpdateUserId]   INT           NULL,
    [IsActive]       INT           NULL DEFAULT ((1)),
    [TenantId]       INT           NULL DEFAULT ((1)),
    CONSTRAINT [PK_DocumentType] PRIMARY KEY CLUSTERED ([DocumentTypeID] ASC)
);

/****** Object: [Employees] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Employees] (
    [EmployeeID]      INT            IDENTITY (1, 1) NOT NULL,
    [LastName]        NVARCHAR (20)  NOT NULL,
    [FirstName]       NVARCHAR (10)  NOT NULL,
    [Title]           NVARCHAR (30)  NULL,
    [TitleOfCourtesy] NVARCHAR (25)  NULL,
    [BirthDate]       DATETIME       NULL,
    [HireDate]        DATETIME       NULL,
    [Address]         NVARCHAR (60)  NULL,
    [City]            NVARCHAR (15)  NULL,
    [Region]          NVARCHAR (15)  NULL,
    [PostalCode]      NVARCHAR (10)  NULL,
    [Country]         NVARCHAR (15)  NULL,
    [HomePhone]       NVARCHAR (24)  NULL,
    [Extension]       NVARCHAR (4)   NULL,
    [Photo]           IMAGE          NULL,
    [Notes]           NTEXT          NULL,
    [ReportsTo]       INT            NULL,
    [PhotoPath]       NVARCHAR (255) NULL,
    [InsertDate]      DATETIME       DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT            DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME       NULL,
    [UpdateUserId]    INT            NULL,
    [IsActive]        INT            DEFAULT ((1)) NOT NULL,
    [TenantId]        INT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED ([EmployeeID] ASC),
    CONSTRAINT [CK_Birthdate] CHECK ([BirthDate]<getdate()),
    CONSTRAINT [FK_Employees_Employees] FOREIGN KEY ([ReportsTo]) REFERENCES [dbo].[Employees] ([EmployeeID])
);


GO
CREATE NONCLUSTERED INDEX [LastName]
    ON [dbo].[Employees]([LastName] ASC);


GO
CREATE NONCLUSTERED INDEX [PostalCode]
    ON [dbo].[Employees]([PostalCode] ASC);


/****** Object: [EmployeeTerritories] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EmployeeTerritories] (
    [EmployeeID]  INT           NOT NULL,
    [TerritoryID] NVARCHAR (20) NOT NULL,
    CONSTRAINT [PK_EmployeeTerritories] PRIMARY KEY NONCLUSTERED ([EmployeeID] ASC, [TerritoryID] ASC),
    CONSTRAINT [FK_EmployeeTerritories_Employees] FOREIGN KEY ([EmployeeID]) REFERENCES [dbo].[Employees] ([EmployeeID]),
    CONSTRAINT [FK_EmployeeTerritories_Territories] FOREIGN KEY ([TerritoryID]) REFERENCES [dbo].[Territories] ([TerritoryID])
);

/****** Object: [Measures] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Measures] (
    [MeasureID]    INT           IDENTITY (1, 1) NOT NULL,
    [MeasureName]  NVARCHAR (20) NOT NULL,
    [InsertDate]   DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId] INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]   DATETIME      NULL,
    [UpdateUserId] INT           NULL,
    [IsActive]     INT           DEFAULT ((1)) NOT NULL,
    [TenantId]     INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Measures] PRIMARY KEY CLUSTERED ([MeasureID] ASC)
);

/****** Object: [Notes] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Notes] (
    [NoteID]       BIGINT         IDENTITY (1, 1) NOT NULL,
    [EntityType]   NVARCHAR (100) NOT NULL,
    [EntityID]     BIGINT         NOT NULL,
    [Text]         NVARCHAR (MAX) NOT NULL,
    [InsertUserId] INT            NOT NULL,
    [InsertDate]   DATETIME       NOT NULL,
    CONSTRAINT [PK_Notes] PRIMARY KEY CLUSTERED ([NoteID] ASC)
);

/****** Object: [OperationType] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[OperationType] (
    [OperationTypeID] INT           IDENTITY (1, 1) NOT NULL,
    [OpCode]          SMALLINT      NOT NULL,
    [Operation]       NVARCHAR (30) NOT NULL,
    [InsertDate]      DATETIME      DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT           DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME      NULL,
    [UpdateUserId]    INT           NULL,
    [IsActive]        INT           DEFAULT ((1)) NOT NULL,
    [TenantId]        INT           DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_OperationType] PRIMARY KEY NONCLUSTERED ([OperationTypeID] ASC)
);

GO
CREATE UNIQUE NONCLUSTERED INDEX [OpCode]
    ON [dbo].[OperationType]([OpCode] ASC);


/****** Object: [Product Details] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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

/****** Object: [ProductLang] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductLang] (
    [ID]          INT           IDENTITY (1, 1) NOT NULL,
    [ProductID]   INT           NOT NULL,
    [LanguageID]  INT           NOT NULL,
    [ProductName] NVARCHAR (40) NULL,
    CONSTRAINT [PK_ProductLang] PRIMARY KEY CLUSTERED ([ID] ASC)
);

/****** Object: [ProductLog] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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

/****** Object: [ProductMovement Details] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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

/****** Object: [ProductMovement Doc] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductMovement Doc] (
    [ProductMoveID]  INT           NOT NULL,
    [DocumentTypeID] INT           NULL,
    [DocumentNumber] NVARCHAR (10) NULL,
    [DocumentDate]   DATE          NULL,
    CONSTRAINT [PK_ProductMovement Doc] PRIMARY KEY CLUSTERED ([ProductMoveID] ASC),
    CONSTRAINT [FK_ProductMovement Doc_DocumentType] FOREIGN KEY ([DocumentTypeID]) REFERENCES [dbo].[DocumentType] ([DocumentTypeID])
);

/****** Object: [ProductMovement] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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

/****** Object: [Products] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Products] (
    [ProductID]       INT            IDENTITY (1, 1) NOT NULL,
    [ProductCode]     NVARCHAR (15)  NOT NULL,
    [ProductBarcode]  NVARCHAR (15)  NULL,
    [ProductLabel]    NVARCHAR (20)  NULL,
    [ProductName]     NVARCHAR (60)  NOT NULL,
    [ProductImage]    NVARCHAR (255) NULL,
    [SupplierID]      INT            NULL,
    [CounterpartyID]  NVARCHAR (14)  NULL,
    [CategoryID]      INT            NULL,
    [MeasureID]       INT            NOT NULL,
    [QuantityPerUnit] NVARCHAR (20)  NULL,
    [UnitPrice]       MONEY          CONSTRAINT [DF_Products_UnitPrice] DEFAULT ((0)) NULL,
    [UnitsInStock]    SMALLINT       CONSTRAINT [DF_Products_UnitsInStock] DEFAULT ((0)) NULL,
    [UnitsOnOrder]    SMALLINT       CONSTRAINT [DF_Products_UnitsOnOrder] DEFAULT ((0)) NULL,
    [ReorderLevel]    SMALLINT       CONSTRAINT [DF_Products_ReorderLevel] DEFAULT ((0)) NULL,
    [Discontinued]    BIT            CONSTRAINT [DF_Products_Discontinued] DEFAULT ((0)) NOT NULL,
    [InsertDate]      DATETIME       DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT            DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME       NULL,
    [UpdateUserId]    INT            NULL,
    [IsActive]        INT            DEFAULT ((1)) NOT NULL,
    [TenantId]        INT            DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED ([ProductID] ASC),
    CONSTRAINT [CK_Products_UnitPrice] CHECK ([UnitPrice]>=(0)),
    CONSTRAINT [CK_ReorderLevel] CHECK ([ReorderLevel]>=(0)),
    CONSTRAINT [CK_UnitsInStock] CHECK ([UnitsInStock]>=(0)),
    CONSTRAINT [CK_UnitsOnOrder] CHECK ([UnitsOnOrder]>=(0)),
    CONSTRAINT [FK_Product_Counterparties] FOREIGN KEY ([CounterpartyID]) REFERENCES [dbo].[Counterparties] ([CounterpartyID]),
    CONSTRAINT [FK_Product_Measures] FOREIGN KEY ([MeasureID]) REFERENCES [dbo].[Measures] ([MeasureID]),
    CONSTRAINT [FK_Products_Categories] FOREIGN KEY ([CategoryID]) REFERENCES [dbo].[Categories] ([CategoryID]),
    CONSTRAINT [FK_Products_Suppliers] FOREIGN KEY ([SupplierID]) REFERENCES [dbo].[Suppliers] ([SupplierID])
);

/****** Object: [Region] ******/

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Region] (
    [RegionID]          INT           NOT NULL,
    [RegionDescription] NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Region] PRIMARY KEY NONCLUSTERED ([RegionID] ASC)
);

/****** Object: [Shippers] ******/

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

/****** Object: [Shops] ******/

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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
GO

/****** Object: [Store] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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
GO

/****** Object: [Territories]  ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Territories] (
    [ID]                   INT           IDENTITY (1, 1) NOT NULL,
    [TerritoryID]          NVARCHAR (20) NOT NULL,
    [TerritoryDescription] NVARCHAR (50) NOT NULL,
    [RegionID]             INT           NOT NULL,
    CONSTRAINT [PK_Territories] PRIMARY KEY NONCLUSTERED ([TerritoryID] ASC),
    CONSTRAINT [FK_Territories_Region] FOREIGN KEY ([RegionID]) REFERENCES [dbo].[Region] ([RegionID])
);

/****** Object: [Wares] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Wares] (
    [WaresID]         INT             IDENTITY (1, 1) NOT NULL,
    [WaresCode]       NVARCHAR (15)   NOT NULL,
    [WaresBarcode]    NVARCHAR (15)   NULL,
    [WaresLabel]      NVARCHAR (20)   NULL,
    [WaresName]       NVARCHAR (60)   NULL,
    [WaresImage]      NVARCHAR (255)  NULL,
    [SupplierID]      INT             NULL,
    [CounterpartyID]  NVARCHAR (14)   NULL,
    [CategoryID]      INT             NULL,
    [MeasureID]       INT             NOT NULL,
    [QuantityPerUnit] DECIMAL (15, 4) NULL,
    [UnitPrice]       DECIMAL (15, 4) NULL,
    [UnitsInStock]    DECIMAL (15, 4) NULL,
    [UnitsOnOrder]    DECIMAL (15, 4) NULL,
    [Discontinued]    BIT             NOT NULL,
    [AccountID]       INT             NULL,
    [InsertDate]      DATETIME        DEFAULT (getdate()) NOT NULL,
    [InsertUserId]    INT             DEFAULT ((1)) NOT NULL,
    [UpdateDate]      DATETIME        NULL,
    [UpdateUserId]    INT             NULL,
    [IsActive]        INT             DEFAULT ((1)) NOT NULL,
    [TenantId]        INT             DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_Wares] PRIMARY KEY CLUSTERED ([WaresID] ASC),
    CONSTRAINT [FK_Wares_Categories] FOREIGN KEY ([CategoryID]) REFERENCES [dbo].[Categories] ([CategoryID]),
    CONSTRAINT [FK_Wares_Counterparties] FOREIGN KEY ([CounterpartyID]) REFERENCES [dbo].[Counterparties] ([CounterpartyID]),
    CONSTRAINT [FK_Wares_Measures] FOREIGN KEY ([MeasureID]) REFERENCES [dbo].[Measures] ([MeasureID]),
    CONSTRAINT [FK_Wares_Suppliers] FOREIGN KEY ([SupplierID]) REFERENCES [dbo].[Suppliers] ([SupplierID])
);

GO

/****** Object: [WaresLang] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WaresLang] (
    [ID]          INT            IDENTITY (1, 1) NOT NULL,
    [WaresID]     INT            NOT NULL,
    [LanguageID]  INT            NOT NULL,
    [WaresName]   NVARCHAR (60)  NULL,
    [Description] NVARCHAR (MAX) NULL,
    CONSTRAINT [PK_WaresLang] PRIMARY KEY CLUSTERED ([ID] ASC)
);

GO

/****** Object: [WaresMovement Details] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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

GO

/****** Object: [WaresMovement Doc] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WaresMovement Doc] (
    [WaresMoveID]    INT           NOT NULL,
    [DocumentTypeID] INT           NULL,
    [DocumentNumber] NVARCHAR (10) NULL,
    [DocumentDate]   DATE          NULL,
    CONSTRAINT [PK_WaresMovement Doc] PRIMARY KEY CLUSTERED ([WaresMoveID] ASC),
    CONSTRAINT [FK_WaresMovement Doc_DocumentType] FOREIGN KEY ([DocumentTypeID]) REFERENCES [dbo].[DocumentType] ([DocumentTypeID])
);

GO

/****** Object: [WaresMovement] ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

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

GO

/****** Object:  ******/


/****** Object:  ******/


