USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[OrderProducts]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderProducts](
	[OrderProductID] [int] IDENTITY(1,1) NOT NULL,
	[OperationTypeID] [int] NOT NULL,
	[CounterpartyID] [nvarchar](14) NULL,
	[EmployeeID] [int] NULL,
	[OrderDate] [datetime] NULL,
	[RequiredDate] [datetime] NULL,
	[ShippedDate] [datetime] NULL,
	[ShipVia] [int] NULL,
	[Freight] [money] NULL,
	[ShipName] [nvarchar](40) NULL,
	[ShipAddress] [nvarchar](60) NULL,
	[ShipCity] [nvarchar](15) NULL,
	[ShipRegion] [nvarchar](15) NULL,
	[ShipPostalCode] [nvarchar](10) NULL,
	[ShipCountry] [nvarchar](15) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_OrderProducts] PRIMARY KEY CLUSTERED 
(
	[OrderProductID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OrderProducts]  WITH NOCHECK ADD  CONSTRAINT [FK_OrderProducts_Counterparties] FOREIGN KEY([CounterpartyID])
REFERENCES [dbo].[Counterparties] ([CounterpartyID])
GO
ALTER TABLE [dbo].[OrderProducts] CHECK CONSTRAINT [FK_OrderProducts_Counterparties]
GO
ALTER TABLE [dbo].[OrderProducts]  WITH NOCHECK ADD  CONSTRAINT [FK_OrderProducts_Employees] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[Employees] ([EmployeeID])
GO
ALTER TABLE [dbo].[OrderProducts] CHECK CONSTRAINT [FK_OrderProducts_Employees]
GO
ALTER TABLE [dbo].[OrderProducts]  WITH NOCHECK ADD  CONSTRAINT [FK_OrderProducts_Operationtype] FOREIGN KEY([OperationTypeID])
REFERENCES [dbo].[OperationType] ([OperationTypeID])
GO
ALTER TABLE [dbo].[OrderProducts] CHECK CONSTRAINT [FK_OrderProducts_Operationtype]
GO
ALTER TABLE [dbo].[OrderProducts]  WITH NOCHECK ADD  CONSTRAINT [FK_OrderProducts_Shippers] FOREIGN KEY([ShipVia])
REFERENCES [dbo].[Shippers] ([ShipperID])
GO
ALTER TABLE [dbo].[OrderProducts] CHECK CONSTRAINT [FK_OrderProducts_Shippers]
GO
