USE [Company_Sales_v1]
GO

/****** Object:  Table [sales].[CategoriesType]    Script Date: 7.2.2026 г. 11:09:15 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE SCHEMA [sales]
GO

CREATE TABLE [sales].[CategoriesType](
	[CategoryTypeID] [int] IDENTITY(1,1) NOT NULL,
	[Type] [smallint] NOT NULL,
	[CategoryType] [nvarchar](30) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_CategoryType] PRIMARY KEY CLUSTERED 
(
	[CategoryTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [sales].[CategoriesType] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [sales].[CategoriesType] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [sales].[CategoriesType] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [sales].[CategoriesType] ADD  DEFAULT ((1)) FOR [TenantId]
GO


