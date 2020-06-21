CREATE VIEW dbo.StoreMove
AS
SELECT        dbo.Store.ShopID, dbo.Store.WaresID, dbo.Store.[Key], MIN(DISTINCT dbo.Wares.WaresName) AS WaresName, SUM(dbo.Store.IncomeQuantity) AS IncomeQuantity, SUM(dbo.Store.IncomeValue) AS IncomeValue, 
                         SUM(dbo.Store.ExpenceQuantity) AS ExpenceQuantity, SUM(dbo.Store.ExpenceValue) AS ExpenceValue, MAX(DISTINCT dbo.Store.RestQuantity) AS RestQuantity, MAX(DISTINCT dbo.Store.RestValue) AS RestValue
FROM            dbo.StoreS INNER JOIN
                         dbo.Wares ON dbo.StoreS.WaresID = dbo.Wares.WaresID INNER JOIN
                         dbo.Store ON dbo.StoreS.ShopID = dbo.Store.ShopID AND dbo.StoreS.WaresID = dbo.Store.WaresID
GROUP BY dbo.Store.ShopID, dbo.Store.WaresID, dbo.Store.[Key]

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[32] 4[15] 2[25] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1 [50] 2 [25] 3))"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 0
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "Store"
            Begin Extent = 
               Top = 9
               Left = 62
               Bottom = 309
               Right = 260
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "StoreS"
            Begin Extent = 
               Top = 11
               Left = 335
               Bottom = 166
               Right = 505
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Wares"
            Begin Extent = 
               Top = 11
               Left = 561
               Bottom = 321
               Right = 735
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 11
         Width = 284
         Width = 765
         Width = 840
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 3075
         Alias = 3330
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'StoreMove';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 1, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'StoreMove';

