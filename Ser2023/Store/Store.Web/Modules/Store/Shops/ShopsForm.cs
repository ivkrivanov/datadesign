using Serenity.ComponentModel;
using Serenity.Web;
using System.ComponentModel;

namespace Store.Store.Forms
{
    [FormScript("Store.Shops")]
    [BasedOnRow(typeof(Entities.ShopsRow), CheckNames = true)]
    public class ShopsForm
    {
        [Category("General")]
        public string ShopId { get; set; }
        public string ShopName { get; set; }

        [Category("Contact")]
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }

        [Category("Address")]
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }

    }
}