
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Item")]
    [BasedOnRow(typeof(Entities.ItemRow), CheckNames = true)]
    public class ItemColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ItemID { get; set; }
        [EditLink, Width(60), AlignCenter]
        public String ItemCode { get; set; }
        [EditLink, Width(60), AlignCenter]
        public String ItemBarcode { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String ItemLabel { get; set; }
        [EditLink, Width(100)]
        public String ItemName { get; set; }
        [QuickFilter]
        public Boolean Discontinued { get; set; }
        //public String ItemImage { get; set; }
        //public String SupplierCompanyName { get; set; }
        [EditLink(ItemType = "Store.ItemCategory"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public String ItemCategoryItemCategoryName { get; set; }
        [Width(60)]
        public String MeasureMeasureName { get; set; }
        [Width(80), AlignRight]
        public Int32 QuantityPerUnit { get; set; }
        [Width(80), AlignRight]
        public Decimal UnitPrice { get; set; }
        [Width(100), AlignRight]
        public Int32 AccountID { get; set; }

    }
}