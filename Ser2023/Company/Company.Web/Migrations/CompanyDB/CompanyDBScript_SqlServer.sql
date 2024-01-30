USE Company_Company_v1
GO

/****** Object:  UserDefinedDataType [dbo].[Name]    Script Date: 3.12.2023 г. 18:17:26 ******/
CREATE TYPE [dbo].[Name] FROM [nvarchar](50) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NameStyle]    Script Date: 3.12.2023 г. 18:18:28 ******/
CREATE TYPE [dbo].[NameStyle] FROM [bit] NOT NULL
GO
/****** Object:  UserDefinedDataType [dbo].[Phone]    Script Date: 3.12.2023 г. 18:18:50 ******/
CREATE TYPE [dbo].[Phone] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[OrderNumber]    Script Date: 3.12.2023 г. 18:19:20 ******/
CREATE TYPE [dbo].[OrderNumber] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[AccountNumber]    Script Date: 3.12.2023 г. 18:19:42 ******/
CREATE TYPE [dbo].[AccountNumber] FROM [nvarchar](15) NULL
GO

/****** Object:  Table [person].[Country]    Script Date: 3.12.2023 г. 12:17:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE SCHEMA [person]
GO

CREATE TABLE [person].[Country](
	[CountryCode] [nvarchar](3) NOT NULL,
	[Name] [dbo].[Name] NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Country_CountryCode] PRIMARY KEY CLUSTERED 
(
	[CountryCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [person].[Country] ADD  CONSTRAINT [DF_Country_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[Country] ADD  CONSTRAINT [DF_Country_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[Country] ADD  CONSTRAINT [DF_Country_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[Country] ADD  CONSTRAINT [DF_Country_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ISO standard code for countries and regions.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'COLUMN',@level2name=N'CountryCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Country or region name.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'COLUMN',@level2name=N'Name'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Date and time the record was last updated.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'COLUMN',@level2name=N'ModifiedDate'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'CONSTRAINT',@level2name=N'PK_Country_CountryCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Lookup table containing the ISO standard codes for countries and regions.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country'
GO

/****** Object:  Table [person].[StateProvince]    Script Date: 3.12.2023 г. 12:43:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[StateProvince](
	[StateProvinceId] [int] IDENTITY(1,1) NOT NULL,
	[StateProvinceCode] [nchar](3) NOT NULL,
	[CountryCode] [nvarchar](3) NOT NULL,
	--[IsOnlyStateProvinceFlag] [dbo].[Flag] NOT NULL,
	[Name] [dbo].[Name] NOT NULL,
	[TerritoryID] [int] NOT NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_StateProvince_StateProvinceId] PRIMARY KEY CLUSTERED 
(
	[StateProvinceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--ALTER TABLE [person].[StateProvince] ADD  CONSTRAINT [DF_StateProvince_IsOnlyStateProvinceFlag]  DEFAULT ((1)) FOR [IsOnlyStateProvinceFlag]
--GO

--ALTER TABLE [person].[StateProvince] ADD  CONSTRAINT [DF_StateProvince_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[StateProvince] ADD  CONSTRAINT [DF_StateProvince_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[StateProvince] ADD  CONSTRAINT [DF_StateProvince_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[StateProvince] ADD  CONSTRAINT [DF_StateProvince_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[StateProvince] ADD  CONSTRAINT [DF_StateProvince_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [person].[StateProvince]  WITH CHECK ADD  CONSTRAINT [FK_StateProvince_Country_CountryCode] FOREIGN KEY([CountryCode])
REFERENCES [person].[Country] ([CountryCode])
GO

ALTER TABLE [person].[StateProvince] CHECK CONSTRAINT [FK_StateProvince_Country_CountryCode]
GO

--ALTER TABLE [person].[StateProvince]  WITH CHECK ADD  CONSTRAINT [FK_StateProvince_SalesTerritory_TerritoryID] FOREIGN KEY([TerritoryID])
--REFERENCES [Sales].[SalesTerritory] ([TerritoryID])
--GO

--ALTER TABLE [Person].[StateProvince] CHECK CONSTRAINT [FK_StateProvince_SalesTerritory_TerritoryID]
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for StateProvince records.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'StateProvinceId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ISO standard state or province code.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'StateProvinceCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ISO standard country or region code. Foreign key to Country.CountryCode. ' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'CountryCode'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'0 = StateProvinceCode exists. 1 = StateProvinceCode unavailable, using CountryCode.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'IsOnlyStateProvinceFlag'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of 1 (TRUE)' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'CONSTRAINT',@level2name=N'DF_StateProvince_IsOnlyStateProvinceFlag'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'State or province description.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'Name'
GO

----EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ID of the territory in which the state or province is located. Foreign key to SalesTerritory.SalesTerritoryID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'TerritoryID'
----GO

----EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'rowguid'
----GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'CONSTRAINT',@level2name=N'DF_StateProvince_rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Date and time the record was last updated.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'COLUMN',@level2name=N'ModifiedDate'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of GETDATE()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'CONSTRAINT',@level2name=N'DF_StateProvince_ModifiedDate'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'CONSTRAINT',@level2name=N'PK_StateProvince_StateProvinceId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'State and province lookup table.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing Country.CountryCode.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'CONSTRAINT',@level2name=N'FK_StateProvince_Country_CountryCode'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing SalesTerritory.TerritoryID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'StateProvince', @level2type=N'CONSTRAINT',@level2name=N'FK_StateProvince_SalesTerritory_TerritoryID'
--GO

/****** Object:  Table [Person].[AddressType]    Script Date: 3.12.2023 г. 13:15:38 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[AddressType](
	[AddressTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [dbo].[Name] NOT NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_AddressType_AddressTypeId] PRIMARY KEY CLUSTERED 
(
	[AddressTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--ALTER TABLE [person].[AddressType] ADD  CONSTRAINT [DF_AddressType_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[AddressType] ADD  CONSTRAINT [DF_AddressType_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[AddressType] ADD  CONSTRAINT [DF_AddressType_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[AddressType] ADD  CONSTRAINT [DF_AddressType_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[AddressType] ADD  CONSTRAINT [DF_AddressType_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for AddressType records.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'AddressType', @level2type=N'COLUMN',@level2name=N'AddressTypeID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Address type description. For example, Billing, Home, or Shipping.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'AddressType', @level2type=N'COLUMN',@level2name=N'Name'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'AddressType', @level2type=N'COLUMN',@level2name=N'rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'AddressType', @level2type=N'CONSTRAINT',@level2name=N'DF_AddressType_rowguid'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'AddressType', @level2type=N'CONSTRAINT',@level2name=N'PK_AddressType_AddressTypeID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Types of addresses stored in the Address table. ' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'AddressType'
GO

--SET IDENTITY_INSERT [person].[AddressType] ON
INSERT [person].[AddressType] ([Name]) VALUES (N'Billing')
INSERT [person].[AddressType] ([Name]) VALUES (N'Home')
INSERT [person].[AddressType] ([Name]) VALUES (N'Main Office')
INSERT [person].[AddressType] ([Name]) VALUES (N'Primary')
INSERT [person].[AddressType] ([Name]) VALUES (N'Shipping')
INSERT [person].[AddressType] ([Name]) VALUES (N'Archive')
--SET IDENTITY_INSERT [person].[AddressType] OFF

/****** Object:  Table [Person].[Address]    Script Date: 3.12.2023 г. 13:55:02 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[Address](
	[AddressId] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[AddressLine1] [nvarchar](60) NOT NULL,
	[AddressLine2] [nvarchar](60) NULL,
	[City] [nvarchar](30) NOT NULL,
    [CountryCode] [nvarchar](3) NOT NULL,
	[StateProvinceId] [int] NOT NULL,
	[PostalCode] [nvarchar](15) NOT NULL,
	--[SpatialLocation] [geography] NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Address_AddressId] PRIMARY KEY CLUSTERED 
(
	[AddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] --TEXTIMAGE_ON [PRIMARY]
GO

--ALTER TABLE [person].[Address] ADD  CONSTRAINT [DF_Address_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[Address] ADD  CONSTRAINT [DF_Address_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[Address] ADD  CONSTRAINT [DF_Addressv_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[Address] ADD  CONSTRAINT [DF_Address_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[Address] ADD  CONSTRAINT [DF_Addressv_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [person].[Address]  WITH CHECK ADD  CONSTRAINT [FK_Address_Country_CountryCode] FOREIGN KEY([CountryCode])
REFERENCES [person].[Country] ([CountryCode])

ALTER TABLE [person].[Address]  WITH CHECK ADD  CONSTRAINT [FK_Address_StateProvince_StateProvinceId] FOREIGN KEY([StateProvinceId])
REFERENCES [person].[StateProvince] ([StateProvinceId])
GO

ALTER TABLE [person].[Address] CHECK CONSTRAINT [FK_Address_StateProvince_StateProvinceId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for Address records.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'AddressID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'First street address line.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'AddressLine1'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Second street address line.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'AddressLine2'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Name of the city.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'City'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Unique identification number for the state or province. Foreign key to StateProvince table.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'StateProvinceID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Postal code for the street address.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'PostalCode'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Latitude and longitude of this address.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'SpatialLocation'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'CONSTRAINT',@level2name=N'DF_Address_rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Date and time the record was last updated.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'COLUMN',@level2name=N'ModifiedDate'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of GETDATE()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'CONSTRAINT',@level2name=N'DF_Address_ModifiedDate'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'CONSTRAINT',@level2name=N'PK_Address_AddressID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Street address information for customers, employees, and vendors.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing StateProvince.StateProvinceID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Address', @level2type=N'CONSTRAINT',@level2name=N'FK_Address_StateProvince_StateProvinceID'
GO

/****** Object:  Table [person].[BusinessEntity]    Script Date: 3.12.2023 г. 14:14:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[BusinessEntity](
	[BusinessEntityId] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_BusinessEntity_BusinessEntityId] PRIMARY KEY CLUSTERED 
(
	[BusinessEntityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--ALTER TABLE [person].[BusinessEntity] ADD  CONSTRAINT [DF_BusinessEntity_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[BusinessEntity] ADD  CONSTRAINT [DF_BusinessEntity_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[BusinessEntity] ADD  CONSTRAINT [DF_BusinessEntity_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[BusinessEntity] ADD  CONSTRAINT [DF_BusinessEntity_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[BusinessEntity] ADD  CONSTRAINT [DF_BusinessEntity_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for all customers, vendors, and employees.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntity', @level2type=N'COLUMN',@level2name=N'BusinessEntityID'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntity', @level2type=N'COLUMN',@level2name=N'rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntity', @level2type=N'CONSTRAINT',@level2name=N'DF_BusinessEntity_rowguid'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntity', @level2type=N'CONSTRAINT',@level2name=N'PK_BusinessEntity_BusinessEntityID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Source of the ID that connects vendors, customers, and employees with address and contact information.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntity'
GO

/****** Object:  Table [person].[Person]    Script Date: 3.12.2023 г. 14:53:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE person.[Person](
	[BusinessEntityID] [int] NOT NULL,
	[PersonType] [nchar](2) NOT NULL,
	--[NameStyle] [dbo].[NameStyle] NOT NULL,
	[Title] [nvarchar](8) NULL,
	[FirstName] [dbo].[Name] NOT NULL,
	[MiddleName] [dbo].[Name] NOT NULL,
	[LastName] [dbo].[Name] NOT NULL,
	[Suffix] [nvarchar](10) NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Person_BusinessEntityID] PRIMARY KEY CLUSTERED 
(
	[BusinessEntityID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] --TEXTIMAGE_ON [PRIMARY]
GO

--ALTER TABLE [person].[Person] ADD  CONSTRAINT [DF_Person_NameStyle]  DEFAULT ((0)) FOR [NameStyle]
--GO

--ALTER TABLE [person].[Person] ADD  CONSTRAINT [DF_Person_EmailPromotion]  DEFAULT ((0)) FOR [EmailPromotion]
--GO

--ALTER TABLE [person].[Person] ADD  CONSTRAINT [DF_Person_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[Person] ADD  CONSTRAINT [DF_Person_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[Person] ADD  CONSTRAINT [DF_Person_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[Person] ADD  CONSTRAINT [DF_Person_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[Person] ADD  CONSTRAINT [DF_Person_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [person].[Person]  WITH CHECK ADD  CONSTRAINT [FK_Person_BusinessEntity_BusinessEntityId] FOREIGN KEY([BusinessEntityId])
REFERENCES [person].[BusinessEntity] ([BusinessEntityId])
GO

ALTER TABLE [person].[Person] CHECK CONSTRAINT [FK_Person_BusinessEntity_BusinessEntityId]
GO

--ALTER TABLE [person].[Person]  WITH CHECK ADD  CONSTRAINT [CK_Person_EmailPromotion] CHECK  (([EmailPromotion]>=(0) AND [EmailPromotion]<=(2)))
--GO

--ALTER TABLE [person].[Person] CHECK CONSTRAINT [CK_Person_EmailPromotion]
--GO

ALTER TABLE [person].[Person]  WITH CHECK ADD  CONSTRAINT [CK_Person_PersonType] CHECK  (([PersonType] IS NULL OR (upper([PersonType])='GC' OR upper([PersonType])='SP' OR upper([PersonType])='EM' OR upper([PersonType])='IN' OR upper([PersonType])='VC' OR upper([PersonType])='SC')))
GO

ALTER TABLE [person].[Person] CHECK CONSTRAINT [CK_Person_PersonType]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for Person records.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'BusinessEntityID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary type of person: SC = Store Contact, IN = Individual (retail) customer, SP = Sales person, EM = Employee (non-sales), VC = Vendor contact, GC = General contact' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'PersonType'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'0 = The data in FirstName and LastName are stored in western style (first name, last name) order.  1 = Eastern style (last name, first name) order.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'NameStyle'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of 0' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'CONSTRAINT',@level2name=N'DF_Person_NameStyle'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'A courtesy title. For example, Mr. or Ms.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'Title'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'First name of the person.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'FirstName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Middle name or middle initial of the person.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'MiddleName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Last name of the person.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'LastName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Surname suffix. For example, Sr. or Jr.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'Suffix'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'0 = Contact does not wish to receive e-mail promotions, 1 = Contact does wish to receive e-mail promotions from AdventureWorks, 2 = Contact does wish to receive e-mail promotions from AdventureWorks and selected partners. ' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'EmailPromotion'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of 0' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'CONSTRAINT',@level2name=N'DF_Person_EmailPromotion'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Additional contact information about the person stored in xml format. ' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'AdditionalContactInfo'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Personal information such as hobbies, and income collected from online shoppers. Used for sales analysis.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'Demographics'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'COLUMN',@level2name=N'rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'CONSTRAINT',@level2name=N'DF_Person_rowguid'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'CONSTRAINT',@level2name=N'PK_Person_BusinessEntityID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Human beings involved with AdventureWorks: employees, customer contacts, and vendor contacts.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing BusinessEntity.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'CONSTRAINT',@level2name=N'FK_Person_BusinessEntity_BusinessEntityID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Check constraint [PersonType] is one of SC, VC, IN, EM or SP.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Person', @level2type=N'CONSTRAINT',@level2name=N'CK_Person_PersonType'
GO

/****** Object:  Table [person].[BusinessEntityAddress]    Script Date: 3.12.2023 г. 15:25:19 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE person.[BusinessEntityAddress](
	[BusinessEntityId] [int] NOT NULL,
	[AddressId] [int] NOT NULL,
	[AddressTypeId] [int] NOT NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_BusinessEntityAddress_BusinessEntityId_AddressId_AddressTypeId] PRIMARY KEY CLUSTERED 
(
	[BusinessEntityId] ASC,
	[AddressId] ASC,
	[AddressTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--ALTER TABLE person.[BusinessEntityAddress] ADD  CONSTRAINT [DF_BusinessEntityAddress_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[BusinessEntityAddress] ADD  CONSTRAINT [DF_BusinessEntityAddress_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[BusinessEntityAddress] ADD  CONSTRAINT [DF_BusinessEntityAddress_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[BusinessEntityAddress] ADD  CONSTRAINT [DF_BusinessEntityAddress_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[BusinessEntityAddress] ADD  CONSTRAINT [DF_BusinessEntityAddress_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE person.[BusinessEntityAddress]  WITH CHECK ADD  CONSTRAINT [FK_BusinessEntityAddress_Address_AddressId] FOREIGN KEY([AddressId])
REFERENCES person.[Address] ([AddressId])
GO

ALTER TABLE person.[BusinessEntityAddress] CHECK CONSTRAINT [FK_BusinessEntityAddress_Address_AddressId]
GO

ALTER TABLE person.[BusinessEntityAddress]  WITH CHECK ADD  CONSTRAINT [FK_BusinessEntityAddress_AddressType_AddressTypeId] FOREIGN KEY([AddressTypeId])
REFERENCES person.[AddressType] ([AddressTypeId])
GO

ALTER TABLE person.[BusinessEntityAddress] CHECK CONSTRAINT [FK_BusinessEntityAddress_AddressType_AddressTypeId]
GO

ALTER TABLE person.[BusinessEntityAddress]  WITH CHECK ADD  CONSTRAINT [FK_BusinessEntityAddress_BusinessEntity_BusinessEntityId] FOREIGN KEY([BusinessEntityId])
REFERENCES person.[BusinessEntity] ([BusinessEntityId])
GO

ALTER TABLE person.[BusinessEntityAddress] CHECK CONSTRAINT [FK_BusinessEntityAddress_BusinessEntity_BusinessEntityId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key. Foreign key to BusinessEntity.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'COLUMN',@level2name=N'BusinessEntityId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key. Foreign key to Address.AddressID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'COLUMN',@level2name=N'AddressId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key. Foreign key to AddressType.AddressTypeID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'COLUMN',@level2name=N'AddressTypeId'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'COLUMN',@level2name=N'rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'CONSTRAINT',@level2name=N'DF_BusinessEntityAddress_rowguid'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'CONSTRAINT',@level2name=N'PK_BusinessEntityAddress_BusinessEntityID_AddressID_AddressTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Cross-reference table mapping customers, vendors, and employees to their addresses.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing Address.AddressID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'CONSTRAINT',@level2name=N'FK_BusinessEntityAddress_Address_AddressId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing AddressType.AddressTypeID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'CONSTRAINT',@level2name=N'FK_BusinessEntityAddress_AddressType_AddressTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing BusinessEntity.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityAddress', @level2type=N'CONSTRAINT',@level2name=N'FK_BusinessEntityAddress_BusinessEntity_BusinessEntityId'
GO

/****** Object:  Table [person].[ContactType]    Script Date: 3.12.2023 г. 17:21:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[ContactType](
	[ContactTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [dbo].[Name] NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_ContactType_ContactTypeId] PRIMARY KEY CLUSTERED 
(
	[ContactTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [person].[ContactType] ADD  CONSTRAINT [DF_ContactType_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[ContactType] ADD  CONSTRAINT [DF_ContactType_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[ContactType] ADD  CONSTRAINT [DF_ContactType_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[ContactType] ADD  CONSTRAINT [DF_ContactType_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for ContactType records.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'ContactType', @level2type=N'COLUMN',@level2name=N'ContactTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Contact type description.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'ContactType', @level2type=N'COLUMN',@level2name=N'Name'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'ContactType', @level2type=N'CONSTRAINT',@level2name=N'PK_ContactType_ContactTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Lookup table containing the types of business entity contacts.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'ContactType'
GO

INSERT [person].[ContactType] ([Name]) VALUES (N'Accounting Manager')
INSERT [person].[ContactType] ([Name]) VALUES (N'Assistant Sales Agent')
INSERT [person].[ContactType] ([Name]) VALUES (N'Assistant Sales Representative')
INSERT [person].[ContactType] ([Name]) VALUES (N'Coordinator Foreign Markets')
INSERT [person].[ContactType] ([Name]) VALUES (N'Export Administrator')
INSERT [person].[ContactType] ([Name]) VALUES (N'International Marketing Manager')
INSERT [person].[ContactType] ([Name]) VALUES (N'Marketing Assistant')
INSERT [person].[ContactType] ([Name]) VALUES (N'Marketing Manager')
INSERT [person].[ContactType] ([Name]) VALUES (N'Marketing Representative')
INSERT [person].[ContactType] ([Name]) VALUES (N'Order Administrator')
INSERT [person].[ContactType] ([Name]) VALUES (N'Owner')
INSERT [person].[ContactType] ([Name]) VALUES (N'Owner/Marketing Assistant')
INSERT [person].[ContactType] ([Name]) VALUES (N'Product Manager')
INSERT [person].[ContactType] ([Name]) VALUES (N'Purchasing Agent')
INSERT [person].[ContactType] ([Name]) VALUES (N'Regional Account Representative')
INSERT [person].[ContactType] ([Name]) VALUES (N'Sales Agent')
INSERT [person].[ContactType] ([Name]) VALUES (N'Sales Associate')
INSERT [person].[ContactType] ([Name]) VALUES (N'Sales Representative')


/****** Object:  Table [person].[BusinessEntityContact]    Script Date: 3.12.2023 г. 17:03:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[BusinessEntityContact](
	[BusinessEntityId] [int] NOT NULL,
	[PersonId] [int] NOT NULL,
	[ContactTypeId] [int] NOT NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_BusinessEntityContact_BusinessEntityId_PersonId_ContactTypeId] PRIMARY KEY CLUSTERED 
(
	[BusinessEntityId] ASC,
	[PersonId] ASC,
	[ContactTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--ALTER TABLE [person].[BusinessEntityContact] ADD  CONSTRAINT [DF_BusinessEntityContact_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[BusinessEntityContact] ADD  CONSTRAINT [DF_BusinessEntityContact_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[BusinessEntityContact] ADD  CONSTRAINT [DF_BusinessEntityContact_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[BusinessEntityContact] ADD  CONSTRAINT [DF_BusinessEntityContact_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[BusinessEntityContact] ADD  CONSTRAINT [DF_BusinessEntityContact_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [person].[BusinessEntityContact]  WITH CHECK ADD  CONSTRAINT [FK_BusinessEntityContact_BusinessEntity_BusinessEntityId] FOREIGN KEY([BusinessEntityId])
REFERENCES [person].[BusinessEntity] ([BusinessEntityId])
GO

ALTER TABLE [person].[BusinessEntityContact] CHECK CONSTRAINT [FK_BusinessEntityContact_BusinessEntity_BusinessEntityId]
GO

ALTER TABLE [person].[BusinessEntityContact]  WITH CHECK ADD  CONSTRAINT [FK_BusinessEntityContact_ContactType_ContactTypeId] FOREIGN KEY([ContactTypeId])
REFERENCES [person].[ContactType] ([ContactTypeId])
GO

ALTER TABLE [person].[BusinessEntityContact] CHECK CONSTRAINT [FK_BusinessEntityContact_ContactType_ContactTypeId]
GO

ALTER TABLE [person].[BusinessEntityContact]  WITH CHECK ADD  CONSTRAINT [FK_BusinessEntityContact_Person_PersonId] FOREIGN KEY([PersonId])
REFERENCES [person].[Person] ([BusinessEntityId])
GO

ALTER TABLE [person].[BusinessEntityContact] CHECK CONSTRAINT [FK_BusinessEntityContact_Person_PersonId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key. Foreign key to BusinessEntity.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'COLUMN',@level2name=N'BusinessEntityID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key. Foreign key to Person.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'COLUMN',@level2name=N'PersonID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key.  Foreign key to ContactType.ContactTypeID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'COLUMN',@level2name=N'ContactTypeID'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'COLUMN',@level2name=N'rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'CONSTRAINT',@level2name=N'DF_BusinessEntityContact_rowguid'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'CONSTRAINT',@level2name=N'PK_BusinessEntityContact_BusinessEntityID_PersonID_ContactTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Cross-reference table mapping stores, vendors, and employees to people' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing BusinessEntity.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'CONSTRAINT',@level2name=N'FK_BusinessEntityContact_BusinessEntity_BusinessEntityId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing ContactType.ContactTypeID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'CONSTRAINT',@level2name=N'FK_BusinessEntityContact_ContactType_ContactTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing Person.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'BusinessEntityContact', @level2type=N'CONSTRAINT',@level2name=N'FK_BusinessEntityContact_Person_PersonId'
GO

/****** Object:  Table [person].[EmailAddress]    Script Date: 3.12.2023 г. 17:40:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[EmailAddress](
	[BusinessEntityId] [int] NOT NULL,
	[EmailAddressID] [int] IDENTITY(1,1) NOT NULL,
	[EmailAddress] [nvarchar](50) NULL,
	--[rowguid] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_EmailAddress_BusinessEntityID_EmailAddressID] PRIMARY KEY CLUSTERED 
(
	[BusinessEntityId] ASC,
	[EmailAddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

--ALTER TABLE [Person].[EmailAddress] ADD  CONSTRAINT [DF_EmailAddress_rowguid]  DEFAULT (newid()) FOR [rowguid]
--GO

ALTER TABLE [person].[EmailAddress] ADD  CONSTRAINT [DF_EmailAddress_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[EmailAddress] ADD  CONSTRAINT [DF_EmailAddress_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[EmailAddress] ADD  CONSTRAINT [DF_EmailAddress_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[EmailAddress] ADD  CONSTRAINT [DF_EmailAddress_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [person].[EmailAddress]  WITH CHECK ADD  CONSTRAINT [FK_EmailAddress_Person_BusinessEntityId] FOREIGN KEY([BusinessEntityId])
REFERENCES [person].[Person] ([BusinessEntityId])
GO

ALTER TABLE [Person].[EmailAddress] CHECK CONSTRAINT [FK_EmailAddress_Person_BusinessEntityId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key. Person associated with this email address.  Foreign key to Person.BusinessEntityID' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress', @level2type=N'COLUMN',@level2name=N'BusinessEntityId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key. ID of this email address.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress', @level2type=N'COLUMN',@level2name=N'EmailAddressId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'E-mail address for the person.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress', @level2type=N'COLUMN',@level2name=N'EmailAddress'
GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress', @level2type=N'COLUMN',@level2name=N'rowguid'
--GO

--EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Default constraint value of NEWID()' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress', @level2type=N'CONSTRAINT',@level2name=N'DF_EmailAddress_rowguid'
--GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress', @level2type=N'CONSTRAINT',@level2name=N'PK_EmailAddress_BusinessEntityID_EmailAddressId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Where to send a person email.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing Person.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'EmailAddress', @level2type=N'CONSTRAINT',@level2name=N'FK_EmailAddress_Person_BusinessEntityId'
GO

/****** Object:  Table [Person].[PhoneNumberType]    Script Date: 3.12.2023 г. 17:49:04 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[PhoneNumberType](
	[PhoneNumberTypeId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [dbo].[Name] NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_PhoneNumberType_PhoneNumberTypeId] PRIMARY KEY CLUSTERED 
(
	[PhoneNumberTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [person].[PhoneNumberType] ADD  CONSTRAINT [DF_PhoneNumberType_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[PhoneNumberType] ADD  CONSTRAINT [DF_PhoneNumberType_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[PhoneNumberType] ADD  CONSTRAINT [DF_PhoneNumberType_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[PhoneNumberType] ADD  CONSTRAINT [DF_PhoneNumberType_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key for telephone number type records.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PhoneNumberType', @level2type=N'COLUMN',@level2name=N'PhoneNumberTypeID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Name of the telephone number type' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PhoneNumberType', @level2type=N'COLUMN',@level2name=N'Name'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PhoneNumberType', @level2type=N'CONSTRAINT',@level2name=N'PK_PhoneNumberType_PhoneNumberTypeID'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Type of phone number of a person.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PhoneNumberType'
GO

INSERT [person].[PhoneNumberType] ([Name]) VALUES (N'Cell')
INSERT [person].[PhoneNumberType] ([Name]) VALUES (N'Home')
INSERT [person].[PhoneNumberType] ([Name]) VALUES (N'Work')

/****** Object:  Table [person].[PersonPhone]    Script Date: 3.12.2023 г. 18:02:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[PersonPhone](
	[BusinessEntityId] [int] NOT NULL,
	[PhoneNumber] [dbo].[Phone] NOT NULL,
	[PhoneNumberTypeId] [int] NOT NULL,
    [InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_PersonPhone_BusinessEntityId_PhoneNumber_PhoneNumberTypeId] PRIMARY KEY CLUSTERED 
(
	[BusinessEntityId] ASC,
	[PhoneNumber] ASC,
	[PhoneNumberTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [person].[PersonPhone] ADD  CONSTRAINT [DF_PersonPhone_InsertDate]  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [person].[PersonPhone] ADD  CONSTRAINT [DF_PersonPhone_InsertUserId]  DEFAULT ((0)) FOR [InsertUserId]
GO

ALTER TABLE [person].[PersonPhone] ADD  CONSTRAINT [DF_PersonPhone_IsActive]  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [person].[PersonPhone] ADD  CONSTRAINT [DF_PersonPhone_TenantId]  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [person].[PersonPhone]  WITH CHECK ADD  CONSTRAINT [FK_PersonPhone_Person_BusinessEntityId] FOREIGN KEY([BusinessEntityId])
REFERENCES [person].[Person] ([BusinessEntityId])
GO

ALTER TABLE [person].[PersonPhone] CHECK CONSTRAINT [FK_PersonPhone_Person_BusinessEntityId]
GO

ALTER TABLE [person].[PersonPhone]  WITH CHECK ADD  CONSTRAINT [FK_PersonPhone_PhoneNumberType_PhoneNumberTypeId] FOREIGN KEY([PhoneNumberTypeId])
REFERENCES [person].[PhoneNumberType] ([PhoneNumberTypeId])
GO

ALTER TABLE [person].[PersonPhone] CHECK CONSTRAINT [FK_PersonPhone_PhoneNumberType_PhoneNumberTypeId]
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Business entity identification number. Foreign key to Person.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PersonPhone', @level2type=N'COLUMN',@level2name=N'BusinessEntityId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Telephone number identification number.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PersonPhone', @level2type=N'COLUMN',@level2name=N'PhoneNumber'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Kind of phone number. Foreign key to PhoneNumberType.PhoneNumberTypeID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PersonPhone', @level2type=N'COLUMN',@level2name=N'PhoneNumberTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PersonPhone', @level2type=N'CONSTRAINT',@level2name=N'PK_PersonPhone_BusinessEntityID_PhoneNumber_PhoneNumberTypeId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Telephone number and type of a person.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PersonPhone'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing Person.BusinessEntityID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PersonPhone', @level2type=N'CONSTRAINT',@level2name=N'FK_PersonPhone_Person_BusinessEntityId'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Foreign key constraint referencing PhoneNumberType.PhoneNumberTypeID.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'PersonPhone', @level2type=N'CONSTRAINT',@level2name=N'FK_PersonPhone_PhoneNumberType_PhoneNumberTypeId'
GO

--/****** Object:  View [person].[PersonView]    Script Date: 25/11/2023 11:46:04 ******/
--SET ANSI_NULLS ON
--GO
--SET QUOTED_IDENTIFIER ON
--GO
--CREATE VIEW [person].[PersonView] AS
--SELECT person.Person.PersonType,
--    person.Person.Title,
--    person.Person.FirstName,
--    person.Person.MiddleName,
--    person.Person.LastName,
--    person.Person.Suffix,
--    person.ContactType.Name,
--    person.PhoneNumberType.Name AS PhoneNumberType,
--    person.AddressType.Name AS AddressType,
--    person.Address.AddressLine1,
--    person.Address.AddressLine2,
--    person.Address.City,
--    person.Address.PostalCode,
--    person.StateProvince.StateProvinceCode,
--    person.Country.Name AS Country
--FROM person.PersonPhone INNER JOIN
--    person.PhoneNumberType ON person.PersonPhone.PhoneNumberTypeId = person.PhoneNumberType.PhoneNumberTypeId INNER JOIN
--    person.Person ON person.PersonPhone.BusinessEntityId = person.Person.BusinessEntityID INNER JOIN
--    person.BusinessEntity INNER JOIN
--    person.BusinessEntityAddress ON person.BusinessEntity.BusinessEntityId = person.BusinessEntityAddress.BusinessEntityId INNER JOIN
--    person.BusinessEntityContact ON person.BusinessEntity.BusinessEntityId = person.BusinessEntityContact.BusinessEntityId INNER JOIN
--    person.ContactType ON person.BusinessEntityContact.ContactTypeId = person.ContactType.ContactTypeId INNER JOIN
--    person.AddressType ON person.BusinessEntityAddress.AddressTypeId = person.AddressType.AddressTypeId INNER JOIN
--    person.Address ON person.BusinessEntityAddress.AddressId = person.Address.AddressId INNER JOIN
--    person.StateProvince ON person.Address.StateProvinceId = person.StateProvince.StateProvinceId INNER JOIN
--    person.Country ON person.StateProvince.CountryCode = person.Country.CountryCode INNER JOIN
--    person.EmailAddress ON person.BusinessEntity.BusinessEntityId = person.EmailAddress.BusinessEntityId ON person.Person.BusinessEntityID = person.BusinessEntity.BusinessEntityId AND person.Person.BusinessEntityID = person.BusinessEntityContact.PersonId AND person.Person.BusinessEntityID = person.EmailAddress.BusinessEntityId


