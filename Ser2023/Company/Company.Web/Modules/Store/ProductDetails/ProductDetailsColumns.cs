using Serenity.ComponentModel;
using System;

namespace Company.Store.Columns;

[ColumnsScript("Store.ProductDetails")]
[BasedOnRow(typeof(ProductDetailsRow), CheckNames = true)]
public class ProductDetailsColumns
{
    [EditLink, Width(80)]
    public String WaresCode { get; set; }
    [EditLink, Width(150)]
    public String WaresName { get; set; }
    [Width(80), AlignRight]
    public Decimal PlanPrice { get; set; }
    [Width(80), AlignRight]
    public Double Quantity { get; set; }
    [Width(80), AlignRight]
    public Double ProductQuantity { get; set; }
    [Width(80), AlignRight]
    public Double Discount { get; set; }
    [Width(80), AlignRight]
    public Decimal LineTotal { get; set; }
}