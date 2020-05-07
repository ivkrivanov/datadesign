
namespace CoreStore.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsColumns
    {
        [EditLink, Width(60), SortOrder(4), AlignCenter]
        public String ProductCode { get; set; }
        [EditLink, Width(60), AlignCenter]
        public String ProductBarcode { get; set; }
        [EditLink, Width(250)]
        public String ProductName { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String ProductLabel { get; set; }

        [QuickFilter]
        public Boolean Discontinued { get; set; }

        //[EditLink(ItemType = "Store.Supplier"), QuickFilter]
        //public String SupplierCompanyName { get; set; }

        [EditLink(ItemType = "Store.Category"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public String CategoryCategoryName { get; set; }
        [Width(60), AlignCenter]
        public String MeasureMeasureName { get; set; }
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
        [Width(80), AlignRight]
        [EditLink(ItemType = "Store.Counterparty"), QuickFilter]
        public String CounterpartyId { get; set; }
        [Width(200)]
        public String CounterpartyCompanyName { get; set; }
    }
}