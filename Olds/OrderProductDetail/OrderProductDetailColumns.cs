
namespace Store.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.OrderProductDetail")]
    [BasedOnRow(typeof(Entities.OrderProductDetailRow), CheckNames = true)]
    public class OrderProductDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DetailId { get; set; }
        public Int32 OrderProductsId { get; set; }
        public String ProductProductName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int16 Quantity { get; set; }
        public Single Discount { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int32 IsActive { get; set; }
        public Int32 TenantId { get; set; }
    }
}