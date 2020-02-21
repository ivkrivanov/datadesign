
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ProductDetail")]
    [BasedOnRow(typeof(Entities.ProductDetailRow), CheckNames = true)]
    public class ProductDetailForm
    {
        [EditLink, Width(200)]
        public Int32 WaresID { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Double Quantity { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Double ProductQuantity { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public decimal PlanPrice { get; set; }
        [Width(100)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Double Discount { get; set; }
    }
}