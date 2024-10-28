USE Company_Company_v1
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'BusinessEntity' and xtype= 'U')
BEGIN
	CREATE TABLE [person].[BusinessEntity] (
		[BusinessEntityId] INT      IDENTITY (1, 1) NOT FOR REPLICATION NOT NULL,
		[InsertDate]       DATETIME CONSTRAINT [DF_BusinessEntity_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId]     INT      CONSTRAINT [DF_BusinessEntity_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]       DATETIME NULL,
		[UpdateUserId]     INT      NULL,
		[IsActive]         SMALLINT CONSTRAINT [DF_BusinessEntity_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]         INT      CONSTRAINT [DF_BusinessEntity_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_BusinessEntity_BusinessEntityId] PRIMARY KEY CLUSTERED ([BusinessEntityId] ASC)
	);
END;
GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Source of the ID that connects vendors, customers, and employees with address and contact information.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntity';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key for all customers, vendors, and employees.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntity', 
	@level2type = N'COLUMN', 
	@level2name = N'BusinessEntityId';

GO
EXECUTE sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntity', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_BusinessEntity_BusinessEntityId';
	GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntity',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntity',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntity',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntity',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntity',
    @level2type = N'COLUMN',
    @level2name = N'IsActive';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntity',
    @level2type = N'COLUMN',
    @level2name = N'TenantId';

