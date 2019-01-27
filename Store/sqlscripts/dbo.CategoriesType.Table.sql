USE [Store_Store_v1]
GO

/****** Object:  Table [dbo].[CategoriesType]    Script Date: 14.1.2019 г. 13:11:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CategoriesType](
	[CategoryTypeID] [int] IDENTITY(1,1) NOT NULL,
	[Type] [smallint] NOT NULL,
	[CategoryType] [nvarchar](30) NOT NULL,
	[InsertDate] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[InsertUserId] [int] NOT NULL DEFAULT (1),
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL DEFAULT (1),
	[TenantId] [int]  NOT NULL DEFAULT(1),
 CONSTRAINT [PK_CategoryType] PRIMARY KEY CLUSTERED 
(
	[CategoryTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE NONCLUSTERED INDEX [CategoryType] ON [dbo].[CategoriesType] 
(
	[CategoryType] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON)
GO

