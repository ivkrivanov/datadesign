
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.ProductMovementDetails")]
    [BasedOnRow(typeof(Entities.ProductMovementDetailsRow), CheckNames = true)]
    public class ProductMovementDetailsColumns
    {
        [EditLink, Width(60), AlignRight]
        public String ProductCode { get; set; }
        [EditLink, Width(160)]
        public String ProductName { get; set; }
        [Width(100)]
        public Single Quantity { get; set; }
        [Width(100)]
        public Decimal SinglePrice { get; set; }
        [Width(80)]
        public Single Discount { get; set; }
        [Width(100)]
        public Decimal RetailValue { get; set; }
        [Width(100)]
        public Decimal VAT { get; set; }
        [Width(100)]
        public Decimal TotalValue { get; set; }
    }
}