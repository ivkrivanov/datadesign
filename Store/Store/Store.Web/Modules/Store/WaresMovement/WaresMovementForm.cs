
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Store.WaresMovement")]
    [BasedOnRow(typeof(Entities.WaresMovementRow), CheckNames = true)]
    public class WaresMovementForm
    {
        [Tab("General")]
        [Category("Order")]
        [HalfWidth]
        public WaresMovementOperations? OperationTypeOpCode { get; set; }
        [DefaultValue("now")]
        [HalfWidth]
        public DateTime OrderDate { get; set; }
        [HalfWidth]
        public String ShopID { get; set; }
        [HalfWidth]
        public String CounterpartyID { get; set; }
        [HalfWidth]
        public Int32 EmployeeID { get; set; }
        [HalfWidth]
        public DateTime RequiredDate { get; set; }
        [HalfWidth]
        public Int32 ShipperID { get; set; }
        [HalfWidth]
        public DateTime ShippedDate { get; set; }

        [Category("WaresMovementDetailsRow")]
        [WaresMovementDetailsEditor]
        public List<Entities.WaresMovementDetailsRow> DetailList { get; set; }
    }
}