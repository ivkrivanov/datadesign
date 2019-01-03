
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

        [DisplayName("Item"), PrimaryKey, ForeignKey(typeof(ItemRow)), LeftJoin("jItem")]
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

        [DisplayName("Product Quantity"), NotNull, DefaultValue(1), AlignRight]
        public Single? ProductQuantity
        {
            get { return Fields.ProductQuantity[this]; }
            set { Fields.ProductQuantity[this] = value; }
        }

        [DisplayName("Reduction"), NotNull, DefaultValue(0), AlignRight, DisplayFormat("#,##0.00")]
        public Single? Reduction
        {
            get { return Fields.Reduction[this]; }
            set { Fields.Reduction[this] = value; }
        }

        [DisplayName("Plan Price"), Size(19), Scale(4), NotNull, AlignRight, DisplayFormat("#,##0.00")]
        public Decimal? PlanPrice
        {
            get { return Fields.PlanPrice[this]; }
            set { Fields.PlanPrice[this] = value; }
        }


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

        [Origin("jItem")]
        public String ItemItemCode
        {
            get { return Fields.ItemItemCode[this]; }
            set { Fields.ItemItemCode[this] = value; }
        }

        [Origin("jItem")]
        public String ItemItemBarcode
        {
            get { return Fields.ItemItemBarcode[this]; }
            set { Fields.ItemItemBarcode[this] = value; }
        }

        [Origin("jItem")]
        public String ItemItemLabel
        {
            get { return Fields.ItemItemLabel[this]; }
            set { Fields.ItemItemLabel[this] = value; }
        }

        [Origin("jItem")]
        public String ItemItemName
        {
            get { return Fields.ItemItemName[this]; }
            set { Fields.ItemItemName[this] = value; }
        }

        [Origin("jItem")]
        public String ItemItemImage
        {
            get { return Fields.ItemItemImage[this]; }
            set { Fields.ItemItemImage[this] = value; }
        }

        [Origin("jItem")]
        public Int32? ItemSupplierID
        {
            get { return Fields.ItemSupplierID[this]; }
            set { Fields.ItemSupplierID[this] = value; }
        }

        [Origin("jItem")]
        public Int32? ItemItemCategoryID
        {
            get { return Fields.ItemItemCategoryID[this]; }
            set { Fields.ItemItemCategoryID[this] = value; }
        }

        [Origin("jItem")]
        public Int32? ItemMeasureID
        {
            get { return Fields.ItemMeasureID[this]; }
            set { Fields.ItemMeasureID[this] = value; }
        }

        [Origin("jItem")]
        public Int32? ItemQuantityPerUnit
        {
            get { return Fields.ItemQuantityPerUnit[this]; }
            set { Fields.ItemQuantityPerUnit[this] = value; }
        }

        [Origin("jItem")]
        public Decimal? ItemUnitPrice
        {
            get { return Fields.ItemUnitPrice[this]; }
            set { Fields.ItemUnitPrice[this] = value; }
        }

        [Origin("jItem")]
        public Boolean? ItemDiscontinued
        {
            get { return Fields.ItemDiscontinued[this]; }
            set { Fields.ItemDiscontinued[this] = value; }
        }

        [Origin("jItem")]
        public Int32? ItemAccountID
        {
            get { return Fields.ItemAccountID[this]; }
            set { Fields.ItemAccountID[this] = value; }
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
            public StringField ProductProductImage;
            public Int32Field ProductSupplierID;
            public Int32Field ProductCategoryID;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;
            public Int16Field ProductReorderLevel;
            public BooleanField ProductDiscontinued;

            public StringField ItemItemCode;
            public StringField ItemItemBarcode;
            public StringField ItemItemLabel;
            public StringField ItemItemName;
            public StringField ItemItemImage;
            public Int32Field ItemSupplierID;
            public Int32Field ItemItemCategoryID;
            public Int32Field ItemMeasureID;
            public Int32Field ItemQuantityPerUnit;
            public DecimalField ItemUnitPrice;
            public BooleanField ItemDiscontinued;
            public Int32Field ItemAccountID;

        }
    }
}
