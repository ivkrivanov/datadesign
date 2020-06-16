
namespace Store.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.OrderProduct")]
    [BasedOnRow(typeof(Entities.OrderProductRow), CheckNames = true)]
    public class OrderProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 OrderProductId { get; set; }
        public String OperationTypeOperation { get; set; }
        [EditLink]
        public String CounterpartyCompanyName { get; set; }
        public String EmployeeLastName { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }
        public String ShipViaCompanyName { get; set; }
        public Decimal Freight { get; set; }
        public String ShipName { get; set; }
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        public String ShipRegion { get; set; }
        public String ShipPostalCode { get; set; }
        public String ShipCountry { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int32 IsActive { get; set; }
        public Int32 TenantId { get; set; }
    }
}