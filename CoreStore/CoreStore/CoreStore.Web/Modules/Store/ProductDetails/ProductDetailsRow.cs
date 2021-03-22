
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
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
    public sealed class ProductDetailsRow : LoggingRow, IIdRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("ID"), Column("DetailId"), Identity]
        public Int32? DetailId
        {
            get => Fields.DetailId[this]; 
            set => Fields.DetailId[this] = value; 
        }

        #region Product

        [DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductsRow)), LeftJoin("p"), Updatable(false)]
        public Int32? ProductId
        {
            get => Fields.ProductId[this]; 
            set => Fields.ProductId[this] = value; 
        }

        [Origin("p"), MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get => Fields.ProductName[this]; 
            set => Fields.ProductName[this] = value; 
        }

        [Origin("p")]
        public Int32? ProductCategoryId
        {
            get => Fields.ProductCategoryId[this]; 
            set => Fields.ProductCategoryId[this] = value; 
        }

        [Origin("p")]
        public String ProductQuantityPerUnit
        {
            get => Fields.ProductQuantityPerUnit[this]; 
            set => Fields.ProductQuantityPerUnit[this] = value; 
        }

        [Origin("p")]
        public Decimal? ProductUnitPrice
        {
            get => Fields.ProductUnitPrice[this]; 
            set => Fields.ProductUnitPrice[this] = value; 
        }

        [Origin("p")]
        public Int16? ProductUnitsInStock
        {
            get => Fields.ProductUnitsInStock[this]; 
            set => Fields.ProductUnitsInStock[this] = value; 
        }

        [Origin("p")]
        public Int16? ProductUnitsOnOrder
        {
            get => Fields.ProductUnitsOnOrder[this]; 
            set => Fields.ProductUnitsOnOrder[this] = value; 
        }

        [Origin("p")]
        public Int16? ProductReorderLevel
        {
            get => Fields.ProductReorderLevel[this]; 
            set => Fields.ProductReorderLevel[this] = value; 
        }

        [Origin("p")]
        public Boolean? ProductDiscontinued
        {
            get => Fields.ProductDiscontinued[this]; 
            set => Fields.ProductDiscontinued[this] = value; 
        }

        #endregion Product

        #region Wares

        [DisplayName("Wares"), ForeignKey(typeof(WaresRow)), LeftJoin("w"), LookupInclude]
        [LookupEditor(typeof(WaresRow), InplaceAdd = true)]
        public Int32? WaresId
        {
            get => Fields.WaresId[this]; 
            set => Fields.WaresId[this] = value; 
        }

        [Origin("w"), LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String WaresCode
        {
            get => Fields.WaresCode[this]; 
            set => Fields.WaresCode[this] = value; 
        }

        [Origin("w")]
        public String WaresBarcode
        {
            get => Fields.WaresBarcode[this]; 
            set => Fields.WaresBarcode[this] = value; 
        }

        [Origin("w")]
        public String WaresLabel
        {
            get => Fields.WaresLabel[this]; 
            set => Fields.WaresLabel[this] = value; 
        }

        [Origin("w"), MinSelectLevel(SelectLevel.List)]
        public String WaresName
        {
            get => Fields.WaresName[this]; 
            set => Fields.WaresName[this] = value; 
        }

        [Origin("w")]
        public String WaresImage
        {
            get => Fields.WaresImage[this]; 
            set => Fields.WaresImage[this] = value; 
        }

        [Origin("w")]
        public Int32? WaresCategoryId
        {
            get => Fields.WaresCategoryId[this]; 
            set => Fields.WaresCategoryId[this] = value; 
        }

        [Origin("w")]
        public Int32? WaresMeasureId
        {
            get => Fields.WaresMeasureId[this]; 
            set => Fields.WaresMeasureId[this] = value; 
        }

        [Origin("w")]
        public Int32? WaresQuantityPerUnit
        {
            get => Fields.WaresQuantityPerUnit[this]; 
            set => Fields.WaresQuantityPerUnit[this] = value; 
        }

        [Origin("w")]
        public Decimal? WaresUnitPrice
        {
            get => Fields.WaresUnitPrice[this]; 
            set => Fields.WaresUnitPrice[this] = value; 
        }

        [Origin("w")]
        public Boolean? WaresDiscontinued
        {
            get => Fields.WaresDiscontinued[this]; 
            set => Fields.WaresDiscontinued[this] = value; 
        }

        [Origin("w")]
        public Int32? WaresAccountId
        {
            get => Fields.WaresAccountId[this]; 
            set => Fields.WaresAccountId[this] = value; 
        }

        #endregion Wares

        [DisplayName("Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Single? Quantity
        {
            get => Fields.Quantity[this]; 
            set => Fields.Quantity[this] = value; 
        }

        [DisplayName("Product Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Double? ProductQuantity
        {
            get => Fields.ProductQuantity[this]; 
            set => Fields.ProductQuantity[this] = value; 
        }

        [DisplayName("Plan Price"), Size(19), Scale(4), NotNull]
        public Decimal? PlanPrice
        {
            get => Fields.PlanPrice[this]; 
            set => Fields.PlanPrice[this] = value; 
        }

        [DisplayName("Discount"), NotNull, DefaultValue(0)]
        public Single? Discount
        {
            get => Fields.Discount[this]; 
            set => Fields.Discount[this] = value; 
        }

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

        IIdField IIdRow.IdField
        {
            get => Fields.DetailId; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductDetailsRow()
            : base(Fields)
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
