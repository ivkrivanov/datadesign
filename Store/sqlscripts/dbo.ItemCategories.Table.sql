USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[ItemCategories]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ItemCategories](
	[ItemCategoryID] [int] IDENTITY(1,1) NOT NULL,
	[ItemCategoryCode] [varchar](8) NOT NULL,
	[ItemCategoryName] [nvarchar](20) NOT NULL,
	[ItemCategoryDescription] [ntext] NULL,
	[ItemCategoryImage] [nvarchar](255) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_ItemCategories] PRIMARY KEY CLUSTERED 
(
	[ItemCategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ItemCategories] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[ItemCategories] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[ItemCategories] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ItemCategories] ADD  DEFAULT ((1)) FOR [TenantId]
GO
