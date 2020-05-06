
namespace CoreStore.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.Products")]
    [BasedOnRow(typeof(Entities.ProductsRow), CheckNames = true)]
    public class ProductsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProductId { get; set; }
        [EditLink]
        public String ProductCode { get; set; }
        public String ProductBarcode { get; set; }
        public String ProductLabel { get; set; }
        public String ProductName { get; set; }
        public String ProductImage { get; set; }
        public String SupplierSupplierStat { get; set; }
        public String CounterpartyCompanyName { get; set; }
        public String CategoryCategoryCode { get; set; }
        public String MeasureMeasureName { get; set; }
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