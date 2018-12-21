
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ProductDetail")]
    [BasedOnRow(typeof(Entities.ProductDetailRow), CheckNames = true)]
    public class ProductDetailForm
    {
        //public Int32 ProductID { get; set; }
        public Int32 ItemID { get; set; }
        public Single Quantity { get; set; }
        public Single ProductQuantity { get; set; }
        public Single Reduction { get; set; }
        public Decimal PlanPrice { get; set; }

    }
}