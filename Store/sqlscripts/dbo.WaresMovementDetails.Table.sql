
/****** Object:  Table [dbo].[WaresMovement Details]    Script Date: 17.1.2019 ã. 16:31:38 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WaresMovement Details](
	[WaresMoveID] [int] NOT NULL,
	[WaresID] [int] NOT NULL,
	[Quantity] [real] NOT NULL,
	[IncomePrice] [money] NOT NULL,
	[SalePrice] [money] NOT NULL,
	[SinglePrice] [money] NOT NULL,
	[Discount] [real] NOT NULL,
	[DetailID] [int] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
CONSTRAINT [PK_WaresMovement Detail] PRIMARY KEY CLUSTERED 
(
	[WaresMoveID] ASC,
	[WaresID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  CONSTRAINT [DF_WaresMovement Detail_IncomePrice]  DEFAULT ((0)) FOR [IncomePrice]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  CONSTRAINT [DF_WaresMovement Detail_SalePrice]  DEFAULT ((0)) FOR [SalePrice]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  CONSTRAINT [DF_WaresMovement Detail_SinglePrice]  DEFAULT ((0)) FOR [SinglePrice]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  CONSTRAINT [DF_WaresMovement Detail_Quantity]  DEFAULT ((1)) FOR [Quantity]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  CONSTRAINT [DF_WaresMovement Detail_Discount]  DEFAULT ((0)) FOR [Discount]

ALTER TABLE [dbo].[WaresMovement Details] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [dbo].[WaresMovement Details] ADD  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [FK_WaresMovement_Details_WaresMovement] FOREIGN KEY([WaresMoveID])
REFERENCES [dbo].[WaresMovement] ([WaresMoveID])
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [FK_WaresMovement_Details_WaresMovement]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [FK_WaresMovement_Details_Wares] FOREIGN KEY([WaresID])
REFERENCES [dbo].[Wares] ([WaresID])
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [FK_WaresMovement_Details_Wares]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_Discount] CHECK  (([Discount]>=(0) AND [Discount]<=(1)))
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [CK_Discount]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_Quantity] CHECK  (([Quantity]>(0)))
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [CK_Quantity]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_UnitPrice] CHECK  (([IncomePrice]>=(0)))
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [CK_UnitPrice]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_UnitPrice] CHECK  (([SalePrice]>=(0)))
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [CK_UnitPrice]
GO

ALTER TABLE [dbo].[WaresMovement Details]  WITH NOCHECK ADD  CONSTRAINT [CK_UnitPrice] CHECK  (([SinglePrice]>=(0)))
GO
ALTER TABLE [dbo].[WaresMovement Details] CHECK CONSTRAINT [CK_UnitPrice]
GO