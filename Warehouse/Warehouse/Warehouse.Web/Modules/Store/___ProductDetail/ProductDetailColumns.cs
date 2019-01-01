
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.ProductDetail")]
    [BasedOnRow(typeof(Entities.ProductDetailRow), CheckNames = true)]
    public class ProductDetailColumns
    {
        [EditLink, Width(200)]
        public String ItemItemName { get; set; }
        [Width(100)]
        public Decimal ItemUnitPrice { set; get; }
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