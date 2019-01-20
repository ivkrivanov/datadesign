
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Store.Item")]
    [BasedOnRow(typeof(Entities.ItemRow), CheckNames = true)]
    public class ItemForm
    {
        [Category("General")]
        public Int32 CategoryID { get; set; }
        public String ItemCode { get; set; }
        public String ItemBarcode { get; set; }
        public String ItemLabel { get; set; }
        public String ItemName { get; set; }
        public String ItemImage { get; set; }
        public Int32 SupplierID { get; set; }
        public Int32 MeasureID { get; set; }

        [Category("Pricing")]
        public Int32 QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }
        public Boolean Discontinued { get; set; }
        public Int32 AccountID { get; set; }

    }
}