--/****** Object:  View [person].[AddressView]    Script Date: 25/11/2023 11:46:04 ******/
--SET ANSI_NULLS ON
--GO
--SET QUOTED_IDENTIFIER ON
--GO
--CREATE VIEW [person].[AddrtessView] AS
--SELECT at.Name AS Name,
--    sp.StateProvinceCode AS StateProvinceCode,
--    sp.Name AS SPName,
--    a.AddressLine1 AS AddressLine1,
--    a.AddressLine2 AS AddressLine2,
--    a.City AS City,
--    a.PostalCode AS PostalCode,
--    c.Name AS CName
--FROM person.BusinessEntityAddress AS bea INNER JOIN
--     person.AddressType AS at ON bea.AddressTypeId = at.AddressTypeId INNER JOIN
--     person.BusinessEntity AS be ON bea.BusinessEntityId = be.BusinessEntityId INNER JOIN
--     person.StateProvince AS sp INNER JOIN
--     person.Address AS a ON sp.StateProvinceId = a.StateProvinceId ON bea.AddressId = a.AddressId INNER JOIN
--     person.Country AS c ON sp.CountryCode = c.CountryCode
/****** Object:  View [person].[PersonView]    Script Date: 25/11/2023 11:46:05 ******/
--SET ANSI_NULLS ON
--GO
--SET QUOTED_IDENTIFIER ON
--GO
--CREATE VIEW [person].PersonView AS
--SELECT p.PersonType,
--    p.Title,
--    p.FirstName,
--    p.MiddleName,
--    p.LastName,
--    p.Suffix
--FROM person.Person AS p INNER JOIN
--    person.BusinessEntity AS be ON p.BusinessEntityId = be.BusinessEntityId

