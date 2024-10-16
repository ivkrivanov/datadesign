USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[CustomerDemographics]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerDemographics](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CustomerTypeID] [nvarchar](10) NOT NULL,
	[CustomerDesc] [ntext] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [PK_CustomerDemographics]    Script Date: 13.01.2019 20:31:17 ******/
ALTER TABLE [dbo].[CustomerDemographics] ADD  CONSTRAINT [PK_CustomerDemographics] PRIMARY KEY NONCLUSTERED 
(
	[CustomerTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
