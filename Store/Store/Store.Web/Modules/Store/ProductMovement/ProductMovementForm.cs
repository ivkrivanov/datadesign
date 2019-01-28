
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
        public String ShopID { get; set; }
        public String CounterpartyID { get; set; }
        public Int32 EmployeeID { get; set; }
        public Int32 ShipperID { get; set; }
        public Int32 OperationTypeID { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime RequiredDate { get; set; }
        public DateTime ShippedDate { get; set; }

    }
}