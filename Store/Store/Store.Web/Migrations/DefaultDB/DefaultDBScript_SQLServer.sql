USE [Store_Default_v1]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 05.01.2019 16:39:29 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](100) NOT NULL,
	[DisplayName] [nvarchar](100) NOT NULL,
	[Email] [nvarchar](100) NULL,
	[Source] [nvarchar](4) NOT NULL,
	[PasswordHash] [nvarchar](86) NOT NULL,
	[PasswordSalt] [nvarchar](10) NOT NULL,
	[LastDirectoryUpdate] [datetime] NULL,
	[UserImage] [nvarchar](100) NULL,
	[InsertDate] [datetime]  NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[InsertUserId] [int] NOT NULL DEFAULT (1),
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [smallint] NOT NULL DEFAULT (1),
	[TenantId] [int] NOT NULL DEFAULT(1),
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT INTO [dbo].[Users] ([Username], [DisplayName], [Email], [Source], [PasswordHash], [PasswordSalt]) VALUES (N'admin', N'admin', N'admin@dummy.com', N'site', N'rfqpSPYs0ekFlPyvIRTXsdhE/qrTHFF+kKsAUla7pFkXL4BgLGlTe89GDX5DBysenMDj8AqbIZPybqvusyCjwQ', N'hJf_F')
GO

/****** Object:  Table [dbo].[Languages]    Script Date: 05.01.2019 17:23:33 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Languages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LanguageId] [nvarchar](10) NOT NULL,
	[LanguageName] [nvarchar](50) NOT NULL,
	[TenantId] [int] NOT NULL DEFAULT(1),
 CONSTRAINT [PK_Languages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'en', N'English')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'bg', N'Bulgarian')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'ru', N'Russian')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'es', N'Spanish')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'tr', N'Turkish')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'de', N'German')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'zh-CN', N'Chinese (Simplified)')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'it', N'Italian')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'pt', N'Portuguese')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'pt-BR', N'Portuguese (Brazil)')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'fa', N'Farsi')
INSERT INTO [dbo].[Languages] ([LanguageId], [LanguageName]) VALUES (N'vi-VN', N'Vietnamese (Vietnam)')

/****** Object:  Table [dbo].[UserPermissions]    Script Date: 05.01.2019 17:39:31 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPermissions](
	[UserPermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
	[Granted] [bit] NOT NULL DEFAULT(1),
 CONSTRAINT [PK_UserPermissions] PRIMARY KEY CLUSTERED 
(
	[UserPermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
CREATE UNIQUE INDEX [UQ_UserPerm_UserId_PermKey] ON [UserPermissions] ([UserId] ASC, [PermissionKey] ASC)

ALTER TABLE [dbo].[UserPermissions]  WITH CHECK ADD  CONSTRAINT [FK_UserPermissions_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserPermissions] CHECK CONSTRAINT [FK_UserPermissions_UserId]
GO

/****** Object:  Table [dbo].[Roles]    Script Date: 05.01.2019 18:04:33 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Roles](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [nvarchar](100) NOT NULL,
	[TenantId] [int] NOT NULL DEFAULT(1),
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[RolePermissions]    Script Date: 05.01.2019 18:07:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RolePermissions](
	[RolePermissionId] [bigint] IDENTITY(1,1) NOT NULL,
	[RoleId] [int] NOT NULL,
	[PermissionKey] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_RolePermissions] PRIMARY KEY CLUSTERED 
(
	[RolePermissionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE UNIQUE INDEX [UQ_UserPerm_UserId_PermKey] ON [RolePermissions] ([RoleId] ASC, [PermissionKey] ASC)
GO

ALTER TABLE [dbo].[RolePermissions]  WITH CHECK ADD  CONSTRAINT [FK_RolePermissions_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO

ALTER TABLE [dbo].[RolePermissions] CHECK CONSTRAINT [FK_RolePermissions_RoleId]
GO

/****** Object:  Table [dbo].[UserRoles]    Script Date: 05.01.2019 18:15:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[UserRoleId] [bigint] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[UserRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([RoleId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_RoleId]
GO

ALTER TABLE [dbo].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([UserId])
GO
ALTER TABLE [dbo].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_UserId]
GO

CREATE UNIQUE INDEX [UQ_UserRoles_UserId_RoleId] ON [UserRoles] ([UserId] ASC, [RoleId] ASC)
GO

CREATE NONCLUSTERED INDEX [IX_UserRoles_RoleId_UserId] ON [UserRoles] ([RoleId] ASC, [UserId] ASC);   
GO

/****** Object:  Table [dbo].[UserPreferences]    Script Date: 05.01.2019 18:29:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserPreferences](
	[UserPreferenceId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [bigint] NOT NULL,
	[PreferenceType] [nvarchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserPreferences] PRIMARY KEY CLUSTERED 
(
	[UserPreferenceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE UNIQUE INDEX [IX_UserPref_UID_PrefType_Name] ON [UserPreferences] ([UserId] ASC, [PreferenceType] ASC, [Name] ASC)
GO

/****** Object:  Table [dbo].[Tenants]    Script Date: 05.01.2019 18:35:55 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Tenants](
	[TenantId] [int] IDENTITY(1,1) NOT NULL,
	[TenantName] [nvarchar](100) NOT NULL,
 CONSTRAINT [PK_Tenants] PRIMARY KEY CLUSTERED 
(
	[TenantId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT INTO [dbo].[Tenants] ([TenantName]) VALUES (N'Primary Tenant')
INSERT INTO [dbo].[Tenants] ([TenantName]) VALUES (N'Second Tenant')
INSERT INTO [dbo].[Tenants] ([TenantName]) VALUES (N'Third Tenant')

/****** Object:  Table [dbo].[Exceptions]    Script Date: 05.01.2019 16:37:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Exceptions](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[GUID] [uniqueidentifier] NOT NULL,
	[ApplicationName] [nvarchar](50) NOT NULL,
	[MachineName] [nvarchar](50) NOT NULL,
	[CreationDate] [datetime] NOT NULL,
	[Type] [nvarchar](100) NOT NULL,
	[IsProtected] [bit] NOT NULL DEFAULT(1),
	[Host] [nvarchar](100) NULL,
	[Url] [nvarchar](500) NULL,
	[HTTPMethod] [nvarchar](10) NULL,
	[IPAddress] [nvarchar](40) NULL,
	[Source] [nvarchar](100) NULL,
	[Message] [nvarchar](1000) NULL,
	[Detail] [nvarchar](max) NULL,
	[StatusCode] [int] NULL,
	[SQL] [nvarchar](max) NULL,
	[DeletionDate] [datetime] NULL,
	[FullJson] [nvarchar](max) NULL,
	[ErrorHash] [int] NULL,
	[DuplicateCount] [int] NOT NULL DEFAULT(1),
 CONSTRAINT [PK_Exceptions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE NONCLUSTERED INDEX [IX_Exceptions_GUID_App_Del_Cre] ON [Exceptions] ([GUID] ASC, [ApplicationName] ASC, [DeletionDate] ASC, [CreationDate] DESC);   
GO

CREATE NONCLUSTERED INDEX [IX_Exceptions_Hash_App_Cre_Del] ON [Exceptions] ([ErrorHash] ASC, [ApplicationName] ASC, [CreationDate] DESC, [DeletionDate] ASC);   
GO

CREATE NONCLUSTERED INDEX [IX_Exceptions_App_Del_Cre] ON [Exceptions] ([ApplicationName] ASC, [DeletionDate] ASC, [CreationDate] DESC);   
GO

/****** Object:  Table [dbo].[VersionInfo]    Script Date: 05.01.2019 18:49:30 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[VersionInfo](
	[Version] [bigint] NOT NULL,
	[AppliedOn] [datetime] NULL,
	[Description] [nvarchar](1024) NULL
) ON [PRIMARY]
GO









