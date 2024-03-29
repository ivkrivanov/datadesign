USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[Counterparties]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Counterparties](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CounterpartyID] [nvarchar](14) NOT NULL,
	[CompanyName] [nvarchar](40) NOT NULL,
	[ContactName] [nvarchar](40) NULL,
	[ContactTitle] [nvarchar](30) NULL,
	[Address] [nvarchar](60) NULL,
	[City] [nvarchar](15) NULL,
	[Region] [nvarchar](15) NULL,
	[PostalCode] [nvarchar](10) NULL,
	[Country] [nvarchar](20) NULL,
	[Phone] [nvarchar](24) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Counterparties] PRIMARY KEY CLUSTERED 
(
	[CounterpartyID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Counterparties] ON 

INSERT [dbo].[Counterparties] ([ID], [CounterpartyID], [CompanyName], [ContactName], [ContactTitle], [Address], [City], [Region], [PostalCode], [Country], [Phone], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (6, N'115755582', N'Фууд Деливъри Експрес ЕООД', N'Делко Георгиев Костадинов', N'МОЛ', N'ж.к.Тракия бл.68', N'Пловдив', N'Пловдив', N'5200', N'България', N'0888347221', CAST(N'2019-01-10T15:49:16.410' AS DateTime), 1, CAST(N'2019-01-11T23:22:27.943' AS DateTime), 2, 1, 4)
SET IDENTITY_INSERT [dbo].[Counterparties] OFF
ALTER TABLE [dbo].[Counterparties] ADD  DEFAULT ((0)) FOR [CounterpartyID]
GO
ALTER TABLE [dbo].[Counterparties] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[Counterparties] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[Counterparties] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Counterparties] ADD  DEFAULT ((1)) FOR [TenantId]
GO
