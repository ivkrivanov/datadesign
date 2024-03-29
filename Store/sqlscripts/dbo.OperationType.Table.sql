USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[OperationType]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OperationType](
	[OperationTypeID] [int] IDENTITY(1,1) NOT NULL,
	[OpCode] [smallint] NOT NULL,
	[Operation] [nvarchar](30) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[OperationType] ON 

INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (1, 100, N'Артикули приход', CAST(N'2019-01-11T10:13:38.427' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (2, 101, N'Начално салдо', CAST(N'2019-01-11T10:13:57.327' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (3, 102, N'Доставка на стоки', CAST(N'2019-01-11T10:14:10.170' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (4, 103, N'Излишък на стоки', CAST(N'2019-01-11T10:14:31.243' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (5, 105, N'Размяна приход', CAST(N'2019-01-11T10:14:49.723' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (6, 109, N'Отписване на стоки', CAST(N'2019-01-11T10:15:02.690' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (7, 110, N'Продукти - приход', CAST(N'2019-01-11T10:15:25.987' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (8, 111, N'Доставка на продукти', CAST(N'2019-01-11T10:15:43.683' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (9, 112, N'Излишък на продукция', CAST(N'2019-01-11T10:15:59.423' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (10, 200, N'Артикули - разход', CAST(N'2019-01-11T10:16:38.820' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (11, 201, N'Продажба на артикули', CAST(N'2019-01-11T10:16:58.337' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (12, 202, N'Липса на артикули', CAST(N'2019-01-11T10:17:32.287' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (13, 203, N'Брак на артикули', CAST(N'2019-01-11T10:17:51.770' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (14, 204, N'Фира на артикули', CAST(N'2019-01-11T10:18:13.240' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (15, 205, N'Размяна разход', CAST(N'2019-01-11T10:18:33.947' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (16, 210, N'Продукти - разход', CAST(N'2019-01-11T10:18:50.943' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (17, 211, N'Продажба на продукти', CAST(N'2019-01-11T10:19:17.463' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (18, 212, N'Липса на продукти', CAST(N'2019-01-11T10:19:36.130' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (19, 213, N'Брак на продукти', CAST(N'2019-01-11T10:19:51.030' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (20, 214, N'Фира на продукти', CAST(N'2019-01-11T10:20:13.353' AS DateTime), 1, NULL, NULL, 1, 4)
INSERT [dbo].[OperationType] ([OperationTypeID], [OpCode], [Operation], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (21, 216, N'Инвентаризация', CAST(N'2019-01-11T10:20:32.873' AS DateTime), 1, NULL, NULL, 1, 4)
SET IDENTITY_INSERT [dbo].[OperationType] OFF
/****** Object:  Index [PK_OperationType]    Script Date: 13.01.2019 20:31:17 ******/
ALTER TABLE [dbo].[OperationType] ADD  CONSTRAINT [PK_OperationType] PRIMARY KEY NONCLUSTERED 
(
	[OperationTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OperationType] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[OperationType] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[OperationType] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[OperationType] ADD  DEFAULT ((1)) FOR [TenantId]
GO
