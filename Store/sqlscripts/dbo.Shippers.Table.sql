USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[Shippers]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shippers](
	[ShipperID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [nvarchar](40) NOT NULL,
	[Phone] [nvarchar](24) NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Shippers] PRIMARY KEY CLUSTERED 
(
	[ShipperID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Shippers] ON 

INSERT [dbo].[Shippers] ([ShipperID], [CompanyName], [Phone], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (1, N'Speedy Express', N'(503) 555-9831', CAST(N'2019-01-07T13:48:00.720' AS DateTime), 1, NULL, NULL, 1, 1)
INSERT [dbo].[Shippers] ([ShipperID], [CompanyName], [Phone], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (2, N'United Package', N'(503) 555-3199', CAST(N'2019-01-07T13:48:00.720' AS DateTime), 1, NULL, NULL, 1, 1)
INSERT [dbo].[Shippers] ([ShipperID], [CompanyName], [Phone], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (3, N'Federal Shipping', N'(503) 555-9931', CAST(N'2019-01-07T13:48:00.720' AS DateTime), 1, NULL, NULL, 1, 1)
SET IDENTITY_INSERT [dbo].[Shippers] OFF
ALTER TABLE [dbo].[Shippers] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[Shippers] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[Shippers] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Shippers] ADD  DEFAULT ((1)) FOR [TenantId]
GO
