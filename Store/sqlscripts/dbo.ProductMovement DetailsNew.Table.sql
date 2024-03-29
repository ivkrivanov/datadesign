USE [Store_Store_v1]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [CK_SalePrice]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [FK_ProductMovement_Details_ProductMovement]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [FK_ProductMovement_Details_Product]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [DF__ProductMo__Tenan__1B5E0D89]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [DF__ProductMo__IsAct__1A69E950]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [DF__ProductMo__Inser__1975C517]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [DF__ProductMo__Inser__1881A0DE]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [DF_ProductMovement Detail_Discount]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [DF_ProductMovement Detail_SalePrice]
GO
ALTER TABLE [dbo].[ProductMovement Details] DROP CONSTRAINT [DF_ProductMovement Detail_Quantity]
GO
/****** Object:  Table [dbo].[ProductMovement Details]    Script Date: 21.04.2019 19:45:01 ******/
DROP TABLE [dbo].[ProductMovement Details]
GO
/****** Object:  Table [dbo].[ProductMovement Details]    Script Date: 21.04.2019 19:45:01 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProductMovement Details](
	[ProductMoveID] [int] NOT NULL,
	[ProductID] [int] NOT NULL,
	[Quantity] [decimal](15,4) NOT NULL,
	[SinglePrice] [decimal](15,4) NOT NULL,
	[Discount] [decimal](15,4) NOT NULL,
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
SET IDENTITY_INSERT [dbo].[ProductMovement Details] ON 

INSERT [dbo].[ProductMovement Details] ([ProductMoveID], [ProductID], [Quantity], [SinglePrice], [Discount], [DetailID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 78, 1, 0.2200, 0, 5, CAST(N'2019-04-13T11:54:15.527' AS DateTime), 2, NULL, NULL, 1, 4)
INSERT [dbo].[ProductMovement Details] ([ProductMoveID], [ProductID], [Quantity], [SinglePrice], [Discount], [DetailID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 79, 1, 0.1500, 0, 6, CAST(N'2019-04-13T12:02:17.057' AS DateTime), 2, NULL, NULL, 1, 4)
INSERT [dbo].[ProductMovement Details] ([ProductMoveID], [ProductID], [Quantity], [SinglePrice], [Discount], [DetailID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 98, 1, 0.0500, 0, 2, CAST(N'2019-04-12T20:08:01.220' AS DateTime), 2, CAST(N'2019-04-13T14:07:33.863' AS DateTime), 2, 1, 4)
INSERT [dbo].[ProductMovement Details] ([ProductMoveID], [ProductID], [Quantity], [SinglePrice], [Discount], [DetailID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 99, 1, 0.1600, 0, 3, CAST(N'2019-04-13T11:47:04.653' AS DateTime), 2, NULL, NULL, 1, 4)
INSERT [dbo].[ProductMovement Details] ([ProductMoveID], [ProductID], [Quantity], [SinglePrice], [Discount], [DetailID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 100, 1, 0.6700, 0, 4, CAST(N'2019-04-13T11:51:32.373' AS DateTime), 2, NULL, NULL, 1, 4)
INSERT [dbo].[ProductMovement Details] ([ProductMoveID], [ProductID], [Quantity], [SinglePrice], [Discount], [DetailID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 101, 1, 0.1900, 0, 7, CAST(N'2019-04-13T12:02:17.073' AS DateTime), 2, NULL, NULL, 1, 4)
INSERT [dbo].[ProductMovement Details] ([ProductMoveID], [ProductID], [Quantity], [SinglePrice], [Discount], [DetailID], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 102, 1, 0.1200, 0, 8, CAST(N'2019-04-13T12:02:17.087' AS DateTime), 2, NULL, NULL, 1, 4)
SET IDENTITY_INSERT [dbo].[ProductMovement Details] OFF
ALTER TABLE [dbo].[ProductMovement Details] ADD  CONSTRAINT [DF_ProductMovement Detail_Quantity]  DEFAULT ((1)) FOR [Quantity]
GO
ALTER TABLE [dbo].[ProductMovement Details] ADD  CONSTRAINT [DF_ProductMovement Detail_SinglePrice]  DEFAULT ((0)) FOR [SinglePrice]
GO
ALTER TABLE [dbo].[ProductMovement Details] ADD  CONSTRAINT [DF_ProductMovement Detail_Discount]  DEFAULT ((0)) FOR [Discount]
GO
ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[ProductMovement Details] ADD  DEFAULT ((1)) FOR [TenantId]
GO
ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Details_Product] FOREIGN KEY([ProductID])
REFERENCES [dbo].[Products] ([ProductID])
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [FK_ProductMovement_Details_Product]
GO
ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Details_ProductMovement] FOREIGN KEY([ProductMoveID])
REFERENCES [dbo].[ProductMovement] ([ProductMoveID])
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [FK_ProductMovement_Details_ProductMovement]
GO
ALTER TABLE [dbo].[ProductMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_SinglePrice] CHECK  (([SinglePrice]>=(0)))
GO
ALTER TABLE [dbo].[ProductMovement Details] CHECK CONSTRAINT [CK_SinglePrice]
GO
