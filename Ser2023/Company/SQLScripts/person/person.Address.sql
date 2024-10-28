USE Company_Company_v1
GO

CREATE SCHEMA [person]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'Address' and xtype= 'U')
BEGIN
	CREATE TABLE [person].[Address] (
		[AddressId]       INT           IDENTITY (1, 1) NOT FOR REPLICATION NOT NULL,
		[AddressLine1]    NVARCHAR (60) NOT NULL,
		[AddressLine2]    NVARCHAR (60) NULL,
		[City]            NVARCHAR (30) NOT NULL,
		[CountryCode]     NVARCHAR (3)  NOT NULL,
		[StateProvinceId] INT           NOT NULL,
		[PostalCode]      NVARCHAR (15) NOT NULL,
		[InsertDate]      DATETIME      CONSTRAINT [DF_Address_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId]    INT           CONSTRAINT [DF_Addressv_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]      DATETIME      NULL,
		[UpdateUserId]    INT           NULL,
		[IsActive]        SMALLINT      CONSTRAINT [DF_Address_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]        INT           CONSTRAINT [DF_Addressv_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_Address_AddressId] PRIMARY KEY CLUSTERED ([AddressId] ASC),
		CONSTRAINT [FK_Address_Country_CountryCode] FOREIGN KEY ([CountryCode]) REFERENCES [person].[Country] ([CountryCode]),
		CONSTRAINT [FK_Address_StateProvince_StateProvinceId] FOREIGN KEY ([StateProvinceId]) REFERENCES [person].[StateProvince] ([StateProvinceId])
	);
END;
GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Street address information for customers, employees, and vendors.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key for Address records.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'COLUMN', 
	@level2name = N'AddressId';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'First street address line.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'COLUMN', 
	@level2name = N'AddressLine1';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Second street address line.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'COLUMN', 
	@level2name = N'AddressLine2';


GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Name of the city.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'COLUMN', 
	@level2name = N'City';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Unique identification number for the state or province. Foreign key to StateProvince table.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'COLUMN', 
	@level2name = N'StateProvinceId';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Postal code for the street address.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'COLUMN', 
	@level2name = N'PostalCode';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_Address_AddressId';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing StateProvince.StateProvinceID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Address', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_Address_StateProvince_StateProvinceId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Address',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Address',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Address',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Address',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Address',
    @level2type = N'COLUMN',
    @level2name = N'IsActive'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Address',
    @level2type = N'COLUMN',
    @level2name = N'TenantId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Unique identification number for the country code. Foreign key to country code table.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Address',
    @level2type = N'COLUMN',
    @level2name = N'CountryCode'