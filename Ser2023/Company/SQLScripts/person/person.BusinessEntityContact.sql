CREATE TABLE [person].[BusinessEntityContact] (
    [BusinessEntityId] INT      NOT NULL,
    [PersonId]         INT      NOT NULL,
    [ContactTypeId]    INT      NOT NULL,
    [InsertDate]       DATETIME CONSTRAINT [DF_BusinessEntityContact_InsertDate] DEFAULT (getdate()) NOT NULL,
    [InsertUserId]     INT      CONSTRAINT [DF_BusinessEntityContact_InsertUserId] DEFAULT ((0)) NOT NULL,
    [UpdateDate]       DATETIME NULL,
    [UpdateUserId]     INT      NULL,
    [IsActive]         SMALLINT CONSTRAINT [DF_BusinessEntityContact_IsActive] DEFAULT ((1)) NOT NULL,
    [TenantId]         INT      CONSTRAINT [DF_BusinessEntityContact_TenantId] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_BusinessEntityContact_BusinessEntityId_PersonId_ContactTypeId] PRIMARY KEY CLUSTERED ([BusinessEntityId] ASC, [PersonId] ASC, [ContactTypeId] ASC),
    CONSTRAINT [FK_BusinessEntityContact_BusinessEntity_BusinessEntityId] FOREIGN KEY ([BusinessEntityId]) REFERENCES [person].[BusinessEntity] ([BusinessEntityId]),
    CONSTRAINT [FK_BusinessEntityContact_ContactType_ContactTypeId] FOREIGN KEY ([ContactTypeId]) REFERENCES [person].[ContactType] ([ContactTypeId]),
    CONSTRAINT [FK_BusinessEntityContact_Person_PersonId] FOREIGN KEY ([PersonId]) REFERENCES [person].[Person] ([BusinessEntityID])
);

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Cross-reference table mapping stores, vendors, and employees to people', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key. Foreign key to BusinessEntity.BusinessEntityID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact', 
	@level2type = N'COLUMN', 
	@level2name = N'BusinessEntityId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key. Foreign key to Person.BusinessEntityID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact', 
	@level2type = N'COLUMN', 
	@level2name = N'PersonId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key.  Foreign key to ContactType.ContactTypeID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact', 
	@level2type = N'COLUMN', 
	@level2name = N'ContactTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_BusinessEntityContact_BusinessEntityId_PersonId_ContactTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing BusinessEntity.BusinessEntityID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_BusinessEntityContact_BusinessEntity_BusinessEntityId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing ContactType.ContactTypeID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_BusinessEntityContact_ContactType_ContactTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing Person.BusinessEntityID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'BusinessEntityContact', 
	@level2type = N'CONSTRAINT',
	@level2name = N'FK_BusinessEntityContact_Person_PersonId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityContact',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityContact',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityContact',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityContact',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityContact',
    @level2type = N'COLUMN',
    @level2name = N'IsActive';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'BusinessEntityContact',
    @level2type = N'COLUMN',
    @level2name = N'TenantId';