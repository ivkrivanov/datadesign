
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Store.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        [Category("General")]
        [HalfWidth]
        public Int32 CategoryId { get; set; }
        [HalfWidth]
        public String ProductName { get; set; }
        [HalfWidth]
        public String ProductCode { get; set; }
        [HalfWidth]
        public String ProductBarcode { get; set; }
        [HalfWidth]
        public String ProductLabel { get; set; }
        [HalfWidth]
        public Int32 MeasureId { get; set; }
        public String ProductImage { get; set; }
        public Boolean Discontinued { get; set; }

        [Category("Pricing")]

        [HalfWidth]
        public Decimal UnitPrice { get; set; }
        [HalfWidth]
        public String QuantityPerUnit { get; set; }


        [Category("Product Details")]
        [ProductDetailsEditor]
        public List<Entities.ProductDetailsRow> DetailList { get; set; }

        [Category("Status")]
        [HalfWidth]
        public Int16 UnitsInStock { get; set; }
        [HalfWidth]
        public Int16 UnitsOnOrder { get; set; }
        [HalfWidth]
        public Int16 ReorderLevel { get; set; }
    }
}