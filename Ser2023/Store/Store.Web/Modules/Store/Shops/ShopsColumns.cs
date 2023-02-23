
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [ColumnsScript("Store.Shops")]
    [BasedOnRow(typeof(Entities.ShopsRow), CheckNames = true)]
    public class ShopsColumns
    {
        [EditLink]
        public string ShopId { get; set; }
        public string ShopName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string Address { get; set; }

        [Width(130), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Scripts.ShopsCityLookup)), QuickFilterOption("CascadeFrom", "Country")]
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }

        [Width(100), QuickFilter(CssClass = "hidden-xs")]
        [LookupEditor(typeof(Scripts.ShopsCountryLookup))]
        public string Country { get; set; }
        public string Phone { get; set; }

    }
}