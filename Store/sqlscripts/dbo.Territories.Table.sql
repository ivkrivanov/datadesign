USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[Territories]    Script Date: 13.01.2019 20:31:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Territories](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TerritoryID] [nvarchar](20) NOT NULL,
	[TerritoryDescription] [nvarchar](50) NOT NULL,
	[RegionID] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Territories] ON 

INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (1, N'01581', N'Westboro', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (2, N'01730', N'Bedford', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (3, N'01833', N'Georgetow', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (4, N'02116', N'Boston', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (5, N'02139', N'Cambridge', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (6, N'02184', N'Braintree', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (7, N'02903', N'Providence', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (8, N'03049', N'Hollis', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (9, N'03801', N'Portsmouth', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (10, N'06897', N'Wilton', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (11, N'07960', N'Morristown', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (12, N'08837', N'Edison', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (13, N'10019', N'New York', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (14, N'10038', N'New York', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (15, N'11747', N'Mellvile', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (16, N'14450', N'Fairport', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (17, N'19428', N'Philadelphia', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (18, N'19713', N'Neward', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (19, N'20852', N'Rockville', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (20, N'27403', N'Greensboro', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (21, N'27511', N'Cary', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (22, N'29202', N'Columbia', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (23, N'30346', N'Atlanta', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (24, N'31406', N'Savannah', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (25, N'32859', N'Orlando', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (26, N'33607', N'Tampa', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (27, N'40222', N'Louisville', 1)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (28, N'44122', N'Beachwood', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (29, N'45839', N'Findlay', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (30, N'48075', N'Southfield', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (31, N'48084', N'Troy', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (32, N'48304', N'Bloomfield Hills', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (33, N'53404', N'Racine', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (34, N'55113', N'Roseville', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (35, N'55439', N'Minneapolis', 3)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (36, N'60179', N'Hoffman Estates', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (37, N'60601', N'Chicago', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (38, N'72716', N'Bentonville', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (39, N'75234', N'Dallas', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (40, N'78759', N'Austin', 4)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (41, N'80202', N'Denver', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (42, N'80909', N'Colorado Springs', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (43, N'85014', N'Phoenix', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (44, N'85251', N'Scottsdale', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (45, N'90405', N'Santa Monica', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (46, N'94025', N'Menlo Park', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (47, N'94105', N'San Francisco', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (48, N'95008', N'Campbell', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (49, N'95054', N'Santa Clara', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (50, N'95060', N'Santa Cruz', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (51, N'98004', N'Bellevue', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (52, N'98052', N'Redmond', 2)
INSERT [dbo].[Territories] ([ID], [TerritoryID], [TerritoryDescription], [RegionID]) VALUES (53, N'98104', N'Seattle', 2)
SET IDENTITY_INSERT [dbo].[Territories] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [PK_Territories]    Script Date: 13.01.2019 20:31:17 ******/
ALTER TABLE [dbo].[Territories] ADD  CONSTRAINT [PK_Territories] PRIMARY KEY NONCLUSTERED 
(
	[TerritoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Territories]  WITH CHECK ADD  CONSTRAINT [FK_Territories_Region] FOREIGN KEY([RegionID])
REFERENCES [dbo].[Region] ([RegionID])
GO
ALTER TABLE [dbo].[Territories] CHECK CONSTRAINT [FK_Territories_Region]
GO
