
namespace CoreStore.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.ProductDetails")]
    [BasedOnRow(typeof(Entities.ProductDetailsRow), CheckNames = true)]
    public class ProductDetailsForm
    {
        public Int32 ProductId { get; set; }
        public Int32 WaresId { get; set; }
        public Decimal PlanPrice { get; set; }
        public Single Quantity { get; set; }
        public Double ProductQuantity { get; set; }
        public Single Discount { get; set; }
        public Int32 IsActive { get; set; }
        public Int32 TenantId { get; set; }
    }
}