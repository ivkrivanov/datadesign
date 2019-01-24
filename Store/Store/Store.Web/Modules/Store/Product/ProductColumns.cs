
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductID { get; set; }
        [EditLink, Width(250)]
        public String ProductName { get; set; }
        [QuickFilter]
        public Boolean Discontinued { get; set; }
        [EditLink(ItemType = "Store.Supplier"), QuickFilter]
        public String SupplierCompanyName { get; set; }

        [EditLink(ItemType = "Store.Category"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public String CategoryCategoryName { get; set; }
        [Width(80), AlignRight]
        public String QuantityPerUnit { get; set; }
        [Width(80), AlignRight]
        public Decimal UnitPrice { get; set; }
        [Width(80), AlignRight]
        public Int16 UnitsInStock { get; set; }
        [Width(80), AlignRight]
        public Int16 UnitsOnOrder { get; set; }
        [Width(80), AlignRight]
        public Int16 ReorderLevel { get; set; }
    }
}