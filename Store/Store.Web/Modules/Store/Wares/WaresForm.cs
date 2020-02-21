
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Store.Wares")]
    [BasedOnRow(typeof(Entities.WaresRow), CheckNames = true)]
    public class WaresForm
    {
        [Category("General")]
        public Int32 CategoryID { get; set; }
        public String WaresCode { get; set; }
        public String WaresBarcode { get; set; }
        public String WaresLabel { get; set; }
        public String WaresName { get; set; }
        public Int32 MeasureID { get; set; }
        public String WaresImage { get; set; }
        public Boolean Discontinued { get; set; }
        public String CounterpartyID { get; set; }
        //public Int32 SupplierID { get; set; }


        [Category("Pricing")]
        public Int32 QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }

        public Int32 AccountID { get; set; }
    }
}