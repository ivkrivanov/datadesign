
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductMovement Details]")]
    [DisplayName("Product Movement Details"), InstanceName("Product Movement Details")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ProductMovementDetailsRow : LoggingRow, IIdRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("ID"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        #region ProductMove

        [DisplayName("Product Move"), PrimaryKey, ForeignKey(typeof(ProductMovementRow)), LeftJoin("pm"), Updatable(false)]
        public Int32? ProductMoveID
        {
            get { return Fields.ProductMoveID[this]; }
            set { Fields.ProductMoveID[this] = value; }
        }

        [Origin("pm")]
        public String ProductMoveShopID
        {
            get { return Fields.ProductMoveShopID[this]; }
            set { Fields.ProductMoveShopID[this] = value; }
        }

        [Origin("pm")]
        public String ProductMoveCounterpartyID
        {
            get { return Fields.ProductMoveCounterpartyID[this]; }
            set { Fields.ProductMoveCounterpartyID[this] = value; }
        }

        [Origin("pm")]
        public Int32? ProductMoveEmployeeID
        {
            get { return Fields.ProductMoveEmployeeID[this]; }
            set { Fields.ProductMoveEmployeeID[this] = value; }
        }

        [Origin("pm")]
        public Int32? ProductMoveShipperID
        {
            get { return Fields.ProductMoveShipperID[this]; }
            set { Fields.ProductMoveShipperID[this] = value; }
        }

        [Origin("pm")]
        public Int32? ProductMoveOperationTypeID
        {
            get { return Fields.ProductMoveOperationTypeID[this]; }
            set { Fields.ProductMoveOperationTypeID[this] = value; }
        }

        [Origin("pm")]
        public Int16? ProductMoveOperationTypeOpCode
        {
            get { return Fields.ProductMoveOperationTypeOpCode[this]; }
            set { Fields.ProductMoveOperationTypeOpCode[this] = value; }
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

        [DisplayName("Product"), PrimaryKey, ForeignKey(typeof(ProductRow)), LeftJoin("p"), LookupInclude]
        [LookupEditor(typeof(ProductRow), InplaceAdd = true)]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
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
        public Int32? ProductSupplierID
        {
            get { return Fields.ProductSupplierID[this]; }
            set { Fields.ProductSupplierID[this] = value; }
        }

        [Origin("p")]
        public Int32? ProductCategoryID
        {
            get { return Fields.ProductCategoryID[this]; }
            set { Fields.ProductCategoryID[this] = value; }
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
        public Single? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Sale Price"), Scale(4), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? SalePrice
        {
            get { return Fields.SalePrice[this]; }
            set { Fields.SalePrice[this] = value; }
        }

        [DisplayName("Discount"), NotNull, DefaultValue(0)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
        }

        [DisplayName("Line Total"), Scale(4)]
        [Expression("(t0.[SalePrice] * t0.[Quantity] - t0.[Discount])")]
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
            get { return Fields.DetailID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductMovementDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ProductMoveID;
            public Int32Field ProductID;
            public SingleField Quantity;
            public DecimalField SalePrice;
            public SingleField Discount;
            public Int32Field DetailID;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ProductMoveShopID;
            public StringField ProductMoveCounterpartyID;
            public Int32Field ProductMoveEmployeeID;
            public Int32Field ProductMoveShipperID;
            public Int32Field ProductMoveOperationTypeID;
            public Int16Field ProductMoveOperationTypeOpCode;
            public DateTimeField ProductMoveOrderDate;
            public DateTimeField ProductMoveRequiredDate;
            public DateTimeField ProductMoveShippedDate;

            public StringField ProductCode;
            public StringField ProductName;
            public Int32Field ProductSupplierID;
            public Int32Field ProductCategoryID;
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
