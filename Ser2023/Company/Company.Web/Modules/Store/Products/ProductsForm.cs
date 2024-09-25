using Serenity.ComponentModel;
using Serenity.Web;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store.Forms;

[FormScript("Store.Products")]
[BasedOnRow(typeof(ProductsRow), CheckNames = true)]
public class ProductsForm
{
    [Category("General")]
    [OneThirdWidth]
    public Int32 CategoryId { get; set; }
    [OneThirdWidth]
    public String ProductName { get; set; }
    [OneThirdWidth]
    public String ProductLabel { get; set; }
    [OneThirdWidth]
    public String ProductCode { get; set; }
    [OneThirdWidth]
    public String ProductBarcode { get; set; }
    [OneThirdWidth]
    public Int32 MeasureId { get; set; }
    public String ProductImage { get; set; }
    public Boolean Discontinued { get; set; }

    [Category("Pricing")]

    [OneThirdWidth]
    public Decimal UnitPrice { get; set; }
    [OneThirdWidth]
    public Decimal SalePrice { get; set; }
    [OneThirdWidth]
    public String QuantityPerUnit { get; set; }


    [Category("Product Details")]
    [ProductDetailsEditor]
    public List<ProductDetailsRow> DetailList { get; set; }

    [Category("Status")]
    [OneThirdWidth]
    public Int16 UnitsInStock { get; set; }
    [OneThirdWidth]
    public Int16 UnitsOnOrder { get; set; }
    [OneThirdWidth]
    public Int16 ReorderLevel { get; set; }
}