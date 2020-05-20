
namespace CoreStore.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Warehouse")]
    [BasedOnRow(typeof(Entities.WarehouseRow), CheckNames = true)]
    public class WarehouseColumns
    {
        public Int64 Position { get; set; }
        public Boolean WaresMode { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MoveId { get; set; }
        public Int32 ShopId { get; set; }
        public Int32 WaresId { get; set; }
        [EditLink]
        public String Key { get; set; }
        public DateTime Date { get; set; }
        public Int32 OperationId { get; set; }
        public Decimal IncomeQuantity { get; set; }
        public Decimal IncomeSinglePrice { get; set; }
        public Decimal IncomeValue { get; set; }
        //public Decimal AIncomeSinglePrice { get; set; }
        //public Decimal AIncomeValue { get; set; }
        public Decimal ExpenceQuantity { get; set; }
        public Decimal ExpenceSinglePrice { get; set; }
        public Decimal ExpenceValue { get; set; }
        //public Decimal AExpenceSinglePrice { get; set; }
        //public Decimal AExpenceValue { get; set; }
        public Decimal RestQuantity { get; set; }
        public Decimal RestSinglePrice { get; set; }
        public Decimal RestValue { get; set; }
        //public Decimal ARestQuantity { get; set; }
        //public Decimal ARestSinglePrice { get; set; }
        //public Decimal ARestValue { get; set; }
        public Decimal ReCost { get; set; }
        //public Decimal AReCost { get; set; }
        public Boolean Mistake { get; set; }
        //public Boolean AMistake { get; set; }
    }
}