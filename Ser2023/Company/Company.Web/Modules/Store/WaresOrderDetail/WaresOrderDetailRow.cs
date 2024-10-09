using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
//using System.ComponentModel.DataAnnotations.Schema;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresOrderDetails]")]
[DisplayName("Wares Order Details"), InstanceName("Wares Order Details")]
[ReadPermission(PermissionKeys.Wares.View)]
[ModifyPermission(PermissionKeys.Wares.Modify)]
[DeletePermission(PermissionKeys.Wares.Delete)]
public sealed class WaresOrderDetailRow : LoggingRow<WaresOrderDetailRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    const string jWatesOrder = nameof(jWatesOrder);
    const string jWares = nameof(jWares);

    [DisplayName("Id"), Column("DetailID"), Identity, IdProperty]
    public Int32? DetailId { get => Fields.DetailId[this]; set =>Fields.DetailId[this] = value; }

    #region WaresOrder

    [DisplayName("Wares Order"), Column("WaresOrderID"), PrimaryKey, ForeignKey(typeof(WaresOrderRow)), LeftJoin(jWatesOrder), Updatable(false)]
    public Int32? WaresOrderId { get => Fields.WaresOrderId[this]; set =>Fields.WaresOrderId[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.WaresOrderId))]
    public String WaresOrderShopId { get => Fields.WaresOrderShopId[this]; set =>Fields.WaresOrderShopId[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.CounterpartyId))]
    public String WaresOrderCounterpartyId { get => Fields.WaresOrderCounterpartyId[this]; set =>Fields.WaresOrderCounterpartyId[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.EmployeeId))]
    public Int32? WaresOrderEmployeeId {  get => Fields.WaresOrderEmployeeId[this]; set =>Fields.WaresOrderEmployeeId[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.ShipperId))]
    public Int32? WaresOrderShipperId { get => Fields.WaresOrderShipperId[this]; set =>Fields.WaresOrderShipperId[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.OperationTypeId))]
    public Int32? WaresOrderOperationTypeId { get => Fields.WaresOrderOperationTypeId[this]; set =>Fields.WaresOrderOperationTypeId[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.OpCode))]
    public Int16? WaresOrderOperationTypeOpCode { get => Fields.WaresOrderOperationTypeOpCode[this]; set =>Fields.WaresOrderOperationTypeOpCode[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.OrderDate))]
    public DateTime? WaresOrderOrderDate { get => Fields.WaresOrderOrderDate[this]; set =>Fields.WaresOrderOrderDate[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.RequiredDate))]
    public DateTime? WaresOrderRequiredDate { get => Fields.WaresOrderRequiredDate[this]; set =>Fields.WaresOrderRequiredDate[this] = value; }

    [Origin(jWatesOrder, nameof(WaresOrderRow.ShippedDate))]
    public DateTime? WaresOrderShippedDate { get => Fields.WaresOrderShippedDate[this]; set =>Fields.WaresOrderShippedDate[this] = value; }

    #endregion WaresOrder

    #region Wares

    [DisplayName("Wares"), ForeignKey(typeof(WaresRow)), LeftJoin(jWares), LookupInclude]
    [LookupEditor(typeof(WaresRow), InplaceAdd = true)]
    public Int32? WaresId { get => Fields.WaresId[this]; set =>Fields.WaresId[this] = value; }

    [Origin(jWares, nameof(WaresRow.WaresCode)), SortOrder(1)]
    [Column("WaresCode"), LookupInclude, MinSelectLevel(SelectLevel.List)]
    public String WaresCode { get => Fields.WaresCode[this]; set =>Fields.WaresCode[this] = value; }

    //[DisplayName("Wares Wares Barcode"), Expression("jWares.[WaresBarcode]")]
    //public String WaresWaresBarcode
    //{
    //    get => Fields.WaresWaresBarcode[this]; }
    //    set =>Fields.WaresWaresBarcode[this] = value; }
    //}

    //[DisplayName("Wares Wares Label"), Expression("jWares.[WaresLabel]")]
    //public String WaresWaresLabel
    //{
    //    get => Fields.WaresWaresLabel[this]; }
    //    set =>Fields.WaresWaresLabel[this] = value; }
    //}

    [Origin(jWares, nameof(WaresRow.WaresName)), MinSelectLevel(SelectLevel.List)]
    [Column("WaresName")]
    public String WaresName { get => Fields.WaresName[this]; set =>Fields.WaresName[this] = value; }

    [Origin(jWares, nameof(WaresRow.CounterpartyId))]
    public String WaresCounterpartyId { get => Fields.WaresCounterpartyId[this]; set =>Fields.WaresCounterpartyId[this] = value; }

    [Origin(jWares, nameof(WaresRow.CategoryId))]
    public Int32? WaresCategoryId { get => Fields.WaresCategoryId[this]; set =>Fields.WaresCategoryId[this] = value; }

    [Origin(jWares, nameof(WaresRow.MeasureId))]
    public Int32? WaresMeasureId { get => Fields.WaresMeasureId[this]; set =>Fields.WaresMeasureId[this] = value; }
    [Origin(jWares, nameof(WaresRow.MeasureName))]
    public String WaresMeasureName { get => Fields.WaresMeasureName[this]; set =>Fields.WaresMeasureName[this] = value; }

    [Origin(jWares, nameof(WaresRow.QuantityPerUnit))]
    public String WaresQuantityPerUnit { get => Fields.WaresQuantityPerUnit[this]; set =>Fields.WaresQuantityPerUnit[this] = value; }

    [Origin(jWares, nameof(WaresRow.UnitPrice))]
    public Decimal? WaresUnitPrice { get => Fields.WaresUnitPrice[this]; set =>Fields.WaresUnitPrice[this] = value; }

    #endregion Wares

    [DisplayName("Single Price"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? SinglePrice { get => Fields.SinglePrice[this]; set =>Fields.SinglePrice[this] = value; }

    [DisplayName("Sale Price"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? WaresSalePrice { get => Fields.WaresSalePrice[this]; set => Fields.WaresSalePrice[this] = value; }

    [DisplayName("Quantity"), NotNull, DefaultValue(1)]
    [AlignRight, DisplayFormat("#,##0.000")]
    public Single? Quantity { get => Fields.Quantity[this]; set =>Fields.Quantity[this] = value; }

    [DisplayName("Discount"), NotNull, DefaultValue(0)]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Single? Discount { get => Fields.Discount[this]; set =>Fields.Discount[this] = value; }

    [DisplayName("Line Total"), Expression("(t0.[SinglePrice] * t0.[Quantity] - t0.[Discount])")]
    [AlignRight, DisplayFormat("#,##0.0000"), MinSelectLevel(SelectLevel.List)]
    public Decimal? LineTotal { get => Fields.LineTotal[this]; set =>Fields.LineTotal[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => Fields.TenantId[this]; set =>Fields.TenantId[this] = value; }

    public Int32Field TenantIdField {  get => Fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => Fields.IsActive[this]; set =>Fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => Fields.IsActive; }

    #endregion Tenant & Activ

    public class RowFields : LoggingRowFields
    {
        public Int32Field WaresOrderId;
        public Int32Field WaresId;
        public SingleField Quantity;
        public DecimalField SinglePrice;
        public SingleField Discount;
        public Int32Field DetailId;

        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField WaresOrderShopId;
        public StringField WaresOrderCounterpartyId;
        public Int32Field WaresOrderEmployeeId;
        public Int32Field WaresOrderShipperId;
        public Int32Field WaresOrderOperationTypeId;
        public Int16Field WaresOrderOperationTypeOpCode;
        public DateTimeField WaresOrderOrderDate;
        public DateTimeField WaresOrderRequiredDate;
        public DateTimeField WaresOrderShippedDate;

        public StringField WaresCode;
        public StringField WaresName;
        //public Int32Field WaresSupplierId;
        public StringField WaresCounterpartyId;
        public Int32Field WaresCategoryId;
        public Int32Field WaresMeasureId;
        public StringField WaresMeasureName;
        public StringField WaresQuantityPerUnit;
        public DecimalField WaresUnitPrice;
        public DecimalField WaresSalePrice;
        //public BooleanField WaresDiscontinued;

        public DecimalField LineTotal;
    }
}

