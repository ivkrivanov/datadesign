USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[CounterpartyRepresentatives]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CounterpartyRepresentatives](
	[RepresentativeID] [int] IDENTITY(1,1) NOT NULL,
	[CounterpartyID] [int] NOT NULL,
	[EmployeeID] [int] NOT NULL,
 CONSTRAINT [PK_CounterpartyRepresentatives] PRIMARY KEY CLUSTERED 
(
	[RepresentativeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
