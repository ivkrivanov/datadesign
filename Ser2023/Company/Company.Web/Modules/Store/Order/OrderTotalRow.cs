using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[OrderTotal]")]
[DisplayName("Total"), InstanceName("Order Total")]
[ReadPermission(PermissionKeys.Product.View)]
[ModifyPermission(PermissionKeys.Product.Modify)]
[DeletePermission(PermissionKeys.Product.Delete)]
public sealed class OrderTotalRow : Row<OrderTotalRow.RowFields>, IIdRow
{
    [DisplayName("Order Id"), Column("OrderId"), PrimaryKey, IdProperty]
    public Int32? OrderId { get => Fields.OrderId[this]; set => Fields.OrderId[this] = value; }

    [DisplayName("Value"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? Value { get => Fields.Value[this]; set => Fields.Value[this] = value; }

    [DisplayName("VAT"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? VAT { get => Fields.VAT[this]; set => Fields.VAT[this] = value; }

    [DisplayName("Total"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? Total { get => Fields.Total[this]; set => Fields.Total[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field OrderId;
        public DecimalField Value;
        public DecimalField VAT;
        public DecimalField Total;
    }
}