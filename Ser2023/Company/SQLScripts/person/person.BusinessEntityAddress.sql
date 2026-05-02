USE Company_Company_v1
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'Country' and xtype= 'U')
BEGIN
	CREATE TABLE [person].[BusinessEntityAddress] (
		[BusinessEntityId] INT      NOT NULL,
		[AddressId]        INT      NOT NULL,
		[AddressTypeId]    INT      NOT NULL,
		[InsertDate]       DATETIME CONSTRAINT [DF_BusinessEntityAddress_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId]     INT      CONSTRAINT [DF_BusinessEntityAddress_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]       DATETIME NULL,
		[UpdateUserId]     INT      NULL,
		[IsActive]         SMALLINT CONSTRAINT [DF_BusinessEntityAddress_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]         INT      CONSTRAINT [DF_BusinessEntityAddress_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_BusinessEntityAddress_BusinessEntityId_AddressId_AddressTypeId] PRIMARY KEY CLUSTERED ([BusinessEntityId] ASC, [AddressId] ASC, [AddressTypeId] ASC),
		CONSTRAINT [FK_BusinessEntityAddress_Address_AddressId] FOREIGN KEY ([AddressId]) REFERENCES [person].[Address] ([AddressId]),
		CONSTRAINT [FK_BusinessEntityAddress_AddressType_AddressTypeId] FOREIGN KEY ([AddressTypeId]) REFERENCES [person].[AddressType] ([AddressTypeId]),
		CONSTRAINT [FK_BusinessEntityAddress_BusinessEntity_BusinessEntityId] FOREIGN KEY ([BusinessEntityId]) REFERENCES [person].[BusinessEntity] ([BusinessEntityId])
	);
END;
GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Cross-reference table mapping customers, vendors, and employees to their addresses.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key. Foreign key to BusinessEntity.BusinessEntityID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress', 
	@level2type = N'COLUMN', 
	@level2name = N'BusinessEntityId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key. Foreign key to Address.AddressID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress', 
	@level2type = N'COLUMN', 
	@level2name = N'AddressId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key. Foreign key to AddressType.AddressTypeID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress', 
	@level2type = N'COLUMN', 
	@level2name = N'AddressTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_BusinessEntityAddress_BusinessEntityId_AddressId_AddressTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing Address.AddressID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_BusinessEntityAddress_Address_AddressId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing AddressType.AddressTypeID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_BusinessEntityAddress_AddressType_AddressTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing BusinessEntity.BusinessEntityID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityAddress', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_BusinessEntityAddress_BusinessEntity_BusinessEntityId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityAddress',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityAddress',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityAddress',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityAddress',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityAddress',
    @level2type = N'COLUMN',
    @level2name = N'IsActive'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityAddress',
    @level2type = N'COLUMN',
    @level2name = N'TenantId'

