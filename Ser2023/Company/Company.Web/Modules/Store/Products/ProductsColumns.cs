using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Store.Columns;

[ColumnsScript("Store.Products")]
[BasedOnRow(typeof(ProductsRow), CheckNames = true)]
public class ProductsColumns
{
    [EditLink, Width(60), SortOrder(4), AlignCenter]
    public String ProductCode { get; set; }
    [EditLink, Width(60), AlignCenter]
    public String ProductBarcode { get; set; }
    [EditLink, Width(250)]
    public String ProductName { get; set; }
    [EditLink, Width(100), AlignCenter]
    public String ProductLabel { get; set; }

    [QuickFilter]
    public Boolean Discontinued { get; set; }

    [EditLink(ItemType = "Store.Category"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
    public String CategoryName { get; set; }
    [Width(60), AlignCenter]
    public String MeasureName { get; set; }
    [Width(80), AlignRight]
    public String QuantityPerUnit { get; set; }
    [Width(80), AlignRight]
    public decimal UnitPrice { get; set; }
    [Width(80), AlignRight]
    public decimal SalePrice { get; set; }
    [Width(80), AlignRight]
    public Int16 UnitsInStock { get; set; }
    [Width(80), AlignRight]
    public Int16 UnitsOnOrder { get; set; }
    [Width(80), AlignRight]
    public Int16 ReorderLevel { get; set; }

}