USE Company_Company_v1
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'Country' and xtype= 'U')
BEGIN
	CREATE TABLE [person].[Country] (
		[CountryCode]  NVARCHAR (3) NOT NULL,
		[CountryName]  [dbo].[Name] NOT NULL,
		[InsertDate]   DATETIME     CONSTRAINT [DF_Country_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId] INT          CONSTRAINT [DF_Country_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]   DATETIME     NULL,
		[UpdateUserId] INT          NULL,
		[IsActive]     SMALLINT     CONSTRAINT [DF_Country_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]     INT          CONSTRAINT [DF_Country_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_Country_CountryCode] PRIMARY KEY CLUSTERED ([CountryCode] ASC)
	);
END;

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Lookup table containing the ISO standard codes for countries and regions.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Country';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'ISO standard code for countries and regions.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Country', 
	@level2type = N'COLUMN', 
	@level2name = N'CountryCode';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Country or region name.', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Country', 
	@level2type = N'COLUMN', 
	@level2name = N'CountryName';

GO
EXEC sp_addextendedproperty @name = N'MS_Description', 
	@value = N'Primary key (clustered) constraint', 
	@level0type = N'SCHEMA', 
	@level0name = N'person', 
	@level1type = N'TABLE', 
	@level1name = N'Country', 
	@level2type = N'CONSTRAINT', 
	@level2name = N'PK_Country_CountryCode';

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Country',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Country',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Country',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Country',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Country',
    @level2type = N'COLUMN',
    @level2name = N'IsActive';
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'person',
    @level1type = N'TABLE',
    @level1name = N'Country',
    @level2type = N'COLUMN',
    @level2name = N'TenantId';
	
GO
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AD', N'Andora')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AE', N'United Arab Emirates')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AF', N'Afghanistan')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AG', N'Antigua and Barbuda')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AI', N'Anguilla')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AL', N'Albania')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AM', N'Armenia')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AN', N'Netherlands Antilles')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AO', N'Angola')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AQ', N'Antarctica')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AR', N'Argentina')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AS', N'American Samoa')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AT', N'Austria')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AU', N'Australia')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AW', N'Aruba')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'AZ', N'Azerbaijan')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BA', N'Bosnia and Herzegovina')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BB', N'Barbados')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BD', N'Bangladesh')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BE', N'Belgium')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BF', N'Burkina Faso')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BG', N'Bulgaria')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BH', N'Bahrain')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BI', N'Burundi')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BJ', N'Benin')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BM', N'Bermuda')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BN', N'Brunei')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BO', N'Bolivia')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BR', N'Brazil')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BS', N'Bahamas, The')
INSERT [person].[Country] ([CountryCode],[CountryName]) VALUES (N'BT', N'Bhutan')