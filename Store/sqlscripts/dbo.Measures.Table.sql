USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[Measures]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Measures](
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
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Measures] ADD  DEFAULT (getdate()) FOR [InsertDate]
GO
ALTER TABLE [dbo].[Measures] ADD  DEFAULT ((1)) FOR [InsertUserId]
GO
ALTER TABLE [dbo].[Measures] ADD  DEFAULT ((1)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Measures] ADD  DEFAULT ((1)) FOR [TenantId]
GO
