CREATE TABLE [person].[ContactType] (
    [ContactTypeId] INT          IDENTITY (1, 1) NOT NULL,
    [Name]          [dbo].[Name] NOT NULL,
    [InsertDate]    DATETIME     CONSTRAINT [DF_ContactType_InsertDate] DEFAULT (getdate()) NOT NULL,
    [InsertUserId]  INT          CONSTRAINT [DF_ContactType_InsertUserId] DEFAULT ((0)) NOT NULL,
    [UpdateDate]    DATETIME     NULL,
    [UpdateUserId]  INT          NULL,
    [IsActive]      SMALLINT     CONSTRAINT [DF_ContactType_IsActive] DEFAULT ((1)) NOT NULL,
    [TenantId]      INT          CONSTRAINT [DF_ContactType_TenantId] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [PK_ContactType_ContactTypeId] PRIMARY KEY CLUSTERED ([ContactTypeId] ASC)
);

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Lookup table containing the types of business entity contacts.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'ContactType';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key for ContactType records.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'ContactType', 
	@level2type = N'COLUMN', 
	@level2name = N'ContactTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Contact type description.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'ContactType', 
	@level2type = N'COLUMN', 
	@level2name = N'Name';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'ContactType', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_ContactType_ContactTypeId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'ContactType',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'ContactType',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'ContactType',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'ContactType',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'ContactType',
    @level2type = N'COLUMN',
    @level2name = N'IsActive';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'ContactType',
    @level2type = N'COLUMN',
    @level2name = N'TenantId';
