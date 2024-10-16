USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[CounterpartyDetails]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CounterpartyDetails](
	[ID] [int] NOT NULL,
	[LastContactDate] [datetime] NULL,
	[LastContactedBy] [int] NULL,
	[Email] [nvarchar](100) NULL,
	[SendBulletin] [bit] NOT NULL,
 CONSTRAINT [PK_CounterpartyDetails] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[CounterpartyDetails] ([ID], [LastContactDate], [LastContactedBy], [Email], [SendBulletin]) VALUES (6, NULL, NULL, N'food.delivery@dummy.com', 0)
ALTER TABLE [dbo].[CounterpartyDetails] ADD  DEFAULT ((1)) FOR [SendBulletin]
GO
ALTER TABLE [dbo].[CounterpartyDetails]  WITH NOCHECK ADD  CONSTRAINT [FK_CounterpartyDetails_LastContactedBy] FOREIGN KEY([LastContactedBy])
REFERENCES [dbo].[Employees] ([EmployeeID])
GO
ALTER TABLE [dbo].[CounterpartyDetails] CHECK CONSTRAINT [FK_CounterpartyDetails_LastContactedBy]
GO
