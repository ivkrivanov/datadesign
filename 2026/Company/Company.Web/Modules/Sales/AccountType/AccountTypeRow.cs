using Company.Administration.Entities;

namespace Company.Sales;

[ConnectionKey("Sales"), Module("Sales"), TableName("[account].[AccountType]")]
[DisplayName("Account Type"), InstanceName("Account Type")]
[ReadPermission(SalesPermissionKeys.Currency.View)]
[ModifyPermission(SalesPermissionKeys.Currency.Modify)]
[DeletePermission(SalesPermissionKeys.Currency.Delete)]
[ServiceLookupPermission("SalesPermission:General")]
[LookupScript("Sales.AccountType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class AccountTypeRow : LoggingRow<AccountTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Account Type Id"), Column("AccountTypeID"), Identity, IdProperty]
    public int? AccountTypeId { get => fields.AccountTypeId[this]; set => fields.AccountTypeId[this] = value; }

    [DisplayName("Description"), Size(1073741823), QuickSearch, NameProperty]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

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
        public Int32Field AccountTypeId;
        public StringField Description;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}