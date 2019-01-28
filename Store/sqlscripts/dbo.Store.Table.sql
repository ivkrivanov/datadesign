USE [Store_Store_v1]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Store](
	[Position] [BIGINT] NULL DEFAULT(0),
	[WaresMode] [BIT] NULL,
	[MoveID] [INT] NOT NULL,
	[ShopID] [INT] NOT NULL,
	[WaresID] [INT] NOT NULL,
	[Key] [nvarchar](15) NULL,
	[Date] [datetime] NOT NULL,
	[OperationID] [int] NOT NULL,
	[IncomeQuantity] [Decimal](15,4) NULL,
	[IncomeSinglePrice] [Decimal](15,4) NULL,
	[IncomeValue] [Decimal](15,4) NULL,
	[AIncomeSinglePrice] [Decimal](15,4) NULL,
	[AIncomeValue] [Decimal](15,4) NULL,
	[ExpenceQuantity] [Decimal](15,4) NULL,
	[ExpenceSinglePrice] [Decimal](15,4) NULL,
	[ExpenceValue] [Decimal](15,4) NULL,
	[AExpenceSinglePrice] [Decimal](15,4) NULL, 
	[AExpenceValue] [Decimal](15,4) NULL,
	[RestQuantity] [Decimal](15,4) NULL,
	[RestSinglePrice] [Decimal](15,4) NULL,
	[RestValue] [Decimal](15,4) NULL,
	[ARestQuantity] [Decimal](15,4) NULL,
	[ARestSinglePrice] [Decimal](15,4) NULL,
	[ARestValue] [Decimal](15,4) NULL,
	[ReCost] [Decimal](15,4) NULL,
	[AReCost] [Decimal](15,4) NULL,
	[Mistake] [BIT] NULL,
	[AMistake] [BIT] NULL,
	[InsertDate] [datetime] NOT NULL DEFAULT CURRENT_TIMESTAMP,
	[InsertUserId] [int] NOT NULL DEFAULT (1),
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL DEFAULT (1),
	[TenantId] [int] NOT NULL DEFAULT (1),
CONSTRAINT [PK_STORE] PRIMARY KEY CLUSTERED 
(
	[MoveID] ASC,
	[ShopID] ASC,
	[WaresID] ASC,
	[Date] ASC,
	[OperationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO