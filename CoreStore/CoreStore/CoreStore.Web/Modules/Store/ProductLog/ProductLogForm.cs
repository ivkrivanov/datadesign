
namespace CoreStore.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.ProductLog")]
    [BasedOnRow(typeof(Entities.ProductLogRow), CheckNames = true)]
    public class ProductLogForm
    {
        public Int16 OperationType { get; set; }
        public Int32 ChangingUserId { get; set; }
        public DateTime ValidFrom { get; set; }
        public DateTime ValidUntil { get; set; }
        public Int32 ProductId { get; set; }
        public String ProductName { get; set; }
        public String ProductImage { get; set; }
        public Boolean Discontinued { get; set; }
        public Int32 SupplierId { get; set; }
        public Int32 CategoryId { get; set; }
        public String QuantityPerUnit { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int16 UnitsInStock { get; set; }
        public Int16 UnitsOnOrder { get; set; }
        public Int16 ReorderLevel { get; set; }
    }
}