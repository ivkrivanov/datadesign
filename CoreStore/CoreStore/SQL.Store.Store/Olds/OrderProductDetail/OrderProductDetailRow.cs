
namespace Store.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[OrderProduct Details]")]
    [DisplayName("Order Product Detail"), InstanceName("Order Product Detail")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class OrderProductDetailRow : Row, IIdRow
    {
        [DisplayName("Detail Id"), Column("DetailID"), Identity]
        public Int32? DetailId
        {
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }

        [DisplayName("Order Products Id"), Column("OrderProductsID"), PrimaryKey]
        public Int32? OrderProductsId
        {
            get { return Fields.OrderProductsId[this]; }
            set { Fields.OrderProductsId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), PrimaryKey, ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductName")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Unit Price"), Size(19), Scale(4), NotNull]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int16? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Discount"), NotNull]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int32? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [DisplayName("Product Product Image"), Expression("jProduct.[ProductImage]")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryID]")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Int16? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Int16? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public Int16? ProductReorderLevel
        {
            get { return Fields.ProductReorderLevel[this]; }
            set { Fields.ProductReorderLevel[this] = value; }
        }

        [DisplayName("Product Discontinued"), Expression("jProduct.[Discontinued]")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [DisplayName("Product Insert Date"), Expression("jProduct.[InsertDate]")]
        public DateTime? ProductInsertDate
        {
            get { return Fields.ProductInsertDate[this]; }
            set { Fields.ProductInsertDate[this] = value; }
        }

        [DisplayName("Product Insert User Id"), Expression("jProduct.[InsertUserId]")]
        public Int32? ProductInsertUserId
        {
            get { return Fields.ProductInsertUserId[this]; }
            set { Fields.ProductInsertUserId[this] = value; }
        }

        [DisplayName("Product Update Date"), Expression("jProduct.[UpdateDate]")]
        public DateTime? ProductUpdateDate
        {
            get { return Fields.ProductUpdateDate[this]; }
            set { Fields.ProductUpdateDate[this] = value; }
        }

        [DisplayName("Product Update User Id"), Expression("jProduct.[UpdateUserId]")]
        public Int32? ProductUpdateUserId
        {
            get { return Fields.ProductUpdateUserId[this]; }
            set { Fields.ProductUpdateUserId[this] = value; }
        }

        [DisplayName("Product Is Active"), Expression("jProduct.[IsActive]")]
        public Int32? ProductIsActive
        {
            get { return Fields.ProductIsActive[this]; }
            set { Fields.ProductIsActive[this] = value; }
        }

        [DisplayName("Product Tenant Id"), Expression("jProduct.[TenantId]")]
        public Int32? ProductTenantId
        {
            get { return Fields.ProductTenantId[this]; }
            set { Fields.ProductTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderProductDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field DetailId;
            public Int32Field OrderProductsId;
            public Int32Field ProductId;
            public DecimalField UnitPrice;
            public Int16Field Quantity;
            public SingleField Discount;
            public DateTimeField InsertDate;
            public Int32Field InsertUserId;
            public DateTimeField UpdateDate;
            public Int32Field UpdateUserId;
            public Int32Field IsActive;
            public Int32Field TenantId;

            public StringField ProductProductName;
            public StringField ProductProductImage;
            public Int32Field ProductSupplierId;
            public Int32Field ProductCategoryId;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;
            public Int16Field ProductReorderLevel;
            public BooleanField ProductDiscontinued;
            public DateTimeField ProductInsertDate;
            public Int32Field ProductInsertUserId;
            public DateTimeField ProductUpdateDate;
            public Int32Field ProductUpdateUserId;
            public Int32Field ProductIsActive;
            public Int32Field ProductTenantId;
        }
    }
}
