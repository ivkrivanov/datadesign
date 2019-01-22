﻿
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Wares")]
    [BasedOnRow(typeof(Entities.WaresRow), CheckNames = true)]
    public class WaresColumns
    {
        [EditLink, Width(60), AlignCenter]
        public String WaresCode { get; set; }
        [EditLink, Width(60), AlignCenter]
        public String WaresBarcode { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String WaresLabel { get; set; }
        [EditLink, Width(100)]
        public String WaresName { get; set; }
        [QuickFilter]
        public Boolean Discontinued { get; set; }

        //[EditLink(ItemType = "Store.Supplier"), QuickFilter]
        //public String SupplierCompanyName { get; set; }

        [EditLink, Width(200), QuickFilter]
        public String CounterpartyCompanyName { get; set; }


        [EditLink(ItemType = "Store.Category"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public Int32 CategoryName { get; set; }
        [Width(60), AlignCenter]
        public String MeasureMeasureName { get; set; }
        [Width(80), AlignRight]
        public Int32 QuantityPerUnit { get; set; }
        [Width(80), AlignRight]
        public Decimal UnitPrice { get; set; }
        [Width(100), AlignRight]
        public Int32 AccountID { get; set; }

    }
}