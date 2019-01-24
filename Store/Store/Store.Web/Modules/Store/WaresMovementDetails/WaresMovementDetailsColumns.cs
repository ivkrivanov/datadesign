
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.WaresMovementDetails")]
    [BasedOnRow(typeof(Entities.WaresMovementDetailsRow), CheckNames = true)]
    public class WaresMovementDetailsColumns
    {
        [EditLink, Width(200)]
        public String WaresName { get; set; }
        [Width(100)]
        public Single Quantity { get; set; }
        [Width(80)]
        public Decimal IncomePrice { get; set; }
        [Width(80)]
        public Decimal SalePrice { get; set; }
        [Width(80)]
        public Decimal SinglePrice { get; set; }
        [Width(80)]
        public Single Discount { get; set; }
        [Width(100)]
        public Decimal LineTotal { get; set; }

    }
}