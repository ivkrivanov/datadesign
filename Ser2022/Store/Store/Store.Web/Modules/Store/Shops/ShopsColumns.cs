
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.Shops")]
    [BasedOnRow(typeof(Entities.ShopsRow), CheckNames = true)]
    public class ShopsColumns
    {
        [EditLink]
        public String ShopId { get; set; }
        [EditLink, Width(250)]
        public String ShopName { get; set; }
        [Width(150)]
        public String ContactName { get; set; }
        [Width(150)]
        public String ContactTitle { get; set; }
        [Width(120)]
        public String Phone { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Scripts.ShopsCountryLookup))]
        public String Country { get; set; }
        [Width(130), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Scripts.ShopsCityLookup)), QuickFilterOption("CascadeFrom", "Country")]
        public String City { get; set; }
    }
}