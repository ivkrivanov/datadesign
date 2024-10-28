USE Company_Company_v1
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'Person' and xtype= 'U')
BEGIN
	CREATE TABLE [person].[Person] (
		[BusinessEntityID] INT           NOT NULL,
		[PersonType]       NCHAR (2)     NOT NULL,
		[Title]            NVARCHAR (8)  NULL,
		[FirstName]        [dbo].[Name]  NOT NULL,
		[MiddleName]       [dbo].[Name]  NOT NULL,
		[LastName]         [dbo].[Name]  NOT NULL,
		[Suffix]           NVARCHAR (10) NULL,
		[InsertDate]       DATETIME      CONSTRAINT [DF_Person_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId]     INT           CONSTRAINT [DF_Person_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]       DATETIME      NULL,
		[UpdateUserId]     INT           NULL,
		[IsActive]         SMALLINT      CONSTRAINT [DF_Person_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]         INT           CONSTRAINT [DF_Person_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_Person_BusinessEntityID] PRIMARY KEY CLUSTERED ([BusinessEntityID] ASC),
		CONSTRAINT [FK_Person_BusinessEntity_BusinessEntityId] FOREIGN KEY ([BusinessEntityID]) REFERENCES [person].[BusinessEntity] ([BusinessEntityId]),
		CONSTRAINT [CK_Person_PersonType] CHECK ([PersonType] IS NULL OR (upper([PersonType])='GC' OR upper([PersonType])='SP' OR upper([PersonType])='EM' OR upper([PersonType])='IN' OR upper([PersonType])='VC' OR upper([PersonType])='SC'))
	);
END;

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Human beings involved with AdventureWorks: employees, customer contacts, and vendor contacts.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key for Person records.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'COLUMN', 
	@level2name = N'BusinessEntityID';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary type of person: SC = Store Contact, IN = Individual (retail) customer, SP = Sales person, EM = Employee (non-sales), VC = Vendor contact, GC = General contact', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'COLUMN', 
	@level2name = N'PersonType';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'A courtesy title. For example, Mr. or Ms.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'COLUMN', 
	@level2name = N'Title';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'First name of the person.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'COLUMN', 
	@level2name = N'FirstName';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Middle name or middle initial of the person.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'COLUMN', 
	@level2name = N'MiddleName';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Last name of the person.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'COLUMN', 
	@level2name = N'LastName';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Surname suffix. For example, Sr. or Jr.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'COLUMN', 
	@level2name = N'Suffix';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_Person_BusinessEntityID';


GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Foreign key constraint referencing BusinessEntity.BusinessEntityID.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'FK_Person_BusinessEntity_BusinessEntityId';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Check constraint [PersonType] is one of SC, VC, IN, EM or SP.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Person', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'CK_Person_PersonType';

	GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Person',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Person',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Person',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Person',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Person',
    @level2type = N'COLUMN',
    @level2name = N'IsActive'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Person',
    @level2type = N'COLUMN',
    @level2name = N'TenantId'