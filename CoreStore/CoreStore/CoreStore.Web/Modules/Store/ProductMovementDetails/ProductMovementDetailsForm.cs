
namespace CoreStore.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ProductMovementDetails")]
    [BasedOnRow(typeof(Entities.ProductMovementDetailsRow), CheckNames = true)]
    public class ProductMovementDetailsForm
    {
        public Int32 ProductId { get; set; }
        public Single Quantity { get; set; }
        public Decimal SinglePrice { get; set; }
        public Decimal Discount { get; set; }
    }
}