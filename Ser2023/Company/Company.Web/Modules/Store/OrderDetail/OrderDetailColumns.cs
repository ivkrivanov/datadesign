using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Store.Columns;

[ColumnsScript("Store.OrderDetail")]
[BasedOnRow(typeof(OrderDetailRow), CheckNames = true)]
public class OrderDetailColumns
{
    public string ProductCode { get; set; }
    public string ProductName { get; set; }
    public decimal SinglePrice { get; set; }
    public decimal SalePrice { get; set; }
    public float Quantity { get; set; }
    public decimal Discount { get; set; }
    public decimal LineTotal { get; set; }
}