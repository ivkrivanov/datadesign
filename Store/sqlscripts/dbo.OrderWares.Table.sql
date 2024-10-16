USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[OrderWares]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderWares](
	[OrderWaresID] [int] IDENTITY(1,1) NOT NULL,
	[ShopID] [int] NOT NULL,
	[SupplierID] [int] NOT NULL,
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
 CONSTRAINT [PK_OrderWares] PRIMARY KEY CLUSTERED 
(
	[OrderWaresID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
