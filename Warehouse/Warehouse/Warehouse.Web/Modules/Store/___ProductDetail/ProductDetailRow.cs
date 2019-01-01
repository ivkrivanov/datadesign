
namespace Warehouse.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using Warehouse.Administration.Entities;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Product Details]")]
    [DisplayName("Product Detail"), InstanceName("Product Detail")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class ProductDetailRow : LoggingRow, IIdRow, IIsActiveRow, IMultiTenantRow
    {
        #region Product Detail
        [DisplayName("ID"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        [DisplayName("Product ID"), PrimaryKey, ForeignKey(typeof(ProductRow)), LeftJoin("pro"), Updatable(false)]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Item"), PrimaryKey, ForeignKey(typeof(ItemRow)), LeftJoin("ite")]
        [LookupEditor(typeof(ItemRow))]
        public Int32? ItemID
        {
            get { return Fields.ItemID[this]; }
            set { Fields.ItemID[this] = value; }
        }

        [DisplayName("Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Single? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Product Quantity"), NotNull, DefaultValue(1),  AlignRight]
        public Single? ProductQuantity
        {
            get { return Fields.ProductQuantity[this]; }
            set { Fields.ProductQuantity[this] = value; }
        }

        [DisplayName("Reduction"), NotNull]
        public Single? Reduction
        {
            get { return Fields.Reduction[this]; }
            set { Fields.Reduction[this] = value; }
        }

        [DisplayName("Plan Price"), Scale(4), Expression("(t0.[ItemUnitPrice] * t0.[ProductQuantity])")]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? PlanPrice
        {
            get { return Fields.PlanPrice[this]; }
            set { Fields.PlanPrice[this] = value; }
        }

        #endregion

        #region Product

        [Origin("pro"), MinSelectLevel(SelectLevel.List)]
        public String ProductProductName
        {
            get { return Fields.ProductProductName[this]; }
            set { Fields.ProductProductName[this] = value; }
        }

        [Origin("pro")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [Origin("pro")]
        public Int32? ProductSupplierID
        {
            get { return Fields.ProductSupplierID[this]; }
            set { Fields.ProductSupplierID[this] = value; }
        }

        [Origin("pro")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [Origin("pro")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        #endregion

        #region Items
        
        [Origin("ite")]
        public String ItemItemCode
        {
            get { return Fields.ItemItemCode[this]; }
            set { Fields.ItemItemCode[this] = value; }
        }

        [Origin("ite")]
        public String ItemItemName
        {
            get { return Fields.ItemItemName[this]; }
            set { Fields.ItemItemName[this] = value; }
        }

        public decimal? ItemUnitPrice
        {
            get { return Fields.ItemUnitPrice[this]; }
            set { Fields.ItemUnitPrice[this] = value; }
        }

        #endregion

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
            public Int32Field ItemID;
            public SingleField Quantity;
            public SingleField ProductQuantity;
            public SingleField Reduction;
            public DecimalField PlanPrice;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ProductProductName;
            //public StringField ProductProductImage;
            public BooleanField ProductDiscontinued;
            public Int32Field ProductSupplierID;
            //public Int32Field ProductCategoryID;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            //public Int16Field ProductUnitsInStock;
            //public Int16Field ProductUnitsOnOrder;
            //public Int16Field ProductReorderLevel;

            public StringField ItemItemCode;
            //public StringField ItemItemBarcode;
            //public StringField ItemItemLabel;
            public StringField ItemItemName;
            public DecimalField ItemUnitPrice;
            //public StringField ItemItemImage;
            //public Int32Field ItemItemCategoryID;
            //public Int32Field ItemMeasureID;
            //public Int32Field ItemAccountID;
        }
    }
}
