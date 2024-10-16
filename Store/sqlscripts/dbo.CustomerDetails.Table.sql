USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[CustomerDetails]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerDetails](
	[ID] [int] NOT NULL,
	[LastContactDate] [datetime] NULL,
	[LastContactedBy] [int] NULL,
	[Email] [nvarchar](100) NULL,
	[SendBulletin] [bit] NOT NULL,
 CONSTRAINT [PK_CustomerDetails] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerDetails] ADD  CONSTRAINT [DF_CustomerDetails_SendBulletin]  DEFAULT ((1)) FOR [SendBulletin]
GO
ALTER TABLE [dbo].[CustomerDetails]  WITH CHECK ADD  CONSTRAINT [FK_CustomerDetails_LastContactedBy] FOREIGN KEY([LastContactedBy])
REFERENCES [dbo].[Employees] ([EmployeeID])
GO
ALTER TABLE [dbo].[CustomerDetails] CHECK CONSTRAINT [FK_CustomerDetails_LastContactedBy]
GO
