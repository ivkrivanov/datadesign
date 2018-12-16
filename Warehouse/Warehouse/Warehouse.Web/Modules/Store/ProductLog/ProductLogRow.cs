
namespace Warehouse.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductLog]")]
    [DisplayName("Product Log"), InstanceName("Product Log")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ProductLogRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Log Id"), Column("ProductLogID"), Identity]
        public Int64? ProductLogId
        {
            get { return Fields.ProductLogId[this]; }
            set { Fields.ProductLogId[this] = value; }
        }

        [DisplayName("Operation Type"), NotNull]
        public Int16? OperationType
        {
            get { return Fields.OperationType[this]; }
            set { Fields.OperationType[this] = value; }
        }

        [DisplayName("Changing User Id")]
        public Int32? ChangingUserId
        {
            get { return Fields.ChangingUserId[this]; }
            set { Fields.ChangingUserId[this] = value; }
        }

        [DisplayName("Valid From"), NotNull]
        public DateTime? ValidFrom
        {
            get { return Fields.ValidFrom[this]; }
            set { Fields.ValidFrom[this] = value; }
        }

        [DisplayName("Valid Until"), NotNull]
        public DateTime? ValidUntil
        {
            get { return Fields.ValidUntil[this]; }
            set { Fields.ValidUntil[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID"), NotNull]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), QuickSearch]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Product Image"), Size(100)]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Discontinued")]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        [DisplayName("Supplier Id"), Column("SupplierID")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Category Id"), Column("CategoryID")]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Quantity Per Unit"), Size(20)]
        public String QuantityPerUnit
        {
            get { return Fields.QuantityPerUnit[this]; }
            set { Fields.QuantityPerUnit[this] = value; }
        }

        [DisplayName("Unit Price"), Size(19), Scale(4)]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Units In Stock")]
        public Int16? UnitsInStock
        {
            get { return Fields.UnitsInStock[this]; }
            set { Fields.UnitsInStock[this] = value; }
        }

        [DisplayName("Units On Order")]
        public Int16? UnitsOnOrder
        {
            get { return Fields.UnitsOnOrder[this]; }
            set { Fields.UnitsOnOrder[this] = value; }
        }

        [DisplayName("Reorder Level")]
        public Int16? ReorderLevel
        {
            get { return Fields.ReorderLevel[this]; }
            set { Fields.ReorderLevel[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductLogId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductLogRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProductLogId;
            public Int16Field OperationType;
            public Int32Field ChangingUserId;
            public DateTimeField ValidFrom;
            public DateTimeField ValidUntil;
            public Int32Field ProductId;
            public StringField ProductName;
            public StringField ProductImage;
            public BooleanField Discontinued;
            public Int32Field SupplierId;
            public Int32Field CategoryId;
            public StringField QuantityPerUnit;
            public DecimalField UnitPrice;
            public Int16Field UnitsInStock;
            public Int16Field UnitsOnOrder;
            public Int16Field ReorderLevel;
        }
    }
}
