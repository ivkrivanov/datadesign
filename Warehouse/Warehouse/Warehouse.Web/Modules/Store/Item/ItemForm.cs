
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.IO;

    [FormScript("Store.Item")]
    [BasedOnRow(typeof(Entities.ItemRow), CheckNames = true)]
    public class ItemForm
    {
        [Category("General")]
        public Int32 ItemCategoryID { get; set; }
        public String ItemCode { get; set; }
        public String ItemBarcode { get; set; }
        public String ItemLabel { get; set; }
        public String ItemName { get; set; }
        public Stream ItemImage { get; set; }
        public Int32 SupplierID { get; set; }

        [Category("Pricing")]
        public Int32 MeasureID { get; set; }
        public Int32 QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int32 AccountID { get; set; }
        
    }
}