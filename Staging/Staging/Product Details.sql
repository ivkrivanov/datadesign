/****** Object:  Table [dbo].[Product Details]    Script Date: 17.1.2019 г. 10:56:01 ******/
CREATE TABLE [dbo].[Product Details](
	[ProductID] [int] NOT NULL,
	[WaresID] [int] NOT NULL,
	[PlanPrice] [money] NOT NULL,
	[Quantity] [real] NOT NULL,
	[ProductQuantity] [float] NOT NULL,
	[Discount] [real] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
	[DetailID] [int] IDENTITY(1,1) NOT NULL,
CONSTRAINT [PK_Product_Details] PRIMARY KEY CLUSTERED 
(
	[ProductID] ASC,
	[WaresID] ASC

)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Product Details] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[Product Details] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[Product Details] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Product Details] ADD  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [dbo].[Product Details] ADD  CONSTRAINT [DF_Product_Details_PlanPrice]  DEFAULT ((0)) FOR [PlanPrice]
GO
ALTER TABLE [dbo].[Product Details] ADD  CONSTRAINT [DF_Product_Details_Quantity]  DEFAULT ((1)) FOR [Quantity]
GO
ALTER TABLE [dbo].[Product Details] ADD  CONSTRAINT [DF_Product_Details_Discount]  DEFAULT ((0)) FOR [Discount]
GO

ALTER TABLE [dbo].[Product Details]  WITH NOCHECK ADD  CONSTRAINT [FK_Product Details_Products] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Products] ([ProductID])
GO
ALTER TABLE [dbo].[Product Details] CHECK CONSTRAINT [FK_Product Details_Products]
GO

ALTER TABLE [dbo].[Product Details]  WITH NOCHECK ADD  CONSTRAINT [FK_Product_Details_Wares] FOREIGN KEY([WaresID])
REFERENCES [dbo].[Wares] ([WaresID])
GO
ALTER TABLE [dbo].[Product Details] CHECK CONSTRAINT [FK_Product_Details_Wares]
GO

ALTER TABLE [dbo].[Order Details]  WITH NOCHECK ADD  CONSTRAINT [CK_Discount] CHECK  (([Discount]>=(0) AND [Discount]<=(1)))
GO

ALTER TABLE [dbo].[Order Details] CHECK CONSTRAINT [CK_Discount]
GO
ALTER TABLE [dbo].[Order Details]  WITH NOCHECK ADD  CONSTRAINT [CK_Quantity] CHECK  (([Quantity]>(0)))
GO

ALTER TABLE [dbo].[Order Details] CHECK CONSTRAINT [CK_Quantity]
GO

ALTER TABLE [dbo].[Order Details]  WITH NOCHECK ADD  CONSTRAINT [CK_PlanPrice] CHECK  (([PlanPrice]>=(0)))
GO

ALTER TABLE [dbo].[Order Details] CHECK CONSTRAINT [CK_PlanPrice]
GO