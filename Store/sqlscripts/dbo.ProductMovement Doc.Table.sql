USE [Store_Store_v1]
GO

/****** Object:  Table [dbo].[WaresMovement Doc]    Script Date: 12.04.2019 19:31:22 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ProductMovement Doc](
	[ProductMoveID] [int] NOT NULL,
	[DocumentTypeID] [int] NULL,
	[DocumentNumber] [nvarchar](10) NULL,
	[DocumentDate] [date] NULL,
 CONSTRAINT [PK_ProductMovement Doc] PRIMARY KEY CLUSTERED 
(
	[ProductMoveID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ProductMovement Doc]  WITH CHECK ADD  CONSTRAINT [FK_ProductMovement Doc_DocumentType] FOREIGN KEY([DocumentTypeID])
REFERENCES [dbo].[DocumentType] ([DocumentTypeID])
GO

ALTER TABLE [dbo].[ProductMovement Doc] CHECK CONSTRAINT [FK_ProductMovement Doc_DocumentType]
GO


