
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.ProductDetails")]
    [BasedOnRow(typeof(Entities.ProductDetailsRow), CheckNames = true)]
    public class ProductDetailsColumns
    {
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