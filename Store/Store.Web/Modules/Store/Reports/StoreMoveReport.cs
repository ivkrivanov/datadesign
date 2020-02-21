
namespace Store.Store
{
    using global::Store.Store.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Drawing;

    [Report, RequiredPermission(StorePermissionKeys.General)]
    [Category("Store/Store"), DisplayName("Warehause")]
    public class StoreMoveReport : IReport, IDataOnlyReport
    {
        [DisplayName("Start Date")]
        public DateTime? StartDate { get; set; }

        [DisplayName("End Date")]
        public DateTime? EndDate { get; set; }

        [DisplayName("Object")]
        public int? Object { get; set; }

        public Object GetData()
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            int tn = user.TenantId;

            using (var connection = SqlConnections.NewFor<StoreMoveRow>())
            {
                return connection.Query<Item>("usp_StoreMove",
                    param: new
                    {
                        dateFrom = StartDate,
                        dateTill = EndDate,
                        shopid = Object,
                        Tenant = tn
                    },
                    commandType: System.Data.CommandType.StoredProcedure);
            }
        }

        public List<ReportColumn> GetColumnList()
        {
            return ReportColumnConverter.ObjectTypeToList(typeof(Item));
        }

        [BasedOnRow(typeof(StoreMoveRow), CheckNames = true)]
        public class Item
        {
            public int? WaresID { get; set; }
            public int? ShopID { get; set; }
            public string WaresCode { get; set; }
            public String WaresName { get; set; }

            public Decimal InitialQuantity
            {
                get
                {
                    return (RestQuantity - IncomeQuantity + ExpenceQuantity);
                }
                set { }
            }
            public Decimal InitialSinglePrice
            {
                get
                {
                    if (InitialQuantity != 0)
                        return InitialValue / InitialQuantity;
                    else
                        return 0;
                }
                set { }
            }
            public Decimal InitialValue
            {
                get
                {
                    return (RestValue - IncomeValue + ExpenceValue);
                }
                set { }
            }

            public Decimal IncomeQuantity { get; set; }
            public Decimal IncomeSinglePrice
            {
                get
                {
                    if (IncomeQuantity != 0)
                        return IncomeValue / IncomeQuantity;
                    else
                    {
                        return 0;
                    }
                }
                set { }
            }
            public Decimal IncomeValue { get; set; }

            public Decimal ExpenceQuantity { get; set; }
            public Decimal ExpenceSinglePrice
            {
                get
                {
                    if (ExpenceQuantity != 0)
                        return ExpenceValue / ExpenceQuantity;
                    else
                    {
                        return 0;
                    }
                }
                set { }
            }
            public Decimal ExpenceValue { get; set; }

            public Decimal RestQuantity { get; set; }
            public Decimal RestSinglePrice
            {
                get
                {
                    if (RestQuantity != 0)
                        return RestValue / RestQuantity;
                    else
                    {
                        return 0;
                    }
                }
                set { }
            }
            public Decimal RestValue { get; set; }
            public Decimal ReCost { get; set; }
            public Boolean Mistake { get; set; }
        }
    }
}