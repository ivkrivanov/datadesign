
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.ProductDetail")]
    [BasedOnRow(typeof(Entities.ProductDetailRow), CheckNames = true)]
    public class ProductDetailColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 DetailID { get; set; }
        //public String ProductProductName { get; set; }
        [EditLink, Width(200)]
        public String WaresName { get; set; }
        [Width(100)]
        public Decimal PlanPrice { get; set; }
        [Width(100)]
        public Double Quantity { get; set; }
        [Width(100)]
        public Double ProductQuantity { get; set; }
        [Width(100)]
        public Double Discount { get; set; }
        //[Width(100)]
        //public Decimal LineTotal { get; set; }
    }
}