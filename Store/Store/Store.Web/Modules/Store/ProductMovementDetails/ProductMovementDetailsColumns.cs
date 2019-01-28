
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.ProductMovementDetails")]
    [BasedOnRow(typeof(Entities.ProductMovementDetailsRow), CheckNames = true)]
    public class ProductMovementDetailsColumns
    {
        [EditLink, Width(200)]
        public String ProductName { get; set; }
        [Width(100)]
        public Single Quantity { get; set; }
        [Width(100)]
        public Decimal SalePrice { get; set; }
        [Width(80)]
        public Single Discount { get; set; }
        [Width(100)]
        public Decimal LineTotal { get; set; }
    }
}