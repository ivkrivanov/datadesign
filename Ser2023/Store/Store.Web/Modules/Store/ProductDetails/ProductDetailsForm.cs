
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;

    [FormScript("Store.ProductDetails")]
    [BasedOnRow(typeof(Entities.ProductDetailsRow), CheckNames = true)]
    public class ProductDetailsForm
    {
        [EditLink, Width(200)]
        public int WaresId { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public double Quantity { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public double ProductQuantity { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public decimal PlanPrice { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public double Discount { get; set; }
    }
}