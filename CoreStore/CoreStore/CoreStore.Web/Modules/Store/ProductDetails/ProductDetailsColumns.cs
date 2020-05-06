
namespace CoreStore.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.ProductDetails")]
    [BasedOnRow(typeof(Entities.ProductDetailsRow), CheckNames = true)]
    public class ProductDetailsColumns
    {
        public String ProductProductCode { get; set; }
        public String WaresWaresCode { get; set; }
        public Decimal PlanPrice { get; set; }
        public Single Quantity { get; set; }
        public Double ProductQuantity { get; set; }
        public Single Discount { get; set; }
        public Int32 IsActive { get; set; }
        public Int32 TenantId { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DetailId { get; set; }
    }
}