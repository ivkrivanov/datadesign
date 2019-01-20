
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.WaresMovementDetails")]
    [BasedOnRow(typeof(Entities.WaresMovementDetailsRow), CheckNames = true)]
    public class WaresMovementDetailsColumns
    {
        [EditLink, Width(200)]
        public String WaresWaresName { get; set; }
        [Width(100)]
        public Single Quantity { get; set; }
        [Width(100)]
        public Decimal IncomePrice { get; set; }
        [Width(100)]
        public Decimal SalePrice { get; set; }
        [Width(100)]
        public Decimal SinglePrice { get; set; }
        [Width(100)]
        public Single Discount { get; set; }

    }
}