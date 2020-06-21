
CREATE VIEW [dbo].[Expence/Income_Product]
AS
SELECT        TOP (100) PERCENT 1 AS ItemMode, dbo.ProductMovement.ShopID, dbo.Wares.WaresID, dbo.Wares.WaresCode AS [Key], dbo.ProductMovement.OrderDate, dbo.OperationType.OpCode, 
                         dbo.ProductMovement.ProductMoveID AS MoveID, SUM(dbo.[ProductMovement Details].Quantity * dbo.[Product Details].Quantity / dbo.[Product Details].ProductQuantity) AS Quantity, 0 AS SinglePrice, 
                         dbo.ProductMovement.TenantId
FROM            dbo.OperationType INNER JOIN
                         dbo.ProductMovement ON dbo.OperationType.OperationTypeID = dbo.ProductMovement.OperationTypeID INNER JOIN
                         dbo.[ProductMovement Details] ON dbo.ProductMovement.ProductMoveID = dbo.[ProductMovement Details].ProductMoveID INNER JOIN
                         dbo.Products ON dbo.[ProductMovement Details].ProductID = dbo.Products.ProductID INNER JOIN
                         dbo.[Product Details] ON dbo.Products.ProductID = dbo.[Product Details].ProductID INNER JOIN
                         dbo.Wares ON dbo.[Product Details].WaresID = dbo.Wares.WaresID
GROUP BY dbo.ProductMovement.ShopID, dbo.Wares.WaresID, dbo.Wares.WaresCode, dbo.ProductMovement.OrderDate, dbo.OperationType.OpCode, dbo.ProductMovement.ProductMoveID, dbo.ProductMovement.TenantId
ORDER BY dbo.ProductMovement.ShopID, [Key], dbo.ProductMovement.OrderDate, dbo.OperationType.OpCode, MoveID

GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane1', @value = N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
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
         Begin Table = "OperationType"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 136
               Right = 217
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "ProductMovement"
            Begin Extent = 
               Top = 10
               Left = 250
               Bottom = 320
               Right = 429
            End
            DisplayFlags = 280
            TopColumn = 1
         End
         Begin Table = "ProductMovement Details"
            Begin Extent = 
               Top = 11
               Left = 483
               Bottom = 141
               Right = 671
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Products"
            Begin Extent = 
               Top = 10
               Left = 733
               Bottom = 312
               Right = 907
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Product Details"
            Begin Extent = 
               Top = 4
               Left = 950
               Bottom = 134
               Right = 1143
            End
            DisplayFlags = 280
            TopColumn = 0
         End
         Begin Table = "Wares"
            Begin Extent = 
               Top = 10
               Left = 1198
               Bottom = 314
               Right = 1372
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
      Begin ColumnWidths = 10
         Width = 284
         Widt', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Expence/Income_Product';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPane2', @value = N'h = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 885
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      Begin ColumnWidths = 12
         Column = 9795
         Alias = 1095
         Table = 3360
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
', @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Expence/Income_Product';


GO
EXECUTE sp_addextendedproperty @name = N'MS_DiagramPaneCount', @value = 2, @level0type = N'SCHEMA', @level0name = N'dbo', @level1type = N'VIEW', @level1name = N'Expence/Income_Product';

