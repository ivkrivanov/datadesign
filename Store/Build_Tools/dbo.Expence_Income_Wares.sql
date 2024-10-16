USE [Store_Store_v1]
GO

/****** Object:  View [dbo].[Expence/Income_Wares]    Script Date: 24.1.2019 г. 17:24:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[Expence/Income_Wares]
AS
SELECT        TOP (100) PERCENT 'ItemMode:No' AS ItemMode, dbo.WaresMovement.ShopID, dbo.WaresMovement.IsActive, dbo.[WaresMovement Details].WaresID, dbo.Wares.WaresCode AS [Key], dbo.WaresMovement.OrderDate, 
                         dbo.WaresMovement.OperationTypeID, dbo.WaresMovement.WaresMoveID, dbo.[WaresMovement Details].Quantity, dbo.[WaresMovement Details].SinglePrice
FROM            dbo.Wares INNER JOIN
                         dbo.[WaresMovement Details] ON dbo.Wares.WaresID = dbo.[WaresMovement Details].WaresID INNER JOIN
                         dbo.WaresMovement ON dbo.[WaresMovement Details].WaresMoveID = dbo.WaresMovement.WaresMoveID INNER JOIN
                         dbo.Categories ON dbo.Wares.CategoryID = dbo.Categories.CategoryID
ORDER BY dbo.WaresMovement.ShopID, [Key], dbo.WaresMovement.OrderDate, dbo.WaresMovement.OperationTypeID, dbo.WaresMovement.WaresMoveID
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[38] 4[23] 2[20] 3) )"
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
         Begin Table = "Wares"
            Begin Extent = 
               Top = 8
               Left = 455
               Bottom = 326
               Right = 629
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "WaresMovement"
            Begin Extent = 
               Top = 6
               Left = 19
               Bottom = 330
               Right = 198
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "WaresMovement Details"
            Begin Extent = 
               Top = 5
               Left = 240
               Bottom = 307
               Right = 410
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Categories"
            Begin Extent = 
               Top = 11
               Left = 749
               Bottom = 281
               Right = 923
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
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1980
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 11
         Column = 5475
         Alias = 2685
         Table = 2265
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
      ' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Expence/Income_Wares'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'   Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Expence/Income_Wares'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Expence/Income_Wares'
GO

