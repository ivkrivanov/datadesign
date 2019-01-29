
namespace Store.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.ProductMovement")]
    [BasedOnRow(typeof(Entities.ProductMovementRow), CheckNames = true)]
    public class ProductMovementForm
    {
        [Tab("General")]
        [Category("Order")]
        [HalfWidth]
        public ProductMovementOperations? OperationTypeOpCode { get; set; }
        [HalfWidth]
        public String CounterpartyID { get; set; }
        [HalfWidth]
        public String ShopID { get; set; }

        [DefaultValue("now")]
        [HalfWidth]
        public DateTime OrderDate { get; set; }
        [HalfWidth]
        public DateTime RequiredDate { get; set; }
        [HalfWidth]
        public DateTime ShippedDate { get; set; }

        [HalfWidth]
        public Int32 EmployeeID { get; set; }
        [HalfWidth]
        public Int32 ShipperID { get; set; }

        [Category("WaresMovementDetailsRow")]
        [ProductMovementDetailsEditor]
        public List<Entities.ProductMovementRow> DetailList { get; set; }

    }
}