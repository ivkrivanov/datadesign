USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[ItemLang]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ItemLang](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ItemID] [int] NOT NULL,
	[LanguageID] [int] NOT NULL,
	[ItemName] [nvarchar](60) NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_ItemLang] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
