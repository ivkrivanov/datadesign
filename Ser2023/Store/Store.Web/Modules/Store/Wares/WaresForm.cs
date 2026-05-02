using Serenity.ComponentModel;
using Serenity.Web;
using System;
using System.ComponentModel;

namespace Store.Store.Forms
{
    [FormScript("Store.Wares")]
    [BasedOnRow(typeof(Entities.WaresRow), CheckNames = true)]
    public class WaresForm
    {
        [Category("General")]
        public Int32 CategoryId { get; set; }
        public String WaresCode { get; set; }
        public String WaresBarcode { get; set; }
        public String WaresLabel { get; set; }
        public String WaresName { get; set; }
        public Int32 MeasureId { get; set; }
        public String WaresImage { get; set; }
        public Boolean Discontinued { get; set; }
        public String CounterpartyId { get; set; }

        [Category("Pricing")]
        public Decimal QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }

        public Int32 AccountId { get; set; }
    }
}