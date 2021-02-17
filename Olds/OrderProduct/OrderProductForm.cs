
namespace Store.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.OrderProduct")]
    [BasedOnRow(typeof(Entities.OrderProductRow), CheckNames = true)]
    public class OrderProductForm
    {
        public Int32 OperationTypeId { get; set; }
        public String CounterpartyId { get; set; }
        public Int32 EmployeeId { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }
        public Int32 ShipVia { get; set; }
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