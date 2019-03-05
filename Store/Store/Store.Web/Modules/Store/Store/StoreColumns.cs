
namespace Store.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.Store")]
    [BasedOnRow(typeof(Entities.StoreRow), CheckNames = true)]
    public class StoreColumns
    {
        public Int64 Position { get; set; }
        public Boolean WaresMode { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MoveID { get; set; }
        public Int32 ShopID { get; set; }
        public Int32 WaresID { get; set; }
        [EditLink]
        public String Key { get; set; }
        public DateTime Date { get; set; }
        public Int32 OperationID { get; set; }
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
        //public DateTime InsertDate { get; set; }
        //public Int32 InsertUserId { get; set; }
        //public DateTime UpdateDate { get; set; }
        //public Int32 UpdateUserId { get; set; }
        //public Int32 IsActive { get; set; }
        //public Int32 TenantId { get; set; }
    }
}