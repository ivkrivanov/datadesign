
namespace CoreStore.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.Wares")]
    [BasedOnRow(typeof(Entities.WaresRow), CheckNames = true)]
    public class WaresColumns
    {
        [EditLink, Width(60), SortOrder(4), AlignCenter]
        public String WaresCode { get; set; }
        [EditLink, Width(60), AlignCenter]
        public String WaresBarcode { get; set; }
        [EditLink, Width(200)]
        public String WaresName { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String WaresLabel { get; set; }


        [QuickFilter]
        public Boolean Discontinued { get; set; }

        [EditLink(ItemType = "Store.Category"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public Int32 CategoryCategoryName { get; set; }
        [Width(60), AlignCenter]
        public String MeasureName { get; set; }
        [Width(80), AlignRight]
        public Decimal QuantityPerUnit { get; set; }
        [Width(80), AlignRight] //, DisplayFormat("#,##0.00")]
        public Decimal UnitPrice { get; set; }
        [Width(80), AlignRight]
        public Decimal UnitsInStock { get; set; }
        [Width(80), AlignRight]
        public Decimal UnitsOnOrder { get; set; }
        [Width(80), AlignRight]
        [EditLink(ItemType = "Store.Counterparty"), QuickFilter]
        public string CounterpartyId { get; set; }
        [Width(200)]
        public String CounterpartyCompanyName { get; set; }
        //[Width(100), AlignRight]
        //public Int32 AccountID { get; set; }
    }
}