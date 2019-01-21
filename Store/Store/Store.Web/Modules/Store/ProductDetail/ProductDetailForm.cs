
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
        public Double Quantity { get; set; }
        [Width(100)]
        public Double ProductQuantity { get; set; }
        [Width(100)]
        public Double Discount { get; set; }
        //[Width(100)]
        //public Decimal PlanPrice { get; set; }

    }
}