USE [Company_Sales_v1]
GO

/****** Object:  Table [sales].[Categories]    Script Date: 7.2.2026 г. 11:58:24 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [sales].[Categories](
	[CategoryID] [int] IDENTITY(1,1) NOT NULL,
	[CategoryTypeID] [int] NOT NULL,
	[CategoryCode] [nvarchar](20) NULL,
	[CategoryName] [nvarchar](20) NOT NULL,
	[Description] [ntext] NULL,
	[Picture] [image] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[CategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [sales].[Categories] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [sales].[Categories] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [sales].[Categories] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [sales].[Categories] ADD  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [sales].[Categories]  WITH NOCHECK ADD  CONSTRAINT [FK_Categories_CategoryTypes] FOREIGN KEY([CategoryTypeID])
REFERENCES [sales].[CategoriesType] ([CategoryTypeID])
GO

ALTER TABLE [sales].[Categories] CHECK CONSTRAINT [FK_Categories_CategoryTypes]
GO


