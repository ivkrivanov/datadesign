
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
        [EditLink]
        public String ItemCode { get; set; }
        public String ItemBarcode { get; set; }
        public String ItemLabel { get; set; }
        public String ItemName { get; set; }
        public Stream ItemImage { get; set; }
        [EditLink(ItemType = "Store.Category"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public String CategoryName { get; set; }
        public String SupplierCompanyName { get; set; }
        public Int32 CategoryID { get; set; }
        public Int32 MeasureID { get; set; }
        public Int32 QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int32 AccountID { get; set; }
    }
}