
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
        [HalfWidth]
        public String ProductCode { get; set; }
        [HalfWidth]
        public Int32 CategoryID { get; set; }
        [HalfWidth]
        public String ProductBarcode { get; set; }
        [HalfWidth]
        public String ProductName { get; set; }
        [HalfWidth]
        public String ProductLabel { get; set; }

        [OneThirdWidth]
        public Int32 MeasureID { get; set; }
        [HalfWidth]
        public String CounterpartyID { get; set; }
        [OneThirdWidth]
        public Boolean Discontinued { get; set; }

        public String ProductImage { get; set; }   
        //public Int32 SupplierID { get; set; }


        [Category("Product Details")]
        [ProductDetailsEditor]
        public List<Entities.ProductDetailRow> DetailList { get; set; }

        [Category("Pricing")]

        [HalfWidth]
        public String QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }
        [Category("Status")]
        [HalfWidth]
        public Int16 UnitsInStock { get; set; }
        [HalfWidth]
        public Int16 UnitsOnOrder { get; set; }
        [HalfWidth]
        public Int16 ReorderLevel { get; set; }


    }
}