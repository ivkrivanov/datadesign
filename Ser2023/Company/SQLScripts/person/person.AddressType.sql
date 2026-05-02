USE Company_Company_v1
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'AddressType' and xtype= 'U')
BEGIN
	CREATE TABLE [person].[AddressType] (
		[AddressTypeId]   INT          IDENTITY (1, 1) NOT NULL,
		[AddressTypeName] [dbo].[Name] NOT NULL,
		[InsertDate]      DATETIME     CONSTRAINT [DF_AddressType_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId]    INT          CONSTRAINT [DF_AddressType_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]      DATETIME     NULL,
		[UpdateUserId]    INT          NULL,
		[IsActive]        SMALLINT     CONSTRAINT [DF_AddressType_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]        INT          CONSTRAINT [DF_AddressType_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_AddressType_AddressTypeId] PRIMARY KEY CLUSTERED ([AddressTypeId] ASC)
	);
END;

GO
	EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Types of addresses stored in the Address table. ', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'AddressType';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key for AddressType records.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'AddressType', 
	@level2type = N'COLUMN', 
	@level2name = N'AddressTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Address type description. For example, Billing, Home, or Shipping.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'AddressType', 
	@level2type = N'COLUMN', 
	@level2name = N'AddressTypeName';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'AddressType', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_AddressType_AddressTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'AddressType',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'AddressType',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'AddressType',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'AddressType',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'AddressType',
    @level2type = N'COLUMN',
    @level2name = N'IsActive';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'AddressType',
    @level2type = N'COLUMN',
    @level2name = N'TenantId';

GO
--SET IDENTITY_INSERT [person].[AddressType] ON
INSERT INTO person.AddressType (NAME) VALUES (N'Billing', N'Home', N'Main Office', N'Primary', N'Shipping', N'Archive');
--SET IDENTITY_INSERT [person].[AddressType] OFF