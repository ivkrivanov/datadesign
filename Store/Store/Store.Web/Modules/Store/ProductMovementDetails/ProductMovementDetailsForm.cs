
namespace Store.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.ProductMovementDetails")]
    [BasedOnRow(typeof(Entities.ProductMovementDetailsRow), CheckNames = true)]
    public class ProductMovementDetailsForm
    {
        public Int32 ProductID { get; set; }
        public Single Quantity { get; set; }
        public Decimal SalePrice { get; set; }
        public Single Discount { get; set; }
        public Int32 DetailID { get; set; }
    }
}