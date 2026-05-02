
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ProductMovementDetails")]
    [BasedOnRow(typeof(Entities.ProductMovementDetailsRow), CheckNames = true)]
    public class ProductMovementDetailsForm
    {
        [EditLink, Width(200)]
        public Int32 ProductId { get; set; }
        [Width(100)]
        public Single Quantity { get; set; }
        [Width(100)]
        public Decimal SinglePrice { get; set; }
        [Width(100)]
        public Decimal Discount { get; set; }
        public Decimal RetailValue { get; set; }
        public Decimal VAT { get; set; }
        public Decimal TotalValue { get; set; }

    }
}