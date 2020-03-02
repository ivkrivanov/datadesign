
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Shops")]
    [BasedOnRow(typeof(Entities.ShopsRow), CheckNames = true)]
    public class ShopsColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 ID { get; set; }
        [EditLink]
        public String ShopID { get; set; }
        [EditLink, Width(250)]
        public String ShopName { get; set; }
        [Width(150)]
        public String ContactName { get; set; }
        [Width(150)]
        public String ContactTitle { get; set; }
        [Width(120)]
        public String Phone { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Lookups.ShopsCountryLookup))]
        public String Country { get; set; }
        [Width(130), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Lookups.ShopsCityLookup)), QuickFilterOption("CascadeFrom", "Country")]
        public String City { get; set; }
    }
}