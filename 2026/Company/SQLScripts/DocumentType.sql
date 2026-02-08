USE [Company_Sales_v1]
GO

/****** Object:  Table [sales].[DocumentType]    Script Date: 8.2.2026 г. 20:56:18 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [sales].[DocumentType](
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [sales].[DocumentType] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [sales].[DocumentType] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [sales].[DocumentType] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [sales].[DocumentType] ADD  DEFAULT ((1)) FOR [TenantId]
GO


