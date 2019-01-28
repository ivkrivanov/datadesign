
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ProductMovementDetails")]
    [BasedOnRow(typeof(Entities.ProductMovementDetailsRow), CheckNames = true)]
    public class ProductMovementDetailsForm
    {
        public Int32 ProductID { get; set; }
        public Single Quantity { get; set; }
        public Decimal SalePrice { get; set; }
        public Single Discount { get; set; }
    }
}