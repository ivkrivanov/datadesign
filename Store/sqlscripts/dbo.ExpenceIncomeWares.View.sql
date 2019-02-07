USE [Store_Store_v1]
GO

/****** Object:  View [dbo].[Expence/Income_Wares]    Script Date: 7.2.2019 г. 16:04:54 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE VIEW [dbo].[Expence/Income_Wares]
AS
SELECT        TOP (100) PERCENT 0 AS ItemMode, dbo.WaresMovement.ShopID, dbo.[WaresMovement Details].WaresID, dbo.Wares.WaresCode AS [Key], dbo.WaresMovement.OrderDate, dbo.OperationType.OpCode, 
                         dbo.WaresMovement.WaresMoveID AS MoveID, dbo.[WaresMovement Details].Quantity, dbo.[WaresMovement Details].SinglePrice, dbo.WaresMovement.TenantId
FROM            dbo.Wares INNER JOIN
                         dbo.[WaresMovement Details] ON dbo.Wares.WaresID = dbo.[WaresMovement Details].WaresID AND dbo.Wares.TenantId = dbo.[WaresMovement Details].TenantId INNER JOIN
                         dbo.WaresMovement ON dbo.[WaresMovement Details].WaresMoveID = dbo.WaresMovement.WaresMoveID AND dbo.[WaresMovement Details].TenantId = dbo.WaresMovement.TenantId INNER JOIN
                         dbo.OperationType ON dbo.WaresMovement.OperationTypeID = dbo.OperationType.OperationTypeID AND dbo.WaresMovement.TenantId = dbo.OperationType.TenantId
ORDER BY dbo.WaresMovement.ShopID, [Key], dbo.WaresMovement.OrderDate, dbo.OperationType.OpCode, MoveID
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[19] 2[23] 3) )"
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
               Top = 16
               Left = 841
               Bottom = 334
               Right = 1015
            End
            DisplayFlags = 280
            TopColumn = 7
         End
         Begin Table = "WaresMovement Details"
            Begin Extent = 
               Top = 16
               Left = 567
               Bottom = 327
               Right = 737
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "WaresMovement"
            Begin Extent = 
               Top = 6
               Left = 304
               Bottom = 330
               Right = 483
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "OperationType"
            Begin Extent = 
               Top = 104
               Left = 39
               Bottom = 329
               Right = 218
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
         Width = 2100
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 2700
         Width = 2070
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
         Filter = 1350' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Expence/Income_Wares'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane2', @value=N'
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Expence/Income_Wares'
GO

EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=2 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'Expence/Income_Wares'
GO

