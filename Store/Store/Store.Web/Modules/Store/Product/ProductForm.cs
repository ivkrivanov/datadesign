
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Store.Product")]
    [BasedOnRow(typeof(Entities.ProductRow), CheckNames = true)]
    public class ProductForm
    {
        [Category("General")]
        public Int32 CategoryID { get; set; }
        public String ProductCode { get; set; }
        public String ProductBarcode { get; set; }
        public String ProductLabel { get; set; }
        public String ProductName { get; set; }
        public Int32 MeasureID { get; set; }
        public String ProductImage { get; set; }  
        public Boolean Discontinued { get; set; }
        public String CounterpartyID { get; set; }
        [Category("Pricing")]

        [HalfWidth]
        public String QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }

        [Category("Product Details")]
        [ProductDetailsEditor]
        public List<Entities.ProductDetailRow> DetailList { get; set; }

        [Category("Status")]
        [HalfWidth]
        public Int16 UnitsInStock { get; set; }
        [HalfWidth]
        public Int16 UnitsOnOrder { get; set; }
        [HalfWidth]
        public Int16 ReorderLevel { get; set; }
    }
}