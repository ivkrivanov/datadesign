USE [Company_Company_v1]
GO

EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country'
GO

EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'CONSTRAINT',@level2name=N'PK_Country_CountryCode'
GO

EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'COLUMN',@level2name=N'CountryName'
GO

EXEC sys.sp_dropextendedproperty @name=N'MS_Description' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'COLUMN',@level2name=N'CountryCode'
GO

ALTER TABLE [person].[Country] DROP CONSTRAINT [DF_Country_TenantId]
GO

ALTER TABLE [person].[Country] DROP CONSTRAINT [DF_Country_IsActive]
GO

ALTER TABLE [person].[Country] DROP CONSTRAINT [DF_Country_InsertUserId]
GO

ALTER TABLE [person].[Country] DROP CONSTRAINT [DF_Country_InsertDate]
GO

/****** Object:  Table [person].[Country]    Script Date: 21.3.2025 г. 9:42:57 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[person].[Country]') AND type in (N'U'))
DROP TABLE [person].[Country]
GO

/****** Object:  Table [person].[Country]    Script Date: 21.3.2025 г. 9:42:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [person].[Country](
	[CountryId] [int] NOT NULL,
	[CountryCode] [nvarchar](3) NOT NULL,
	[CountryName] [dbo].[Name] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Country_CountryId] PRIMARY KEY CLUSTERED 
(
	[CountryId] ASC
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

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Country or region name.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'COLUMN',@level2name=N'CountryName'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Primary key (clustered) constraint' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country', @level2type=N'CONSTRAINT',@level2name=N'PK_Country_CountryCode'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_Description', @value=N'Lookup table containing the ISO standard codes for countries and regions.' , @level0type=N'SCHEMA',@level0name=N'person', @level1type=N'TABLE',@level1name=N'Country'
GO


