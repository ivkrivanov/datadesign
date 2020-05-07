
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
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }

        #region Product

        [DisplayName("Product"), Column("ProductId"), PrimaryKey, ForeignKey(typeof(ProductsRow)), LeftJoin("p"), Updatable(false)]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [Origin("p"), MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        //[Origin("p")]
        //public Int32? ProductSupplierId
        //{
        //    get { return Fields.ProductSupplierId[this]; }
        //    set { Fields.ProductSupplierId[this] = value; }
        //}

        [Origin("p")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [Origin("p")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [Origin("p")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [Origin("p")]
        public Int16? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [Origin("p")]
        public Int16? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }

        [Origin("p")]
        public Int16? ProductReorderLevel
        {
            get { return Fields.ProductReorderLevel[this]; }
            set { Fields.ProductReorderLevel[this] = value; }
        }

        [Origin("p")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        #endregion Product

        #region Wares

        [DisplayName("Wares"), ForeignKey(typeof(WaresRow)), LeftJoin("w"), LookupInclude]
        public Int32? WaresId
        {
            get { return Fields.WaresId[this]; }
            set { Fields.WaresId[this] = value; }
        }

        [Origin("w"), LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String WaresCode
        {
            get { return Fields.WaresCode[this]; }
            set { Fields.WaresCode[this] = value; }
        }

        [Origin("w")]
        public String WaresBarcode
        {
            get { return Fields.WaresBarcode[this]; }
            set { Fields.WaresBarcode[this] = value; }
        }

        [Origin("w")]
        public String WaresLabel
        {
            get { return Fields.WaresLabel[this]; }
            set { Fields.WaresLabel[this] = value; }
        }

        [Origin("w"), MinSelectLevel(SelectLevel.List)]
        public String WaresName
        {
            get { return Fields.WaresName[this]; }
            set { Fields.WaresName[this] = value; }
        }

        [Origin("w")]
        public String WaresImage
        {
            get { return Fields.WaresImage[this]; }
            set { Fields.WaresImage[this] = value; }
        }

        [Origin("w")]
        public Int32? WaresCategoryId
        {
            get { return Fields.WaresCategoryId[this]; }
            set { Fields.WaresCategoryId[this] = value; }
        }

        [Origin("w")]
        public Int32? WaresMeasureId
        {
            get { return Fields.WaresMeasureId[this]; }
            set { Fields.WaresMeasureId[this] = value; }
        }

        [Origin("w")]
        public Int32? WaresQuantityPerUnit
        {
            get { return Fields.WaresQuantityPerUnit[this]; }
            set { Fields.WaresQuantityPerUnit[this] = value; }
        }

        [Origin("w")]
        public Decimal? WaresUnitPrice
        {
            get { return Fields.WaresUnitPrice[this]; }
            set { Fields.WaresUnitPrice[this] = value; }
        }

        [Origin("w")]
        public Boolean? WaresDiscontinued
        {
            get { return Fields.WaresDiscontinued[this]; }
            set { Fields.WaresDiscontinued[this] = value; }
        }

        [Origin("w")]
        public Int32? WaresAccountId
        {
            get { return Fields.WaresAccountId[this]; }
            set { Fields.WaresAccountId[this] = value; }
        }

        #endregion Wares

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

        [DisplayName("Plan Price"), Size(19), Scale(4), NotNull]
        public Decimal? PlanPrice
        {
            get { return Fields.PlanPrice[this]; }
            set { Fields.PlanPrice[this] = value; }
        }

        [DisplayName("Discount"), NotNull]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Line Total"), Expression("(t0.[Quantity] * t0.[PlanPrice] / t0.[ProductQuantity] - t0.[Discount])")]
        [AlignRight, DisplayFormat("#,##0.0000"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineTotal
        {
            get { return Fields.LineTotal[this]; }
            set { Fields.LineTotal[this] = value; }
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Tenant & Activ

        IIdField IIdRow.IdField
        {
            get { return Fields.DetailId; }
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
            //public Int32Field ProductSupplierId;
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
