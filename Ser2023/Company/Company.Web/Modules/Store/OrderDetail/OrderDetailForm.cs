using Serenity.ComponentModel;

namespace Company.Store.Forms;

[FormScript("Store.OrderDetail")]
[BasedOnRow(typeof(OrderDetailRow), CheckNames = true)]
public class OrderDetailForm
{
    public int ProductId { get; set; }
    public decimal SinglePrice { get; set; }
    public decimal SalePrice { get; set; }
    public float Quantity { get; set; }
    public decimal Discount { get; set; }
}