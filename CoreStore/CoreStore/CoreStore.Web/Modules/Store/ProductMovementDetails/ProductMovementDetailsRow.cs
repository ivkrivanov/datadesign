
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductMovement Details]")]
    [DisplayName("Product Movement Details"), InstanceName("Product Movement Details")]
    [ReadPermission(PermissionKeys.Product.View)]
    [ModifyPermission(PermissionKeys.Product.Modify)]
    [DeletePermission(PermissionKeys.Product.Delete)]
    public sealed class ProductMovementDetailsRow : LoggingRow, IIdRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Detail Id"), Column("DetailID"), Identity]
        public Int32? DetailId
        {
            get { return Fields.DetailId[this]; }
            set { Fields.DetailId[this] = value; }
        }


        #region ProductMove

        [DisplayName("Product Move"), PrimaryKey, ForeignKey(typeof(ProductMovementRow)), LeftJoin("pm"), Updatable(false)]
        public Int32? ProductMoveId
        {
            get { return Fields.ProductMoveId[this]; }
            set { Fields.ProductMoveId[this] = value; }
        }
        [Origin("pm")]
        public String ProductMoveShopId
        {
            get { return Fields.ProductMoveShopId[this]; }
            set { Fields.ProductMoveShopId[this] = value; }
        }

        [Origin("pm")]
        public String ProductMoveCounterpartyId
        {
            get { return Fields.ProductMoveCounterpartyId[this]; }
            set { Fields.ProductMoveCounterpartyId[this] = value; }
        }

        [Origin("pm")]
        public Int32? ProductMoveEmployeeId
        {
            get { return Fields.ProductMoveEmployeeId[this]; }
            set { Fields.ProductMoveEmployeeId[this] = value; }
        }

        [Origin("pm")]
        public Int32? ProductMoveShipperId
        {
            get { return Fields.ProductMoveShipperId[this]; }
            set { Fields.ProductMoveShipperId[this] = value; }
        }

        [Origin("pm")]
        public Int32? ProductMoveOperationTypeId
        {
            get { return Fields.ProductMoveOperationTypeId[this]; }
            set { Fields.ProductMoveOperationTypeId[this] = value; }
        }

        [Origin("pm")]
        public DateTime? ProductMoveOrderDate
        {
            get { return Fields.ProductMoveOrderDate[this]; }
            set { Fields.ProductMoveOrderDate[this] = value; }
        }

        [Origin("pm")]
        public DateTime? ProductMoveRequiredDate
        {
            get { return Fields.ProductMoveRequiredDate[this]; }
            set { Fields.ProductMoveRequiredDate[this] = value; }
        }

        [Origin("pm")]
        public DateTime? ProductMoveShippedDate
        {
            get { return Fields.ProductMoveShippedDate[this]; }
            set { Fields.ProductMoveShippedDate[this] = value; }
        }

        #endregion ProductMove

        #region Products

        [DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductsRow)), LeftJoin("p"), LookupInclude]
        [LookupEditor(typeof(ProductsRow), InplaceAdd = true)]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [Origin("p"), MinSelectLevel(SelectLevel.List)]
        [Column("ProductCode")]
        public String ProductCode
        {
            get { return Fields.ProductCode[this]; }
            set { Fields.ProductCode[this] = value; }
        }

        [Origin("p"), MinSelectLevel(SelectLevel.List)]
        [Column("ProductName")]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [Origin("p")]
        public Int32? ProductCounterpartyId
        {
            get { return Fields.ProductCounterpartyId[this]; }
            set { Fields.ProductCounterpartyId[this] = value; }
        }

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

        #endregion Products


        [DisplayName("Quantity"), Scale(4), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Single Price"), Scale(4), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? SinglePrice
        {
            get { return Fields.SinglePrice[this]; }
            set { Fields.SinglePrice[this] = value; }
        }

        [DisplayName("Discount"), NotNull, DefaultValue(0)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Line Total"), Scale(4)]
        [Expression("(t0.[SinglePrice] * t0.[Quantity] - t0.[Discount])")]
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

        public ProductMovementDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ProductMoveId;
            public Int32Field ProductId;
            public DecimalField Quantity;
            public DecimalField SinglePrice;
            public SingleField Discount;
            public Int32Field DetailId;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ProductMoveShopId;
            public StringField ProductMoveCounterpartyId;
            public Int32Field ProductMoveEmployeeId;
            public Int32Field ProductMoveShipperId;
            public Int32Field ProductMoveOperationTypeId;
            public DateTimeField ProductMoveOrderDate;
            public DateTimeField ProductMoveRequiredDate;
            public DateTimeField ProductMoveShippedDate;

            public StringField ProductCode;
            public StringField ProductName;
            public Int32Field ProductCounterpartyId;
            public Int32Field ProductCategoryId;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;
            public Int16Field ProductReorderLevel;
            public BooleanField ProductDiscontinued;

            public DecimalField LineTotal;
        }
    }
}
