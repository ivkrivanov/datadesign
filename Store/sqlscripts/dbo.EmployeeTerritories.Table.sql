USE [Store_Store_v1]
GO
/****** Object:  Table [dbo].[EmployeeTerritories]    Script Date: 13.01.2019 20:31:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmployeeTerritories](
	[EmployeeID] [int] NOT NULL,
	[TerritoryID] [nvarchar](20) NOT NULL
) ON [PRIMARY]
GO
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (1, N'06897')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (1, N'19713')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (2, N'01581')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (2, N'01730')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (2, N'01833')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (2, N'02116')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (2, N'02139')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (2, N'02184')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (2, N'40222')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (3, N'30346')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (3, N'31406')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (3, N'32859')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (3, N'33607')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (4, N'20852')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (4, N'27403')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (4, N'27511')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (5, N'02903')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (5, N'07960')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (5, N'08837')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (5, N'10019')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (5, N'10038')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (5, N'11747')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (5, N'14450')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (6, N'85014')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (6, N'85251')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (6, N'98004')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (6, N'98052')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (6, N'98104')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'60179')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'60601')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'80202')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'80909')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'90405')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'94025')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'94105')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'95008')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'95054')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (7, N'95060')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (8, N'19428')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (8, N'44122')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (8, N'45839')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (8, N'53404')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (9, N'03049')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (9, N'03801')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (9, N'48075')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (9, N'48084')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (9, N'48304')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (9, N'55113')
INSERT [dbo].[EmployeeTerritories] ([EmployeeID], [TerritoryID]) VALUES (9, N'55439')
SET ANSI_PADDING ON
GO
/****** Object:  Index [PK_EmployeeTerritories]    Script Date: 13.01.2019 20:31:17 ******/
ALTER TABLE [dbo].[EmployeeTerritories] ADD  CONSTRAINT [PK_EmployeeTerritories] PRIMARY KEY NONCLUSTERED 
(
	[EmployeeID] ASC,
	[TerritoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmployeeTerritories]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeTerritories_Employees] FOREIGN KEY([EmployeeID])
REFERENCES [dbo].[Employees] ([EmployeeID])
GO
ALTER TABLE [dbo].[EmployeeTerritories] CHECK CONSTRAINT [FK_EmployeeTerritories_Employees]
GO
ALTER TABLE [dbo].[EmployeeTerritories]  WITH CHECK ADD  CONSTRAINT [FK_EmployeeTerritories_Territories] FOREIGN KEY([TerritoryID])
REFERENCES [dbo].[Territories] ([TerritoryID])
GO
ALTER TABLE [dbo].[EmployeeTerritories] CHECK CONSTRAINT [FK_EmployeeTerritories_Territories]
GO
