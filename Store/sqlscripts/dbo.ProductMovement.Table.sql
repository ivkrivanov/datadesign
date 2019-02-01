USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[WaresMovement]    Script Date: 17.1.2019 �. 16:37:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductMovement](
	[ProductMoveID] [int] IDENTITY(1,1) NOT NULL,
	[ShopID] [nvarchar](14) NOT NULL,
	[CounterpartyID] [nvarchar](14) NOT NULL,
	[EmployeeID] [int] NULL,
	[ShipperID] [int] NULL,
	[OperationTypeID] [int] NOT NULL,
	[OrderDate] [datetime] NULL,
	[RequiredDate] [datetime] NULL,
	[ShippedDate] [datetime] NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL, 
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
CONSTRAINT [PK_ProductMovement] PRIMARY KEY CLUSTERED 
(
	[ProductMoveID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ProductMovement] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [dbo].[ProductMovement] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [dbo].[ProductMovement] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [dbo].[ProductMovement] ADD  DEFAULT ((1)) FOR [TenantId]
GO

ALTER TABLE [dbo].[ProductMovement]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Shops] FOREIGN KEY([ShopID])
REFERENCES [dbo].[Shops] ([ShopID])
GO
ALTER TABLE [dbo].[ProductMovement] CHECK CONSTRAINT [FK_ProductMovement_Shops]
GO

ALTER TABLE [dbo].[ProductMovement]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Counterparties] FOREIGN KEY([CounterpartyID])
REFERENCES [dbo].[Counterparties] ([CounterpartyID])
GO
ALTER TABLE [dbo].[ProductMovement] CHECK CONSTRAINT [FK_ProductMovement_Counterparties]
GO

ALTER TABLE [dbo].[ProductMovement]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Employees] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[Employees] ([EmployeeID])
GO
ALTER TABLE [dbo].[ProductMovement] CHECK CONSTRAINT [FK_ProductMovement_Employees]
GO

ALTER TABLE [dbo].[ProductMovement]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_Shippers] FOREIGN KEY([ShipperID])
REFERENCES [dbo].[Shippers] ([ShipperID])
GO

ALTER TABLE [dbo].[ProductMovement] CHECK CONSTRAINT [FK_ProductMovement_Shippers]
GO

ALTER TABLE [dbo].[ProductMovement]  WITH NOCHECK ADD  CONSTRAINT [FK_ProductMovement_OperationTypes] FOREIGN KEY([OperationTypeID])
REFERENCES [dbo].[OperationType] ([OperationTypeID])
GO
ALTER TABLE [dbo].[ProductMovement] CHECK CONSTRAINT [FK_ProductMovement_OperationTypes]
GO