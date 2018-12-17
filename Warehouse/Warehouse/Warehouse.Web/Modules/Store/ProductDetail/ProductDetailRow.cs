
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
        [DisplayName("Detail Id"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        //[DisplayName("Product Id"), Column("ProductID"), NotNull]
        //public Int32? ProductId
        //{
        //    get { return Fields.ProductId[this]; }
        //    set { Fields.ProductId[this] = value; }
        //}

        [DisplayName("Product Id"), PrimaryKey, ForeignKey(typeof(ProductRow)), LeftJoin("p"), Updatable(false)]
        [LookupEditor(typeof(ProductRow))]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        //[DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductRow)), LeftJoin("p")]
        //[LookupEditor(typeof(ProductRow))]
        //public Int32? ProductID
        //{
        //    get { return Fields.ProductID[this]; }
        //    set { Fields.ProductID[this] = value; }
        //}

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

        [DisplayName("Plan Price"), Size(19), Scale(4), NotNull]
        public Decimal? PlanPrice
        {
            get { return Fields.PlanPrice[this]; }
            set { Fields.PlanPrice[this] = value; }
        }

        [Origin("p"), MinSelectLevel(SelectLevel.List)]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [Origin("p")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [Origin("p")]
        public Int32? ProductSupplierID
        {
            get { return Fields.ProductSupplierID[this]; }
            set { Fields.ProductSupplierID[this] = value; }
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
            public SingleField Quantity;
            public SingleField ProductQuantity;
            public SingleField Reduction;
            public DecimalField PlanPrice;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ProductName;
            public BooleanField ProductDiscontinued;
            public Int32Field ProductSupplierID;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
        }
    }
}
