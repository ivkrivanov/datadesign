
namespace CoreStore.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Product Details]")]
    [DisplayName("Product Details"), InstanceName("Product Details")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ProductDetailsRow : CoreStore.Administration.LoggingRow, IIdRow
    {
        [DisplayName("Product"), Column("ProductID"), PrimaryKey, ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductProductCode")]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Wares"), Column("WaresID"), PrimaryKey, ForeignKey("[dbo].[Wares]", "WaresID"), LeftJoin("jWares"), TextualField("WaresWaresCode")]
        public Int32? WaresId
        {
            get { return Fields.WaresId[this]; }
            set { Fields.WaresId[this] = value; }
        }

        [DisplayName("Plan Price"), Size(19), Scale(4), NotNull]
        public Decimal? PlanPrice
        {
            get { return Fields.PlanPrice[this]; }
            set { Fields.PlanPrice[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Single? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Product Quantity"), NotNull]
        public Double? ProductQuantity
        {
            get { return Fields.ProductQuantity[this]; }
            set { Fields.ProductQuantity[this] = value; }
        }

        [DisplayName("Discount"), NotNull]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
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

        [DisplayName("Detail Id"), Column("DetailID"), Identity]
        public Int32? DetailId
        {
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }

        [DisplayName("Product Product Code"), Expression("jProduct.[ProductCode]")]
        public String ProductProductCode
        {
            get { return Fields.ProductProductCode[this]; }
            set { Fields.ProductProductCode[this] = value; }
        }

        [DisplayName("Product Product Barcode"), Expression("jProduct.[ProductBarcode]")]
        public String ProductProductBarcode
        {
            get { return Fields.ProductProductBarcode[this]; }
            set { Fields.ProductProductBarcode[this] = value; }
        }

        [DisplayName("Product Product Label"), Expression("jProduct.[ProductLabel]")]
        public String ProductProductLabel
        {
            get { return Fields.ProductProductLabel[this]; }
            set { Fields.ProductProductLabel[this] = value; }
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

        [DisplayName("Product Counterparty Id"), Expression("jProduct.[CounterpartyID]")]
        public String ProductCounterpartyId
        {
            get { return Fields.ProductCounterpartyId[this]; }
            set { Fields.ProductCounterpartyId[this] = value; }
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryID]")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Measure Id"), Expression("jProduct.[MeasureID]")]
        public Int32? ProductMeasureId
        {
            get { return Fields.ProductMeasureId[this]; }
            set { Fields.ProductMeasureId[this] = value; }
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

        [DisplayName("Wares Wares Code"), Expression("jWares.[WaresCode]")]
        public String WaresWaresCode
        {
            get { return Fields.WaresWaresCode[this]; }
            set { Fields.WaresWaresCode[this] = value; }
        }

        [DisplayName("Wares Wares Barcode"), Expression("jWares.[WaresBarcode]")]
        public String WaresWaresBarcode
        {
            get { return Fields.WaresWaresBarcode[this]; }
            set { Fields.WaresWaresBarcode[this] = value; }
        }

        [DisplayName("Wares Wares Label"), Expression("jWares.[WaresLabel]")]
        public String WaresWaresLabel
        {
            get { return Fields.WaresWaresLabel[this]; }
            set { Fields.WaresWaresLabel[this] = value; }
        }

        [DisplayName("Wares Wares Name"), Expression("jWares.[WaresName]")]
        public String WaresWaresName
        {
            get { return Fields.WaresWaresName[this]; }
            set { Fields.WaresWaresName[this] = value; }
        }

        [DisplayName("Wares Wares Image"), Expression("jWares.[WaresImage]")]
        public String WaresWaresImage
        {
            get { return Fields.WaresWaresImage[this]; }
            set { Fields.WaresWaresImage[this] = value; }
        }

        [DisplayName("Wares Supplier Id"), Expression("jWares.[SupplierID]")]
        public Int32? WaresSupplierId
        {
            get { return Fields.WaresSupplierId[this]; }
            set { Fields.WaresSupplierId[this] = value; }
        }

        [DisplayName("Wares Counterparty Id"), Expression("jWares.[CounterpartyID]")]
        public String WaresCounterpartyId
        {
            get { return Fields.WaresCounterpartyId[this]; }
            set { Fields.WaresCounterpartyId[this] = value; }
        }

        [DisplayName("Wares Category Id"), Expression("jWares.[CategoryID]")]
        public Int32? WaresCategoryId
        {
            get { return Fields.WaresCategoryId[this]; }
            set { Fields.WaresCategoryId[this] = value; }
        }

        [DisplayName("Wares Measure Id"), Expression("jWares.[MeasureID]")]
        public Int32? WaresMeasureId
        {
            get { return Fields.WaresMeasureId[this]; }
            set { Fields.WaresMeasureId[this] = value; }
        }

        [DisplayName("Wares Quantity Per Unit"), Expression("jWares.[QuantityPerUnit]")]
        public Decimal? WaresQuantityPerUnit
        {
            get { return Fields.WaresQuantityPerUnit[this]; }
            set { Fields.WaresQuantityPerUnit[this] = value; }
        }

        [DisplayName("Wares Unit Price"), Expression("jWares.[UnitPrice]")]
        public Decimal? WaresUnitPrice
        {
            get { return Fields.WaresUnitPrice[this]; }
            set { Fields.WaresUnitPrice[this] = value; }
        }

        [DisplayName("Wares Units In Stock"), Expression("jWares.[UnitsInStock]")]
        public Decimal? WaresUnitsInStock
        {
            get { return Fields.WaresUnitsInStock[this]; }
            set { Fields.WaresUnitsInStock[this] = value; }
        }

        [DisplayName("Wares Units On Order"), Expression("jWares.[UnitsOnOrder]")]
        public Decimal? WaresUnitsOnOrder
        {
            get { return Fields.WaresUnitsOnOrder[this]; }
            set { Fields.WaresUnitsOnOrder[this] = value; }
        }

        [DisplayName("Wares Discontinued"), Expression("jWares.[Discontinued]")]
        public Boolean? WaresDiscontinued
        {
            get { return Fields.WaresDiscontinued[this]; }
            set { Fields.WaresDiscontinued[this] = value; }
        }

        [DisplayName("Wares Account Id"), Expression("jWares.[AccountID]")]
        public Int32? WaresAccountId
        {
            get { return Fields.WaresAccountId[this]; }
            set { Fields.WaresAccountId[this] = value; }
        }

        [DisplayName("Wares Is Active"), Expression("jWares.[IsActive]")]
        public Int32? WaresIsActive
        {
            get { return Fields.WaresIsActive[this]; }
            set { Fields.WaresIsActive[this] = value; }
        }

        [DisplayName("Wares Tenant Id"), Expression("jWares.[TenantId]")]
        public Int32? WaresTenantId
        {
            get { return Fields.WaresTenantId[this]; }
            set { Fields.WaresTenantId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : CoreStore.Administration.LoggingRowFields
        {
            public Int32Field ProductId;
            public Int32Field WaresId;
            public DecimalField PlanPrice;
            public SingleField Quantity;
            public DoubleField ProductQuantity;
            public SingleField Discount;
            public Int32Field IsActive;
            public Int32Field TenantId;
            public Int32Field DetailId;

            public StringField ProductProductCode;
            public StringField ProductProductBarcode;
            public StringField ProductProductLabel;
            public StringField ProductProductName;
            public StringField ProductProductImage;
            public Int32Field ProductSupplierId;
            public StringField ProductCounterpartyId;
            public Int32Field ProductCategoryId;
            public Int32Field ProductMeasureId;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;
            public Int16Field ProductReorderLevel;
            public BooleanField ProductDiscontinued;
            public Int32Field ProductIsActive;
            public Int32Field ProductTenantId;

            public StringField WaresWaresCode;
            public StringField WaresWaresBarcode;
            public StringField WaresWaresLabel;
            public StringField WaresWaresName;
            public StringField WaresWaresImage;
            public Int32Field WaresSupplierId;
            public StringField WaresCounterpartyId;
            public Int32Field WaresCategoryId;
            public Int32Field WaresMeasureId;
            public DecimalField WaresQuantityPerUnit;
            public DecimalField WaresUnitPrice;
            public DecimalField WaresUnitsInStock;
            public DecimalField WaresUnitsOnOrder;
            public BooleanField WaresDiscontinued;
            public Int32Field WaresAccountId;
            public Int32Field WaresIsActive;
            public Int32Field WaresTenantId;
        }
    }
}
