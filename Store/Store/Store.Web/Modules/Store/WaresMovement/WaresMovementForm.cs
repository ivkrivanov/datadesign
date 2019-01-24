
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
        [OneThirdWidth]
        public String OperationTypeID { get; set; }
        [OneThirdWidth]
        public String CounterpartyID { get; set; }
        [OneThirdWidth]
        public String ShopID { get; set; }

        [DefaultValue("now")]
        [OneThirdWidth]
        public DateTime OrderDate { get; set; }
        [OneThirdWidth]
        public DateTime RequiredDate { get; set; }
        [OneThirdWidth]
        public DateTime ShippedDate { get; set; }
        [OneThirdWidth]
        public Int32 EmployeeID { get; set; }
        [OneThirdWidth]
        public Int32 ShipperID { get; set; }

        [Category("WaresMovementDetailsRow")]
        [WaresMovementDetailsEditor]
        public List<Entities.WaresMovementDetailsRow> DetailList { get; set; }
    }
}