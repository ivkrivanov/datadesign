USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[ItemCategoriesLang]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ItemCategoriesLang](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ItemCategoryID] [int] NOT NULL,
	[LanguageID] [int] NOT NULL,
	[ItemCategoryName] [nvarchar](40) NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_ItemCategoriesLang] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
