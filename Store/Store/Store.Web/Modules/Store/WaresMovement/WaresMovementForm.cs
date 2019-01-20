
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
        public String OperationTypeID { get; set; }
        public String CounterpartyID { get; set; }
        public String ShopID { get; set; }

        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public Int32 EmployeeID { get; set; }

        [Category("WaresMovementDetailsRow")]
        [WaresMovementDetailsEditor]
        public List<Entities.WaresMovementDetailsRow> DetailList { get; set; }
        public Int32 ShipperID { get; set; }

        public DateTime ShippedDate { get; set; }
 
    }
}