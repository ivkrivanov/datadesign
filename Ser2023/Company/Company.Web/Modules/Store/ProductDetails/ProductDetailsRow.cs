using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Product Details]")]
[DisplayName("Product Details"), InstanceName("Product Details")]
[ReadPermission(PermissionKeys.Product.View)]
[ModifyPermission(PermissionKeys.Product.View)]
[DeletePermission(PermissionKeys.Product.Delete)]
[DataAuditLog]
public sealed class ProductDetailsRow : LoggingRow<ProductDetailsRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    const string jProduct = nameof(jProduct);
    const string jWares = nameof(jWares);

    [DisplayName("Id"), Column("DetailId"), Identity, IdProperty]
    public int? DetailId { get => fields.DetailId[this]; set => fields.DetailId[this] = value; }

    [DisplayName("ProductId"), PrimaryKey, ForeignKey(typeof(ProductsRow)), LeftJoin(jProduct), Updatable(false)]
    public int? ProductId { get => fields.ProductId[this]; set => fields.ProductId[this] = value; }

    [DisplayName("Wares"), Column("WaresId"), ForeignKey(typeof(WaresRow)), LeftJoin(jWares), LookupInclude]
    [AsyncLookupEditor(typeof(WaresRow), InplaceAdd = true)]
    public int? WaresId { get => fields.WaresId[this]; set => fields.WaresId[this] = value; }

    [Origin(jWares, nameof(WaresRow.WaresCode)), MinSelectLevel(SelectLevel.List)]
    public string WaresCode { get => fields.WaresCode[this]; set => fields.WaresCode[this] = value; }

    [Origin(jWares, nameof(WaresRow.WaresName)), MinSelectLevel(SelectLevel.List)]
    public string WaresName { get => fields.WaresName[this]; set => fields.WaresName[this] = value; }

    [DisplayName("Product Name"), Expression("jProduct.[ProductName]"), MinSelectLevel(SelectLevel.List)]
    public string ProductName { get => fields.ProductName[this]; set => fields.ProductName[this] = value; }

    [DisplayName("Product Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]"), AlignRight]
    public string ProductQuantityPerUnit { get => fields.ProductQuantityPerUnit[this]; set => fields.ProductQuantityPerUnit[this] = value; }

    [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]"), AlignRight, DisplayFormat("#,##0.00")]
    public decimal? ProductUnitPrice { get => fields.ProductUnitPrice[this]; set => fields.ProductUnitPrice[this] = value; }

    [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]"), AlignRight]
    public short? ProductUnitsInStock { get => fields.ProductUnitsInStock[this]; set => fields.ProductUnitsInStock[this] = value; }

    [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]"), AlignRight]
    public short? ProductUnitsOnOrder { get => fields.ProductUnitsOnOrder[this]; set => fields.ProductUnitsOnOrder[this] = value; }

    [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
    public short? ProductReorderLevel { get => fields.ProductReorderLevel[this]; set => fields.ProductReorderLevel[this] = value; }

    [DisplayName("Product Discontinued"), Expression("jProduct.[Discontinued]"), AlignRight]
    public bool? ProductDiscontinued { get => fields.ProductDiscontinued[this]; set => fields.ProductDiscontinued[this] = value; }

    [DisplayName("Quantity"), NotNull, DefaultValue(1), AlignRight]
    public float? Quantity { get => fields.Quantity[this]; set => fields.Quantity[this] = value; }

    [DisplayName("Product Quantity"), NotNull, DefaultValue(1), AlignRight]
    public double? ProductQuantity { get => fields.ProductQuantity[this]; set => fields.ProductQuantity[this] = value; }

    [DisplayName("Plan Price"), Size(19), Scale(4), NotNull]
    public decimal? PlanPrice { get => fields.PlanPrice[this]; set => fields.PlanPrice[this] = value; }

    [DisplayName("Discount"), NotNull, DefaultValue(0)]
    public Single? Discount { get => fields.Discount[this]; set => fields.Discount[this] = value; }

    [DisplayName("Line Total"), Expression("(t0.[Quantity] * t0.[PlanPrice] / t0.[ProductQuantity] - t0.[Discount])")]
    [AlignRight, DisplayFormat("#,##0.0000"), MinSelectLevel(SelectLevel.List)]
    public Decimal? LineTotal { get => Fields.LineTotal[this]; set => Fields.LineTotal[this] = value; }

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
        //public Int32Field ProductCategoryId;
        public StringField ProductQuantityPerUnit;
        public DecimalField ProductUnitPrice;
        public Int16Field ProductUnitsInStock;
        public Int16Field ProductUnitsOnOrder;
        public Int16Field ProductReorderLevel;
        public BooleanField ProductDiscontinued;

        public StringField WaresCode;
        //public StringField WaresBarcode;
        //public StringField WaresLabel;
        public StringField WaresName;
        //public StringField WaresImage;
        //public Int32Field WaresCategoryId;
        //public Int32Field WaresMeasureId;
        //public Int32Field WaresQuantityPerUnit;
        //public DecimalField WaresUnitPrice;
        //public BooleanField WaresDiscontinued;
        //public Int32Field WaresAccountId;

        public DecimalField LineTotal;
    }
}