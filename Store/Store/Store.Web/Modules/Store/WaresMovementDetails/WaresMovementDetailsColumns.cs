
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.WaresMovementDetails")]
    [BasedOnRow(typeof(Entities.WaresMovementDetailsRow), CheckNames = true)]
    public class WaresMovementDetailsColumns
    {
        [EditLink, Width(60), AlignRight]
        public String WaresCode { get; set; }
        [EditLink, Width(160)]
        public String WaresName { get; set; }
        [Width(100), AlignRight]
        public Single Quantity { get; set; }
        [Width(80), AlignRight]
        public Decimal IncomePrice { get; set; }
        [Width(80), AlignRight]
        public Decimal SalePrice { get; set; }
        [Width(80), AlignRight]
        public Decimal SinglePrice { get; set; }
        [Width(80), AlignRight]
        public Single Discount { get; set; }
        [Width(100), AlignRight]
        public Decimal LineTotal { get; set; }

    }
}