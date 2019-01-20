
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Product Details]")]
    [DisplayName("Product Detail"), InstanceName("Product Detail")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ProductDetailRow : LoggingRow, IIdRow, IIsActiveRow, IMultiTenantRow
    { 
        [DisplayName("ID"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        [DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductRow)), LeftJoin("jProduct"), Updatable(false)]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Wares"), PrimaryKey, ForeignKey(typeof(WaresRow)), LeftJoin("jItem")]
        [LookupEditor(typeof(WaresRow))]
        public Int32? WaresID
        {
            get { return Fields.WaresID[this]; }
            set { Fields.WaresID[this] = value; }
        }

        [DisplayName("Plan Price"), Scale(4), NotNull, AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? PlanPrice
        {
            get { return Fields.PlanPrice[this]; }
            set { Fields.PlanPrice[this] = value; }
        }

        [DisplayName("Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Double? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Product Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Double? ProductQuantity
        {
            get { return Fields.ProductQuantity[this]; }
            set { Fields.ProductQuantity[this] = value; }
        }

        [DisplayName("Discount"), NotNull, DefaultValue(1), AlignRight, DisplayFormat("#,##0.00")]
        public Double? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }


        //[DisplayName("Line Total"), Expression("(t0.[Quantity] * jItem.[WaresUnitPrice] * (1-t0.[Discount]))")]
        //[AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        //public Decimal? LineTotal
        //{
        //    get { return Fields.LineTotal[this]; }
        //    set { Fields.LineTotal[this] = value; }
        //}

        #region Produkt

        [Origin("jProduct")]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [Origin("jProduct")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [Origin("jProduct")]
        public Int32? ProductSupplierID
        {
            get { return Fields.ProductSupplierID[this]; }
            set { Fields.ProductSupplierID[this] = value; }
        }

        [Origin("jProduct")]
        public Int32? ProductCategoryID
        {
            get { return Fields.ProductCategoryID[this]; }
            set { Fields.ProductCategoryID[this] = value; }
        }

        [Origin("jProduct")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [Origin("jProduct")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [Origin("jProduct")]
        public Int16? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [Origin("jProduct")]
        public Int16? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }

        [Origin("jProduct")]
        public Int16? ProductReorderLevel
        {
            get { return Fields.ProductReorderLevel[this]; }
            set { Fields.ProductReorderLevel[this] = value; }
        }

        [Origin("jProduct")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        #endregion Product

        #region Wares

        [Origin("jItem")]
        public String WaresCode
        {
            get { return Fields.WaresCode[this]; }
            set { Fields.WaresCode[this] = value; }
        }

        [Origin("jItem")]
        public String WaresBarcode
        {
            get { return Fields.WaresBarcode[this]; }
            set { Fields.WaresBarcode[this] = value; }
        }

        [Origin("jItem")]
        public String WaresLabel
        {
            get { return Fields.WaresLabel[this]; }
            set { Fields.WaresLabel[this] = value; }
        }

        [Origin("jItem"), MinSelectLevel(SelectLevel.List)]
        public String WaresName
        {
            get { return Fields.WaresName[this]; }
            set { Fields.WaresName[this] = value; }
        }

        [Origin("jItem")]
        public String WaresImage
        {
            get { return Fields.WaresImage[this]; }
            set { Fields.WaresImage[this] = value; }
        }

        [Origin("jItem")]
        public Int32? WaresCategoryID
        {
            get { return Fields.WaresCategoryID[this]; }
            set { Fields.WaresCategoryID[this] = value; }
        }

        [Origin("jItem")]
        public Int32? WaresMeasureID
        {
            get { return Fields.WaresMeasureID[this]; }
            set { Fields.WaresMeasureID[this] = value; }
        }

        [Origin("jItem")]
        public Int32? WaresQuantityPerUnit
        {
            get { return Fields.WaresQuantityPerUnit[this]; }
            set { Fields.WaresQuantityPerUnit[this] = value; }
        }

        [Origin("jItem")]
        public Decimal? WaresUnitPrice
        {
            get { return Fields.WaresUnitPrice[this]; }
            set { Fields.WaresUnitPrice[this] = value; }
        }

        [Origin("jItem")]
        public Boolean? WaresDiscontinued
        {
            get { return Fields.WaresDiscontinued[this]; }
            set { Fields.WaresDiscontinued[this] = value; }
        }

        [Origin("jItem")]
        public Int32? WaresAccountID
        {
            get { return Fields.WaresAccountID[this]; }
            set { Fields.WaresAccountID[this] = value; }
        }

        #endregion Item

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
            get { return Fields.DetailID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field DetailID;
            public Int32Field ProductID;
            public Int32Field WaresID;
            public DecimalField PlanPrice;
            public DoubleField Quantity;
            public DoubleField ProductQuantity;
            public DoubleField Discount;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ProductProductName;
            public StringField ProductProductImage;
            public Int32Field ProductSupplierID;
            public Int32Field ProductCategoryID;
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
            public Int32Field WaresCategoryID;
            public Int32Field WaresMeasureID;
            public Int32Field WaresQuantityPerUnit;
            public DecimalField WaresUnitPrice;
            public BooleanField WaresDiscontinued;
            public Int32Field WaresAccountID;

            //public DecimalField LineTotal;

        }
    }
}
