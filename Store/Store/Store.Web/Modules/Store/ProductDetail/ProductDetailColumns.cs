
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
        [Width(80)]
        public String WaresCode { get; set; }
        [EditLink, Width(150)]
        public String WaresName { get; set; }
        [Width(80)]
        public Decimal PlanPrice { get; set; }
        [Width(80)]
        public Double Quantity { get; set; }
        [Width(80)]
        public Double ProductQuantity { get; set; }
        [Width(80)]
        public Double Discount { get; set; }
        [Width(80)]
        public Decimal LineTotal { get; set; }
    }
}