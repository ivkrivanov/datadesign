﻿
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresMovement Details]")]
    [DisplayName("Wares Movement Details"), InstanceName("Wares Movement Details")]
    [ReadPermission(PermissionKeys.Wares.View)]
    [ModifyPermission(PermissionKeys.Wares.Modify)]
    [DeletePermission(PermissionKeys.Wares.Delete)]
    public sealed class WaresMovementDetailsRow : LoggingRow, IIdRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("ID"), Identity]
        public Int32? DetailId
        {
            get => Fields.DetailId[this]; 
            set => Fields.DetailId[this] = value; 
        }

        #region WaresMove

        [DisplayName("Wares Move"), PrimaryKey, ForeignKey(typeof(WaresMovementRow)), LeftJoin("wm"), Updatable(false)]
        public Int32? WaresMoveId
        {
            get => Fields.WaresMoveId[this];
            set => Fields.WaresMoveId[this] = value; 
        }

        [Origin("wm")]
        public String WaresMoveShopId
        {
            get => Fields.WaresMoveShopId[this];
            set => Fields.WaresMoveShopId[this] = value; 
        }

        [Origin("wm")]
        public String WaresMoveCounterpartyId
        {
            get => Fields.WaresMoveCounterpartyId[this];
            set => Fields.WaresMoveCounterpartyId[this] = value; 
        }

        [Origin("wm")]
        public Int32? WaresMoveEmployeeId
        {
            get => Fields.WaresMoveEmployeeId[this];
            set => Fields.WaresMoveEmployeeId[this] = value;
        }

        //[Origin("wm")]
        //public Int32? WaresMoveShipperId
        //{
        //     get => Fields.WaresMoveShipperId[this]; }
        //    set => Fields.WaresMoveShipperId[this] = value; }
        //}

        [Origin("wm")]
        public Int32? WaresMoveOperationTypeId
        {
            get => Fields.WaresMoveOperationTypeId[this];
            set => Fields.WaresMoveOperationTypeId[this] = value;
        }

        //[Origin("wm")]
        //public Int16? WaresMoveOperationTypeOpCode
        //{
        //     get => Fields.WaresMoveOperationTypeOpCode[this]; }
        //    set => Fields.WaresMoveOperationTypeOpCode[this] = value; }
        //}

        [Origin("wm")]
        public DateTime? WaresMoveOrderDate
        {
            get => Fields.WaresMoveOrderDate[this]; 
            set => Fields.WaresMoveOrderDate[this] = value; 
        }

        [Origin("wm")]
        public DateTime? WaresMoveRequiredDate
        {
            get => Fields.WaresMoveRequiredDate[this]; 
            set => Fields.WaresMoveRequiredDate[this] = value; 
        }

        [Origin("wm")]
        public DateTime? WaresMoveShippedDate
        {
             get => Fields.WaresMoveShippedDate[this]; 
            set => Fields.WaresMoveShippedDate[this] = value; 
        }

        #endregion WaresMove

        #region Wares

        [DisplayName("Wares"), ForeignKey(typeof(WaresRow)), LeftJoin("w"), LookupInclude]
        [LookupEditor(typeof(WaresRow), InplaceAdd = true)]
        public Int32? WaresId
        {
            get => Fields.WaresId[this]; 
            set => Fields.WaresId[this] = value; 
        }

        [Origin("w"), SortOrder(1)]
        [Column("WaresCode"), LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String WaresCode
        {
            get => Fields.WaresCode[this]; 
            set => Fields.WaresCode[this] = value; 
        }

        //[DisplayName("Wares Wares Barcode"), Expression("jWares.[WaresBarcode]")]
        //public String WaresWaresBarcode
        //{
        //     get => Fields.WaresWaresBarcode[this]; }
        //    set => Fields.WaresWaresBarcode[this] = value; }
        //}

        //[DisplayName("Wares Wares Label"), Expression("jWares.[WaresLabel]")]
        //public String WaresWaresLabel
        //{
        //     get => Fields.WaresWaresLabel[this]; }
        //    set => Fields.WaresWaresLabel[this] = value; }
        //}

        [Origin("w"), MinSelectLevel(SelectLevel.List)]
        [Column("WaresName")]
        public String WaresName
        {
            get => Fields.WaresName[this]; 
            set => Fields.WaresName[this] = value; 
        }

        //[Origin("w")]
        //public Int32? WaresSupplierID
        //{
        //     get => Fields.WaresSupplierID[this]; }
        //    set => Fields.WaresSupplierID[this] = value; }
        //}

        [Origin("w")]
        public String WaresCounterpartyId
        {
            get => Fields.WaresCounterpartyId[this]; 
            set => Fields.WaresCounterpartyId[this] = value; 
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
        public String WaresMeasureName
        {
            get => Fields.WaresMeasureName[this]; 
            set => Fields.WaresMeasureName[this] = value; 
        }

        [Origin("w")]
        public String WaresQuantityPerUnit
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

        //[Origin("w")]
        //public Boolean? WaresDiscontinued
        //{
        //     get => Fields.WaresDiscontinued[this]; }
        //    set => Fields.WaresDiscontinued[this] = value; }
        //}

        #endregion Wares

        [DisplayName("Single Price"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? SinglePrice
        {
            get => Fields.SinglePrice[this]; 
            set => Fields.SinglePrice[this] = value; 
        }

        [DisplayName("Quantity"), NotNull, DefaultValue(1)]
        [AlignRight, DisplayFormat("#,##0.000")]
        public Decimal? Quantity
        {
            get => Fields.Quantity[this]; 
            set => Fields.Quantity[this] = value; 
        }

        [DisplayName("Discount"), NotNull, DefaultValue(0)]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Discount
        {
            get => Fields.Discount[this]; 
            set => Fields.Discount[this] = value; 
        }

        //[DisplayName("Line Value"), Expression("(t0.[SinglePrice] * t0.[Quantity] - t0.[Discount]) + (t0.[SinglePrice] * t0.[Quantity] - t0.[Discount]) * (0.2) / (1 + 0.2)")]
        [DisplayName("Value"), Expression("(t0.[SinglePrice] * t0.[Quantity] - t0.[Discount])")]
        [AlignRight, DisplayFormat("#,##0.0000"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineValue
        {
            get => Fields.LineValue[this];
            set => Fields.LineValue[this] = value; 
        }

        [DisplayName("VAT"), Expression("(t0.[SinglePrice] * t0.[Quantity] - t0.[Discount]) * (0.2)")]
        [AlignRight, DisplayFormat("#,##0.0000"), MinSelectLevel(SelectLevel.List)]
        public Decimal? LineVAT
        {
            get => Fields.LineVAT[this]; 
            set => Fields.LineVAT[this] = value; 
        }

        //[DisplayName("Line Total"), Expression("(t0.[SinglePrice] * t0.[Quantity] - t0.[Discount])")]
        [DisplayName("Total"), Expression("(t0.[SinglePrice] * t0.[Quantity] - t0.[Discount]) * (1.2)")]
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

        public WaresMovementDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field DetailId;
            public Int32Field WaresMoveId;
            public Int32Field WaresId;
            public DecimalField Quantity;
            public DecimalField SinglePrice;
            public DecimalField Discount;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField WaresMoveShopId;
            public StringField WaresMoveCounterpartyId;
            public Int32Field WaresMoveEmployeeId;
            //public Int32Field WaresMoveShipperId;
            public Int32Field WaresMoveOperationTypeId;
            //public Int16Field WaresMoveOperationTypeOpCode;
            public DateTimeField WaresMoveOrderDate;
            public DateTimeField WaresMoveRequiredDate;
            public DateTimeField WaresMoveShippedDate;

            public StringField WaresCode;
            public StringField WaresName;
            //public Int32Field WaresSupplierID;
            public StringField WaresCounterpartyId;
            public Int32Field WaresCategoryId;
            public Int32Field WaresMeasureId;
            public StringField WaresMeasureName;
            public StringField WaresQuantityPerUnit;
            public DecimalField WaresUnitPrice;
            //public BooleanField WaresDiscontinued;
            public DecimalField LineValue;
            public DecimalField LineVAT;
            public DecimalField LineTotal;
        }
    }
}
