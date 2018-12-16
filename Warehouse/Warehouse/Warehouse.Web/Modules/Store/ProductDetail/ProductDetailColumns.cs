﻿
namespace Warehouse.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.ProductDetail")]
    [BasedOnRow(typeof(Entities.ProductDetailRow), CheckNames = true)]
    public class ProductDetailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 DetailId { get; set; }
        public Int32 ProductId { get; set; }
        public Single Quantity { get; set; }
        public Single ProductQuantity { get; set; }
        public Single Reduction { get; set; }
        public Decimal PlanPrice { get; set; }
        public DateTime InsertDate { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime UpdateDate { get; set; }
        public Int32 UpdateUserId { get; set; }
        public Int16 IsActive { get; set; }
        public Int32 TenantId { get; set; }
    }
}