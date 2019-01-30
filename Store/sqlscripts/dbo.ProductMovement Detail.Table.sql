SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductMovement Details](
	[ProductMoveID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
	[Quantity] [real] NOT NULL,
	--[IncomePrice] [money] NOT NULL,
	[SalePrice] [money] NOT NULL,
	--[SinglePrice] [money] NOT NULL,
	[Discount] [real] NOT NULL,
	[DetailID] [int] IDENTITY(1,1) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
CONSTRAINT [PK_ProductMovement Detail] PRIMARY KEY CLUSTERED 
(
	[ProductMoveID] ASC,
	[ProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [dbo].[ProductMovement Details] ADD  CONSTRAINT [DF_ProductMovement Detail_SalePrice]  DEFAULT ((0)) FOR [SalePrice]
GO

ALTER TABLE [dbo].[ProductMovement Details] ADD  CONSTRAINT [DF_ProductMovement Detail_Quantity]  DEFAULT ((1)) FOR [Quantity]
GO

ALTER TABLE [dbo].[ProductMovement Details] ADD  CONSTRAINT [DF_ProductMovement Detail_Discount]  DEFAULT ((0)) FOR [Discount]
GO

ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Details_ProductMovement] FOREIGN KEY([ProductMoveID])
REFERENCES [dbo].[ProductMovement] ([ProductMoveID])
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [FK_ProductMovement_Details_ProductMovement]
GO

ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Details_Product] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Products] ([ProductID])
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [FK_ProductMovement_Details_Product]
GO

ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_Discount] CHECK  (([Discount]>=(0) AND [Discount]<=(1)))
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [CK_Discount]
GO

ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_Quantity] CHECK  (([Quantity]>(0)))
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [CK_Quantity]
GO

ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_SalePrice] CHECK  (([SalePrice]>=(0)))
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [CK_SalePrice]
GO

