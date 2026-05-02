using Company.Administration.Entities;
namespace Company.Sales;

[ConnectionKey("Sales"), Module("Sales"), TableName("[sales].[OperationType]")]
[DisplayName("Operation Type"), InstanceName("Operation Type")]
[ReadPermission(SalesPermissionKeys.Currency.View)]
[ModifyPermission(SalesPermissionKeys.Currency.Modify)]
[DeletePermission(SalesPermissionKeys.Currency.Delete)]
[ServiceLookupPermission("SalesPermission:General")]
[LookupScript("Sales.OperationType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class OperationTypeRow : LoggingRow<OperationTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Operation Type Id"), Column("OperationTypeID"), Identity, IdProperty]
    public int? OperationTypeId { get => fields.OperationTypeId[this]; set => fields.OperationTypeId[this] = value; }

    [DisplayName("Op Code"), NotNull]
    public short? OpCode { get => fields.OpCode[this]; set => fields.OpCode[this] = value; }

    [DisplayName("Operation"), Size(30), NotNull, QuickSearch, NameProperty]
    public string Operation { get => fields.Operation[this]; set => fields.Operation[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ

    public class RowFields : LoggingRowFields
    {
        public Int32Field OperationTypeId;
        public Int16Field OpCode;
        public StringField Operation;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}