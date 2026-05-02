

namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Product Details]")]
    [DisplayName("Product Details"), InstanceName("Product Details")]
    [ReadPermission(PermissionKeys.Product.View)]
    [ModifyPermission(PermissionKeys.Product.View)]
    [DeletePermission(PermissionKeys.Product.Delete)]
    [DataAuditLog]
    public sealed class ProductDetailsRow : LoggingRow<ProductDetailsRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Id"), Column("DetailID"), Identity, IdProperty]
        public int? DetailId
        {
            get => fields.DetailId[this];
            set => fields.DetailId[this] = value;
        }

        #region Product

        [DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductsRow)), LeftJoin("jProduct"), Updatable(false)]
        public int? ProductId
        {
            get => fields.ProductId[this];
            set => fields.ProductId[this] = value;
        }

        [DisplayName("Plan Price"), Size(19), Scale(4), NotNull]
        public decimal? PlanPrice
        {
            get => fields.PlanPrice[this];
            set => fields.PlanPrice[this] = value;
        }

        [DisplayName("Quantity"), NotNull]
        public float? Quantity
        {
            get => fields.Quantity[this];
            set => fields.Quantity[this] = value;
        }

        [DisplayName("Product Quantity"), NotNull, DefaultValue(1), AlignRight]
        public double? ProductQuantity
        {
            get => fields.ProductQuantity[this];
            set => fields.ProductQuantity[this] = value;
        }

        [DisplayName("Discount"), NotNull, DefaultValue(0)]
        public Single? Discount
        {
            get => fields.Discount[this];
            set => fields.Discount[this] = value;
        }

        [DisplayName("Product Name"), Expression("jProduct.[ProductName]"), MinSelectLevel(SelectLevel.List)]
        public string ProductName
        {
            get => fields.ProductName[this];
            set => fields.ProductName[this] = value;
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryID]")]
        public int? ProductCategoryId
        {
            get => fields.ProductCategoryId[this];
            set => fields.ProductCategoryId[this] = value;
        }

        [DisplayName("Product Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]")]
        public string ProductQuantityPerUnit
        {
            get => fields.ProductQuantityPerUnit[this];
            set => fields.ProductQuantityPerUnit[this] = value;
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public decimal? ProductUnitPrice
        {
            get => fields.ProductUnitPrice[this];
            set => fields.ProductUnitPrice[this] = value;
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public short? ProductUnitsInStock
        {
            get => fields.ProductUnitsInStock[this];
            set => fields.ProductUnitsInStock[this] = value;
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public short? ProductUnitsOnOrder
        {
            get => fields.ProductUnitsOnOrder[this];
            set => fields.ProductUnitsOnOrder[this] = value;
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public short? ProductReorderLevel
        {
            get => fields.ProductReorderLevel[this];
            set => fields.ProductReorderLevel[this] = value;
        }

        [DisplayName("Product Discontinued"), Expression("jProduct.[Discontinued]")]
        public bool? ProductDiscontinued
        {
            get => fields.ProductDiscontinued[this];
            set => fields.ProductDiscontinued[this] = value;
        }

        #endregion Product

        #region Wares

        [DisplayName("Wares"), Column("WaresID"), ForeignKey(typeof(WaresRow)), LeftJoin("jWares"), LookupInclude]
        [LookupEditor(typeof(WaresRow), InplaceAdd = true)]
        public int? WaresId
        {
            get => fields.WaresId[this];
            set => fields.WaresId[this] = value;
        }

        [DisplayName("Wares Code"), Expression("jWares.[WaresCode]")]
        public string WaresCode
        {
            get => fields.WaresCode[this];
            set => fields.WaresCode[this] = value;
        }

        [DisplayName("Wares Barcode"), Expression("jWares.[WaresBarcode]")]
        public string WaresBarcode
        {
            get => fields.WaresBarcode[this];
            set => fields.WaresBarcode[this] = value;
        }

        [DisplayName("Wares Label"), Expression("jWares.[WaresLabel]")]
        public string WaresLabel
        {
            get => fields.WaresLabel[this];
            set => fields.WaresLabel[this] = value;
        }

        [DisplayName("Wares Name"), Expression("jWares.[WaresName]")]
        public string WaresName
        {
            get => fields.WaresName[this];
            set => fields.WaresName[this] = value;
        }

        [DisplayName("Wares Image"), Expression("jWares.[WaresImage]")]
        public string WaresImage
        {
            get => fields.WaresImage[this];
            set => fields.WaresImage[this] = value;
        }

        [DisplayName("Wares Category Id"), Expression("jWares.[CategoryID]")]
        public int? WaresCategoryId
        {
            get => fields.WaresCategoryId[this];
            set => fields.WaresCategoryId[this] = value;
        }

        [DisplayName("Wares Measure Id"), Expression("jWares.[MeasureID]")]
        public int? WaresMeasureId
        {
            get => fields.WaresMeasureId[this];
            set => fields.WaresMeasureId[this] = value;
        }

        [DisplayName("Wares Quantity Per Unit"), Expression("jWares.[QuantityPerUnit]")]
        public Int32? WaresQuantityPerUnit
        {
            get => fields.WaresQuantityPerUnit[this];
            set => fields.WaresQuantityPerUnit[this] = value;
        }

        [DisplayName("Wares Unit Price"), Expression("jWares.[UnitPrice]")]
        public decimal? WaresUnitPrice
        {
            get => fields.WaresUnitPrice[this];
            set => fields.WaresUnitPrice[this] = value;
        }

        [DisplayName("Wares Discontinued"), Expression("jWares.[Discontinued]")]
        public bool? WaresDiscontinued
        {
            get => fields.WaresDiscontinued[this];
            set => fields.WaresDiscontinued[this] = value;
        }

        [DisplayName("Wares Account Id"), Expression("jWares.[AccountID]")]
        public int? WaresAccountId
        {
            get => fields.WaresAccountId[this];
            set => fields.WaresAccountId[this] = value;
        }

        #endregion Wares

        [DisplayName("Line Total"), Expression("(t0.[Quantity] * t0.[PlanPrice] / t0.[ProductQuantity] - t0.[Discount])")]
        [AlignRight, DisplayFormat("#,##0.0000"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get => Fields.LineTotal[this];
            set => Fields.LineTotal[this] = value;
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this];
            set => Fields.TenantId[this] = value;
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId;
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => Fields.IsActive[this];
            set => Fields.IsActive[this] = value;
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => Fields.IsActive;
        }

        #endregion Tenant & Activ


        public ProductDetailsRow()
            : base()
        {
        }

        public ProductDetailsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field DetailId;
            public Int32Field ProductId;
            public Int32Field WaresId;
            public DecimalField PlanPrice;
            public SingleField Quantity;
            public DoubleField ProductQuantity;
            public SingleField Discount;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ProductName;
            public Int32Field ProductCategoryId;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;
            public Int16Field ProductReorderLevel;
            public BooleanField ProductDiscontinued;

            public StringField WaresCode;
            public StringField WaresBarcode;
            public StringField WaresLabel;
            public StringField WaresName;
            public StringField WaresImage;
            public Int32Field WaresCategoryId;
            public Int32Field WaresMeasureId;
            public Int32Field WaresQuantityPerUnit;
            public DecimalField WaresUnitPrice;
            public BooleanField WaresDiscontinued;
            public Int32Field WaresAccountId;

            public DecimalField LineTotal;

        }
    }
}