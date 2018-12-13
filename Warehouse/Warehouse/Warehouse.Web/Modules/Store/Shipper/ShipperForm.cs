
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.Shipper")]
    [BasedOnRow(typeof(Entities.ShipperRow), CheckNames = true)]
    public class ShipperForm
    {
        public String CompanyName { get; set; }
        [Store.PhoneEditor]
        public String Phone { get; set; }
    }
}