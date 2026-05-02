using Serenity.ComponentModel;
using System;

namespace Company.Store.Columns;

[ColumnsScript("Store.WaresOrderDetail")]
[BasedOnRow(typeof(WaresOrderDetailRow), CheckNames = true)]
public class WaresOrderDetailColumn
{
    [EditLink, Width(60), AlignRight]
    public String WaresCode { get; set; }
    [EditLink, Width(160)]
    public String WaresName { get; set; }
    [Width(100), AlignRight]
    public Single Quantity { get; set; }
    [Width(80), AlignRight]
    public Decimal SinglePrice { get; set; }
    [Width(80), AlignRight]
    public Single Discount { get; set; }
    [Width(100)]
    public Decimal LineValue { get; set; }
    [Width(100)]
    public Decimal LineVAT { get; set; }
    [Width(100), AlignRight]
    public Decimal LineTotal { get; set; }
}
