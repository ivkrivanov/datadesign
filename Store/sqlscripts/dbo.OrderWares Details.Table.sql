USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[OrderWares Details]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrderWares Details](
	[DetailID] [int] IDENTITY(1,1) NOT NULL,
	[OrderWaresID] [int] NOT NULL,
	[WaresID] [int] NOT NULL,
	[Quantity] [real] NOT NULL,
	[IncomePrice] [money] NOT NULL,
	[SalePrice] [money] NOT NULL,
	[SinglePrice] [money] NOT NULL,
	[Discount] [real] NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_OrderWares_Details] PRIMARY KEY CLUSTERED 
(
	[OrderWaresID] ASC,
	[WaresID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
