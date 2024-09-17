
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [ColumnsScript("Store.Shops")]
    [BasedOnRow(typeof(Entities.ShopsRow), CheckNames = true)]
    public class ShopsColumns
    {
        [EditLink, Width(80)]
        public string ShopId { get; set; }
        [EditLink, Width(250)]
        public string ShopName { get; set; }
        [Width(150)]
        public string ContactName { get; set; }
        [Width(150)]
        public string ContactTitle { get; set; }
        [Width(120)]
        public string Phone { get; set; }
        [Width(100), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Lookups.ShopsCountryLookup))]
        public string Country { get; set; }
        [Width(130), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Lookups.ShopsCityLookup)), QuickFilterOption("CascadeFrom", "Country")]
        public string City { get; set; }

        public string Address { get; set; }
        [Width(120)]
        public string Region { get; set; }
        [Width(100)]
        public string PostalCode { get; set; }




    }
}