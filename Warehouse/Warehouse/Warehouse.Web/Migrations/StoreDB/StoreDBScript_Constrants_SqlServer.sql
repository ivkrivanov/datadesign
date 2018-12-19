SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER TABLE [dbo].[Product Details]
	ADD [ItemID] [int] NOT NULL;

ALTER TABLE [dbo].[Product Details] WITH NOCHECK ADD CONSTRAINT [PK_ProductDetails] PRIMARY KEY ([DetailID]) 


ALTER TABLE [dbo].[Products]  WITH NOCHECK ADD CONSTRAINT [FK_Products_Categories] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[Categories] ([CategoryID])

ALTER TABLE [dbo].[Products]  WITH NOCHECK ADD CONSTRAINT [FK_Products_Suppliers] FOREIGN KEY([SupplierID])
REFERENCES [dbo].[Suppliers] ([SupplierID])

ALTER TABLE [dbo].[Product Details]  WITH NOCHECK ADD CONSTRAINT [FK_ProductDetails_Items] FOREIGN KEY([ItemID])
REFERENCES [dbo].[Items] ([ItemID])

ALTER TABLE [dbo].[Items]  WITH NOCHECK ADD CONSTRAINT [FK_Items_Suppliers] FOREIGN KEY([SupplierID])
REFERENCES [dbo].[Suppliers] ([SupplierID])