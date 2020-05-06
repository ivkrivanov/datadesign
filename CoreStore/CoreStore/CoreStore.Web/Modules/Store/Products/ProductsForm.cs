
namespace CoreStore.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsForm
    {
        public String ProductCode { get; set; }
        public String ProductBarcode { get; set; }
        public String ProductLabel { get; set; }
        public String ProductName { get; set; }
        public String ProductImage { get; set; }
        public Int32 SupplierId { get; set; }
        public String CounterpartyId { get; set; }
        public Int32 CategoryId { get; set; }
        public Int32 MeasureId { get; set; }
        public String QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int16 UnitsInStock { get; set; }
        public Int16 UnitsOnOrder { get; set; }
        public Int16 ReorderLevel { get; set; }
        public Boolean Discontinued { get; set; }
        public Int32 IsActive { get; set; }
        public Int32 TenantId { get; set; }
    }
}