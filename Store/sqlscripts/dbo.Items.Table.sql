USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[Items]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Items](
	[ItemID] [int] IDENTITY(1,1) NOT NULL,
	[ItemCode] [nvarchar](15) NOT NULL,
	[ItemBarcode] [nvarchar](15) NULL,
	[ItemLabel] [nvarchar](20) NULL,
	[ItemName] [nvarchar](60) NULL,
	[ItemImage] [nvarchar](255) NULL,
	[SupplierID] [int] NULL,
	[ItemCategoryID] [int] NULL,
	[MeasureID] [int] NOT NULL,
	[QuantityPerUnit] [int] NULL,
	[UnitPrice] [money] NULL,
	[Discontinued] [bit] NOT NULL,
	[AccountID] [int] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Items] PRIMARY KEY CLUSTERED 
(
	[ItemID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Items] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[Items] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[Items] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Items] ADD  DEFAULT ((1)) FOR [TenantId]
GO
ALTER TABLE [dbo].[Items]  WITH NOCHECK ADD  CONSTRAINT [FK_Items_ItemCategories] FOREIGN KEY([ItemCategoryID])
REFERENCES [dbo].[ItemCategories] ([ItemCategoryID])
GO
ALTER TABLE [dbo].[Items] CHECK CONSTRAINT [FK_Items_ItemCategories]
GO
ALTER TABLE [dbo].[Items]  WITH NOCHECK ADD  CONSTRAINT [FK_Items_Measures] FOREIGN KEY([MeasureID])
REFERENCES [dbo].[Measures] ([MeasureID])
GO
ALTER TABLE [dbo].[Items] CHECK CONSTRAINT [FK_Items_Measures]
GO
ALTER TABLE [dbo].[Items]  WITH NOCHECK ADD  CONSTRAINT [FK_Items_Suppliers] FOREIGN KEY([SupplierID])
REFERENCES [dbo].[Suppliers] ([SupplierID])
GO
ALTER TABLE [dbo].[Items] CHECK CONSTRAINT [FK_Items_Suppliers]
GO
