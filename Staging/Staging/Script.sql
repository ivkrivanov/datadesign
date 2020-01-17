USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[DocumentType]    Script Date: 08.04.2019 17:51:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DocumentType](
	[DocumentTypeID] [int] IDENTITY(1,1) NOT NULL,
	[DocumentName] [nvarchar](50) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NULL,
	[TenantId] [int] NULL,
 CONSTRAINT [PK_DocumentType] PRIMARY KEY CLUSTERED 
(
	[DocumentTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WaresMovement Doc]    Script Date: 08.04.2019 17:51:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WaresMovement Doc](
	[WaresMoveID] [int] NOT NULL,
	[DocumentTypeID] [int] NULL,
	[DocumentNumber] [nvarchar](10) NULL,
	[DocumentDate] [date] NULL,
 CONSTRAINT [PK_WaresMovement Doc] PRIMARY KEY CLUSTERED 
(
	[WaresMoveID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[DocumentType] ON 

INSERT [dbo].[DocumentType] ([DocumentTypeID], [DocumentName], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (1, N'Фактура', CAST(N'2019-04-08T15:39:59.957' AS DateTime), 2, NULL, NULL, 1, 4)
INSERT [dbo].[DocumentType] ([DocumentTypeID], [DocumentName], [InsertDate], [InsertUserId], [UpdateDate], [UpdateUserId], [IsActive], [TenantId]) VALUES (2, N'Складова разписка', CAST(N'2019-04-08T15:40:14.087' AS DateTime), 2, NULL, NULL, 1, 4)
SET IDENTITY_INSERT [dbo].[DocumentType] OFF
INSERT [dbo].[WaresMovement Doc] ([WaresMoveID], [DocumentTypeID], [DocumentNumber], [DocumentDate]) VALUES (1, 1, N'231456322', CAST(N'2019-01-21' AS Date))
INSERT [dbo].[WaresMovement Doc] ([WaresMoveID], [DocumentTypeID], [DocumentNumber], [DocumentDate]) VALUES (2, 1, N'9999999999', CAST(N'2019-01-23' AS Date))
INSERT [dbo].[WaresMovement Doc] ([WaresMoveID], [DocumentTypeID], [DocumentNumber], [DocumentDate]) VALUES (3, 2, N'1234567890', CAST(N'2019-03-05' AS Date))
ALTER TABLE [dbo].[WaresMovement Doc]  WITH CHECK ADD  CONSTRAINT [FK_WaresMovement Doc_DocumentType] FOREIGN KEY([DocumentTypeID])
REFERENCES [dbo].[DocumentType] ([DocumentTypeID])
GO
ALTER TABLE [dbo].[WaresMovement Doc] CHECK CONSTRAINT [FK_WaresMovement Doc_DocumentType]
GO
