USE Company_Company_v1
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = '[StateProvince]' and xtype= 'U')
BEGIN
	CREATE TABLE [person].[StateProvince] (
		[StateProvinceId]   INT          IDENTITY (1, 1) NOT NULL,
		[StateProvinceCode] NCHAR (3)    NOT NULL,
		[CountryCode]       NVARCHAR (3) NOT NULL,
		[StateProvinceName] [dbo].[Name] NOT NULL,
		[InsertDate]        DATETIME     CONSTRAINT [DF_StateProvince_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId]      INT          CONSTRAINT [DF_StateProvince_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]        DATETIME     NULL,
		[UpdateUserId]      INT          NULL,
		[IsActive]          SMALLINT     CONSTRAINT [DF_StateProvince_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]          INT          CONSTRAINT [DF_StateProvince_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_StateProvince_StateProvinceId] PRIMARY KEY CLUSTERED ([StateProvinceId] ASC),
		CONSTRAINT [FK_StateProvince_Country_CountryCode] FOREIGN KEY ([CountryCode]) REFERENCES [person].[Country] ([CountryCode])
	);
END;

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'State and province lookup table.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'StateProvince';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key for StateProvince records.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'StateProvince', 
	@level2type = N'COLUMN', 
	@level2name = N'StateProvinceId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'ISO standard state or province code.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'StateProvince', 
	@level2type = N'COLUMN', 
	@level2name = N'StateProvinceCode';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'ISO standard country or region code. Foreign key to Country.CountryCode. ', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'StateProvince', 
	@level2type = N'COLUMN', 
	@level2name = N'CountryCode';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'State or province description.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'StateProvince', 
	@level2type = N'COLUMN', 
	@level2name = N'StateProvinceName';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'StateProvince', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_StateProvince_StateProvinceId';


GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing Country.CountryCode.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'StateProvince', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_StateProvince_Country_CountryCode';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'StateProvince',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'StateProvince',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'StateProvince',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'StateProvince',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'StateProvince',
    @level2type = N'COLUMN',
    @level2name = N'IsActive';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'StateProvince',
    @level2type = N'COLUMN',
    @level2name = N'TenantId';

