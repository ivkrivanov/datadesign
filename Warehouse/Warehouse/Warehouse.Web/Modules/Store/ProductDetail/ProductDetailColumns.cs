
namespace Warehouse.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.ProductDetail")]
    [BasedOnRow(typeof(Entities.ProductDetailRow), CheckNames = true)]
    public class ProductDetailColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 DetailId { get; set; }
        [EditLink, Width(100)]
        public String ItemItemCode { get; set; }
        [EditLink, Width(200)]
        public String ItemItemName { get; set; }
        [Width(100)]
        public Single Quantity { get; set; }
        [Width(100)]
        public Single ProductQuantity { get; set; }
        [Width(100)]
        public Single Reduction { get; set; }
        [Width(100)]
        public Decimal PlanPrice { get; set; }
    }
}