
namespace Warehouse.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ColumnsScript("Store.Item")]
    [BasedOnRow(typeof(Entities.ItemRow), CheckNames = true)]
    public class ItemColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemID { get; set; }
        [EditLink, Width(100)]
        public String ItemCode { get; set; }
        [EditLink, Width(100)]
        public String ItemBarcode { get; set; }
        [EditLink, Width(250)]
        public String ItemLabel { get; set; }
        [EditLink, Width(250)]
        public String ItemName { get; set; }
        [QuickFilter]
        public Boolean Discontinued { get; set; }
        [EditLink(ItemType = "Store.ItemCategory"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public String ItemCategoryName { get; set; }

        public Int32 MeasureID { get; set; }
        [Width(80), AlignRight]
        public Int32 QuantityPerUnit { get; set; }
        [Width(80), AlignRight]
        public Decimal UnitPrice { get; set; }
    }
}