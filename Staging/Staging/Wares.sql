/****** Object:  Table [dbo].[Wares]    Script Date: 16.1.2019 г. 15:00:08 ******/

CREATE TABLE [dbo].[Wares](
	[WaresID] [int] IDENTITY(1,1) NOT NULL,
	[WaresCode] [nvarchar](15) NOT NULL,
	[WaresBarcode] [nvarchar](15) NULL,
	[WaresLabel] [nvarchar](20) NULL,
	[WaresName] [nvarchar](60) NULL,
	[WaresImage] [nvarchar](255) NULL,
	[SupplierID] [int] NULL,
	[CounterpartyID] [nvarchar](14) NULL,
	[CategoryID] [int] NULL,
	[MeasureID] [int] NOT NULL,
	[QuantityPerUnit] [decimal](15,4) NULL,
	[UnitPrice] [decimal](15,4) NULL,
	[UnitsInStock] [decimal](15,4) NULL,
	[UnitsOnOrder] [decimal](15,4) NULL,
	[Discontinued] [bit] NOT NULL,
	[AccountID] [int] NULL,
	[InsertDate] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[InsertUserId] [int] NOT NULL DEFAULT (1),
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL DEFAULT (1),
	[TenantId] [int] NOT NULL DEFAULT (1),
 CONSTRAINT [PK_Wares] PRIMARY KEY CLUSTERED 
(
	[WaresID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Wares] ON 
GO
INSERT [dbo].[Wares] ([WaresID], [WaresCode], [WaresBarcode], [WaresLabel], [WaresName], [WaresImage], [SupplierID], [CategoryID], [MeasureID], [QuantityPerUnit], [UnitPrice], [Discontinued], [AccountID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (1, N'010101', NULL, N'сухо мляко', N'Сухо мляко', NULL, NULL, 9, 1, 1, 9.4000, 0, 1, CAST(N'2019-01-15T14:23:47.043' AS DateTime), 2, NULL, NULL, 1, 4)
GO
INSERT [dbo].[Wares] ([WaresID], [WaresCode], [WaresBarcode], [WaresLabel], [WaresName], [WaresImage], [SupplierID], [CategoryID], [MeasureID], [QuantityPerUnit], [UnitPrice], [Discontinued], [AccountID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (2, N'010102', NULL, N'кисело мляко', N'Кисело мляко', NULL, NULL, 9, 2, 12, 1.5500, 0, 1, CAST(N'2019-01-16T12:52:59.833' AS DateTime), 2, NULL, NULL, 1, 4)
GO
SET IDENTITY_INSERT [dbo].[Wares] OFF
GO

ALTER TABLE [dbo].[Wares]  WITH NOCHECK ADD  CONSTRAINT [FK_Wares_Categories] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[Categories] ([CategoryID])
GO
ALTER TABLE [dbo].[Wares] CHECK CONSTRAINT [FK_Wares_Categories]
GO
ALTER TABLE [dbo].[Wares]  WITH NOCHECK ADD  CONSTRAINT [FK_Wares_Measures] FOREIGN KEY([MeasureID])
REFERENCES [dbo].[Measures] ([MeasureID])
GO
ALTER TABLE [dbo].[Wares] CHECK CONSTRAINT [FK_Wares_Measures]
GO
ALTER TABLE [dbo].[Wares]  WITH NOCHECK ADD  CONSTRAINT [FK_Wares_Suppliers] FOREIGN KEY([SupplierID])
REFERENCES [dbo].[Suppliers] ([SupplierID])
GO
ALTER TABLE [dbo].[Wares] CHECK CONSTRAINT [FK_Wares_Suppliers]
GO

ALTER TABLE [dbo].[Wares]  WITH NOCHECK ADD  CONSTRAINT [FK_Wares_Counterparties] FOREIGN KEY([CounterpartyID])
REFERENCES [dbo].[Counterparties] ([CounterpartyID])
GO
ALTER TABLE [dbo].[Wares] CHECK CONSTRAINT [FK_Wares_Counterparties]
GO

ALTER TABLE [dbo].[Product Details]  WITH NOCHECK ADD  CONSTRAINT [FK_Product_Details_Wares] FOREIGN KEY([WaresID])
REFERENCES [dbo].[Wares] ([WaresID])
GO
ALTER TABLE [dbo].[Product Details] CHECK CONSTRAINT [FK_Product_Details_Wares]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [FK_WaresMovement_Details_Wares] FOREIGN KEY([WaresID])
REFERENCES [dbo].[Wares] ([WaresID])
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [FK_WaresMovement_Details_Wares]
GO
