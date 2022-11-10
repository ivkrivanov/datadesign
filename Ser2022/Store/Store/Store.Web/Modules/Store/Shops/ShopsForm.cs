
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Store.Shops")]
    [BasedOnRow(typeof(Entities.ShopsRow), CheckNames = true)]
    public class ShopsForm
    {
        [Category("General")]
        public String ShopId { get; set; }
        public String ShopName { get; set; }
        [Category("Contact")]
        public String ContactName { get; set; }
        public String ContactTitle { get; set; }

        [Category("Address")]
        public String Address { get; set; }
        [HalfWidth]
        public String Country { get; set; }
        [HalfWidth]
        public String City { get; set; }
        [HalfWidth]
        public String Region { get; set; }
        [HalfWidth]
        public String PostalCode { get; set; }
        [HalfWidth, PhoneEditor]
        public String Phone { get; set; }
    }
}