
namespace CoreStore.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ProductDetails")]
    [BasedOnRow(typeof(Entities.ProductDetailsRow), CheckNames = true)]
    public class ProductDetailsForm
    {
        [EditLink, Width(200)]
        public Int32 WaresId { get; set; }
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