USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[WaresLang]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WaresLang](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[WaresID] [int] NOT NULL,
	[LanguageID] [int] NOT NULL,
	[WaresName] [nvarchar](60) NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_WaresLang] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
