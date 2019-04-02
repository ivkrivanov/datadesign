
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.StoreMove")]
    [BasedOnRow(typeof(Entities.StoreMoveRow), CheckNames = true)]
    public class StoreMoveColumns
    {
        public Int32 ShopID { get; set; }
        public Int32 WaresID { get; set; }
        public String Key { get; set; }

        public Decimal IncomeQuantity { get; set; }
        public Decimal IncomeSinglePrice { get; set; }
        public Decimal IncomeValue { get; set; }


        public Decimal ExpenceQuantity { get; set; }
        public Decimal ExpenceSinglePrice { get; set; }
        public Decimal ExpenceValue { get; set; }


        public Decimal RestQuantity { get; set; }
        public Decimal RestSinglePrice { get; set; }
        public Decimal RestValue { get; set; }

        public Decimal ReCost { get; set; }
        public Boolean Mistake { get; set; }
    }
}