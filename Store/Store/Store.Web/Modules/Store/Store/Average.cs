
namespace Store.Store
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Data;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Drawing;
    public class StoreAverage
    {
        public Int32? Tenant { get; set; }

        public object GetData()
        {
            var data = new AverageData();
            var st = new DataTable();
            using (var connection = SqlConnections.NewByKey("Store"))
            //using (var connection = SqlConnections.NewFor<Entities.StoreRow>())
            {
                
                //using (var da = )



                //return connection.Query<Item>("sp_GetStore",
                //    param: new
                //    {
                //        TenantId = Tenant
                //    },
                //    commandType: System.Data.CommandType.StoredProcedure);
                var s = StoreRow.Fields;
                data.StoreList = connection.List<StoreRow>(q => q
                    .SelectTableFields()
                    .Where(s.TenantId == (int)this.Tenant)
                    .OrderBy(s.ShopId, s.Key, s.Date, s.OperationId, s.MoveId));

                return data;
            } 
        }

        public void StoresAverage()
        {

        }

        //public List<>

        [BasedOnRow(typeof(StoreRow), CheckNames = true)]
        public class Item
        {
            public Int64 Position { get; set; }
            public Boolean WaresMode { get; set; }
            public Int32 MoveId { get; set; }
            public Int32 ShopId { get; set; }
            public Int32 WaresId { get; set; }
            public string Key { get; set; }
            public DateTime Date { get; set; }
            public Int32 OperationId { get; set; }
            public decimal IncomeQuantity { get; set; }
            public decimal IncomeSinglePrice { get; set; }
            public decimal IncomeValue { get; set; }
            public decimal AIncomeSinglePrice { get; set; }
            public decimal AIncomeValue { get; set; }
            public decimal ExpenceQuantity { get; set; }
            public decimal ExpenceValue { get; set; }
            public decimal AExpenceSinglePrice { get; set; }
            public decimal AExpenceValue { get; set; }
            public decimal RestQuantity { get; set; }
            public decimal RestSinglePrice { get; set; }
            public decimal RestValue { get; set; }
            public decimal ARestQuantity { get; set; }
            public decimal ARestSinglePrice { get; set; }
            public decimal ARestValue { get; set; }
            public decimal ReCost { get; set; }
            public decimal AReCost { get; set; }
            public Boolean Mistake { get; set; }
            public Boolean AMistake { get; set; }
        }

        public class AverageData
        {
            //public StoreRow Store { get; set; }
            public List<StoreRow> StoreList { get; set; }
        }
    }
}