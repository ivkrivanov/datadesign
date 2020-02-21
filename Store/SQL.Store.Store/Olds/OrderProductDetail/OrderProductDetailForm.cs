
namespace Store.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.OrderProductDetail")]
    [BasedOnRow(typeof(Entities.OrderProductDetailRow), CheckNames = true)]
    public class OrderProductDetailForm
    {
        public Int32 OrderProductsId { get; set; }
        public Int32 ProductId { get; set; }
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