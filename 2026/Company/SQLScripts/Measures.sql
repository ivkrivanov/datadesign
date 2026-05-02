USE [Company_Sales_v1]
GO

/****** Object:  Table [sales].[Measures]    Script Date: 8.2.2026 г. 20:47:58 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [sales].[Measures](
	[MeasureID] [int] IDENTITY(1,1) NOT NULL,
	[MeasureName] [nvarchar](20) NOT NULL,
	[InsertDate] [datetime] NOT NULL,
	[InsertUserId] [int] NOT NULL,
	[UpdateDate] [datetime] NULL,
	[UpdateUserId] [int] NULL,
	[IsActive] [int] NOT NULL,
	[TenantId] [int] NOT NULL,
 CONSTRAINT [PK_Measures] PRIMARY KEY CLUSTERED 
(
	[MeasureID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [sales].[Measures] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO

ALTER TABLE [sales].[Measures] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO

ALTER TABLE [sales].[Measures] ADD  DEFAULT ((1)) FOR [IsActive]
GO

ALTER TABLE [sales].[Measures] ADD  DEFAULT ((1)) FOR [TenantId]
GO


