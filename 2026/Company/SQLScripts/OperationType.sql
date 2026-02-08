USE [Company_Sales_v1]
GO

/****** Object:  Table [sales].[OperationType]    Script Date: 8.2.2026 г. 20:53:01 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [sales].[OperationType](
	[OperationTypeID] [int] IDENTITY(1,1) NOT NULL,
	[OpCode] [smallint] NOT NULL,
	[Operation] [nvarchar](30) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_OperationType] PRIMARY KEY NONCLUSTERED 
(
	[OperationTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [sales].[OperationType] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [sales].[OperationType] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [sales].[OperationType] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [sales].[OperationType] ADD  DEFAULT ((1)) FOR [TenantId]
GO


