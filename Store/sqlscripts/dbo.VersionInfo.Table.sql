USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[VersionInfo]    Script Date: 13.01.2019 20:31:16 ******/
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
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20181213140000, CAST(N'2019-01-07T13:27:24.000' AS DateTime), N'StoreDB_20181213_140000_CustomerDetails')
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20181213150000, CAST(N'2019-01-07T13:27:24.000' AS DateTime), N'StoreDB_20181213_150000_Notes')
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20181213160000, CAST(N'2019-01-07T13:27:24.000' AS DateTime), N'StoreDB_20181213_160000_ProductLog')
INSERT [dbo].[VersionInfo] ([Version], [AppliedOn], [Description]) VALUES (20181214100000, CAST(N'2019-01-07T13:27:24.000' AS DateTime), N'StoreDB_20181214_100000_CustomerGrossSales')
