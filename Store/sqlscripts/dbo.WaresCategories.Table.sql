USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[WaresCategories]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WaresCategories](
	[WaresCategoryID] [int] IDENTITY(1,1) NOT NULL,
	[WaresCategoryCode] [varchar](8) NOT NULL,
	[WaresCategoryName] [nvarchar](20) NOT NULL,
	[WaresCategoryDescription] [ntext] NULL,
	[WaresCategoryImage] [nvarchar](255) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_WaresCategories] PRIMARY KEY CLUSTERED 
(
	[WaresCategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
