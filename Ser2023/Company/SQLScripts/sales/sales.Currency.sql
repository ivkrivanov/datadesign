USE master
GO
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'Company_Company_v1')
BEGIN
  CREATE DATABASE Company_Company_v1;
END;
GO

USE Company_Company_v1
GO

/****** Object:  UserDefinedDataType [dbo].[Name]    Script Date: 3.12.2023 г. 18:17:26 ******/
CREATE TYPE [dbo].[Name] FROM [nvarchar](50) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[NameStyle]    Script Date: 3.12.2023 г. 18:18:28 ******/
CREATE TYPE [dbo].[NameStyle] FROM [bit] NOT NULL
GO
/****** Object:  UserDefinedDataType [dbo].[Phone]    Script Date: 3.12.2023 г. 18:18:50 ******/
CREATE TYPE [dbo].[Phone] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[OrderNumber]    Script Date: 3.12.2023 г. 18:19:20 ******/
CREATE TYPE [dbo].[OrderNumber] FROM [nvarchar](25) NULL
GO
/****** Object:  UserDefinedDataType [dbo].[AccountNumber]    Script Date: 3.12.2023 г. 18:19:42 ******/
CREATE TYPE [dbo].[AccountNumber] FROM [nvarchar](15) NULL
GO

/****** Object:  Table [person].[Country]    Script Date: 3.12.2023 г. 12:17:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE SCHEMA [sales]
GO

IF NOT EXISTS (SELECT * FROM sysobjects WHERE name = 'Currency' and xtype= 'U')
BEGIN
	CREATE TABLE [sales].[Currency] (
		[CurrencyCode] NCHAR (3)    NOT NULL,
		[Name]         [dbo].[Name] NOT NULL,
		[InsertDate]   DATETIME     CONSTRAINT [DF_Currency_InsertDate] DEFAULT (getdate()) NOT NULL,
		[InsertUserId] INT          CONSTRAINT [DF_Currency_InsertUserId] DEFAULT ((0)) NOT NULL,
		[UpdateDate]   DATETIME     NULL,
		[UpdateUserId] INT          NULL,
		[IsActive]     SMALLINT     CONSTRAINT [DF_Currency_IsActive] DEFAULT ((1)) NOT NULL,
		[TenantId]     INT          CONSTRAINT [DF_Currency_TenantId] DEFAULT ((1)) NOT NULL,
		CONSTRAINT [PK_Currency_CurrencyCode] PRIMARY KEY CLUSTERED ([CurrencyCode] ASC)
	);
END

GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'The ISO code for the Currency.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'CurrencyCode'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Currency name.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'Name'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was first updated.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'InsertDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was first updated',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'InsertUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'User the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'UpdateUserId'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Date and time the record was last updated.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'UpdateDate'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Active status.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'IsActive'
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'Tennant owner.',
    @level0type = N'SCHEMA',
    @level0name = N'sales',
    @level1type = N'TABLE',
    @level1name = N'Currency',
    @level2type = N'COLUMN',
    @level2name = N'TenantId'