
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresMovement Details]")]
    [DisplayName("Wares Movement Details"), InstanceName("Wares Movement Details")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class WaresMovementDetailsRow : LoggingRow, IIdRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("ID"), Identity]
        public Int32? DetailID
        {
            get { return Fields.DetailID[this]; }
            set { Fields.DetailID[this] = value; }
        }

        #region WaresMove

        [DisplayName("Wares Move"), PrimaryKey, ForeignKey(typeof(WaresMovementRow)), LeftJoin("wm"), Updatable(false)]
        public Int32? WaresMoveID
        {
            get { return Fields.WaresMoveID[this]; }
            set { Fields.WaresMoveID[this] = value; }
        }

        [Origin("wm")]
        public String WaresMoveShopID
        {
            get { return Fields.WaresMoveShopID[this]; }
            set { Fields.WaresMoveShopID[this] = value; }
        }

        [Origin("wm")]
        public String WaresMoveCounterpartyID
        {
            get { return Fields.WaresMoveCounterpartyID[this]; }
            set { Fields.WaresMoveCounterpartyID[this] = value; }
        }

        [Origin("wm")]
        public Int32? WaresMoveEmployeeID
        {
            get { return Fields.WaresMoveEmployeeID[this]; }
            set { Fields.WaresMoveEmployeeID[this] = value; }
        }

        [Origin("wm")]
        public Int32? WaresMoveShipperID
        {
            get { return Fields.WaresMoveShipperID[this]; }
            set { Fields.WaresMoveShipperID[this] = value; }
        }

        [Origin("wm")]
        public Int32? WaresMoveOperationTypeID
        {
            get { return Fields.WaresMoveOperationTypeID[this]; }
            set { Fields.WaresMoveOperationTypeID[this] = value; }
        }

        [Origin("wm")]
        public DateTime? WaresMoveOrderDate
        {
            get { return Fields.WaresMoveOrderDate[this]; }
            set { Fields.WaresMoveOrderDate[this] = value; }
        }

        [Origin("wm")]
        public DateTime? WaresMoveRequiredDate
        {
            get { return Fields.WaresMoveRequiredDate[this]; }
            set { Fields.WaresMoveRequiredDate[this] = value; }
        }

        [Origin("wm")]
        public DateTime? WaresMoveShippedDate
        {
            get { return Fields.WaresMoveShippedDate[this]; }
            set { Fields.WaresMoveShippedDate[this] = value; }
        }

        #endregion WaresMove

        #region Wares

        [DisplayName("Wares"), PrimaryKey, ForeignKey(typeof(WaresRow)), LeftJoin("w")]
        [LookupEditor(typeof(WaresRow))]
        public Int32? WaresID
        {
            get { return Fields.WaresID[this]; }
            set { Fields.WaresID[this] = value; }
        }

        [Origin("w")]
        public String WaresWaresCode
        {
            get { return Fields.WaresWaresCode[this]; }
            set { Fields.WaresWaresCode[this] = value; }
        }

        //[DisplayName("Wares Wares Barcode"), Expression("jWares.[WaresBarcode]")]
        //public String WaresWaresBarcode
        //{
        //    get { return Fields.WaresWaresBarcode[this]; }
        //    set { Fields.WaresWaresBarcode[this] = value; }
        //}

        //[DisplayName("Wares Wares Label"), Expression("jWares.[WaresLabel]")]
        //public String WaresWaresLabel
        //{
        //    get { return Fields.WaresWaresLabel[this]; }
        //    set { Fields.WaresWaresLabel[this] = value; }
        //}

        [Origin("w"), MinSelectLevel(SelectLevel.List)]
        public String WaresWaresName
        {
            get { return Fields.WaresWaresName[this]; }
            set { Fields.WaresWaresName[this] = value; }
        }

        [Origin("w")]
        public Int32? WaresSupplierID
        {
            get { return Fields.WaresSupplierID[this]; }
            set { Fields.WaresSupplierID[this] = value; }
        }

        [Origin("w")]
        public String WaresCounterpartyID
        {
            get { return Fields.WaresCounterpartyID[this]; }
            set { Fields.WaresCounterpartyID[this] = value; }
        }

        [Origin("w")]
        public Int32? WaresCategoryID
        {
            get { return Fields.WaresCategoryID[this]; }
            set { Fields.WaresCategoryID[this] = value; }
        }

        [Origin("w")]
        public Int32? WaresMeasureID
        {
            get { return Fields.WaresMeasureID[this]; }
            set { Fields.WaresMeasureID[this] = value; }
        }

        [Origin("w")]
        public String WaresQuantityPerUnit
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

        #endregion Wares


        [DisplayName("Quantity"), NotNull]
        public Single? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Income Price"), Size(19), Scale(4), NotNull]
        public Decimal? IncomePrice
        {
            get { return Fields.IncomePrice[this]; }
            set { Fields.IncomePrice[this] = value; }
        }

        [DisplayName("Sale Price"), Size(19), Scale(4), NotNull]
        public Decimal? SalePrice
        {
            get { return Fields.SalePrice[this]; }
            set { Fields.SalePrice[this] = value; }
        }

        [DisplayName("Single Price"), Size(19), Scale(4), NotNull]
        public Decimal? SinglePrice
        {
            get { return Fields.SinglePrice[this]; }
            set { Fields.SinglePrice[this] = value; }
        }

        [DisplayName("Discount"), NotNull]
        public Single? Discount
        {
            get { return Fields.Discount[this]; }
            set { Fields.Discount[this] = value; }
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
            get { return Fields.WaresMoveID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresMovementDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        { 
            public Int32Field WaresMoveID;
            public Int32Field WaresID;
            public SingleField Quantity;
            public DecimalField IncomePrice;
            public DecimalField SalePrice;
            public DecimalField SinglePrice;
            public SingleField Discount;
            public Int32Field DetailID;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField WaresMoveShopID;
            public StringField WaresMoveCounterpartyID;
            public Int32Field WaresMoveEmployeeID;
            public Int32Field WaresMoveShipperID;
            public Int32Field WaresMoveOperationTypeID;
            public DateTimeField WaresMoveOrderDate;
            public DateTimeField WaresMoveRequiredDate;
            public DateTimeField WaresMoveShippedDate;

            public StringField WaresWaresCode;
            public StringField WaresWaresName;
            public Int32Field WaresSupplierID;
            public StringField WaresCounterpartyID;
            public Int32Field WaresCategoryID;
            public Int32Field WaresMeasureID;
            public StringField WaresQuantityPerUnit;
            public DecimalField WaresUnitPrice;
            public BooleanField WaresDiscontinued;
        }
    }
}
