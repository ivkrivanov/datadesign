USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[Region]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Region](
	[RegionID] [int] NOT NULL,
	[RegionDescription] [nvarchar](50) NOT NULL
) ON [PRIMARY]
GO
INSERT [dbo].[Region] ([RegionID], [RegionDescription]) VALUES (1, N'Eastern')
INSERT [dbo].[Region] ([RegionID], [RegionDescription]) VALUES (2, N'Western')
INSERT [dbo].[Region] ([RegionID], [RegionDescription]) VALUES (3, N'Northern')
INSERT [dbo].[Region] ([RegionID], [RegionDescription]) VALUES (4, N'Southern')
/****** Object:  Index [PK_Region]    Script Date: 13.01.2019 20:31:17 ******/
ALTER TABLE [dbo].[Region] ADD  CONSTRAINT [PK_Region] PRIMARY KEY NONCLUSTERED 
(
	[RegionID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
