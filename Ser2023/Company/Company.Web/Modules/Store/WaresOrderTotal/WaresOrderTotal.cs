using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresOrderTotal]")]
[DisplayName("Total"), InstanceName("Wares Order Total")]
[ReadPermission(PermissionKeys.Wares.View)]
[ModifyPermission(PermissionKeys.Wares.Modify)]
[DeletePermission(PermissionKeys.Wares.Delete)]
public sealed class WaresOrderTotalRow : Row<WaresOrderTotalRow.RowFields>, IIdRow
{
    [DisplayName("Wares Move Id"), Column("WaresMoveId"), PrimaryKey, IdProperty]
    public Int32? WaresOrderId { get => Fields.WaresOrderId[this]; set => Fields.WaresOrderId[this] = value; }

    [DisplayName("Value"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? Value { get => Fields.Value[this]; set => Fields.Value[this] = value; }

    [DisplayName("VAT"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? VAT { get => Fields.VAT[this]; set => Fields.VAT[this] = value; }
    [DisplayName("Total"), NotNull]
    [AlignRight, DisplayFormat("#,##0.0000")]
    public Decimal? Total { get => Fields.Total[this]; set => Fields.Total[this] = value ; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field WaresOrderId;
        public DecimalField Value;
        public DecimalField VAT;
        public DecimalField Total;
    }
}
