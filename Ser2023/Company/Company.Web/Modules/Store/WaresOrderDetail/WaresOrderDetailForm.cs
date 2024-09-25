using Serenity.ComponentModel;
using System;

namespace Company.Store.Forms;

[FormScript("Store.WaresOrderDetails")]
[BasedOnRow(typeof(WaresOrderDetailRow), CheckNames = true)]
public class WaresOrderDetailForm
{
    [EditLink, Width(200)]
    public Int32 WaresID { get; set; }
    [Width(100)]
    public Decimal SinglePrice { get; set; }
    [Width(100)]
    public Single Quantity { get; set; }
    [Width(100)]
    public Single Discount { get; set; }
}