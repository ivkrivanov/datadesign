using Company.Administration.Entities;
namespace Company.Sales;

[ConnectionKey("Sales"), Module("Sales"), TableName("[account].[Accounts]")]
[DisplayName("Accounts"), InstanceName("Accounts")]
[ReadPermission(SalesPermissionKeys.Currency.View)]
[ModifyPermission(SalesPermissionKeys.Currency.Modify)]
[DeletePermission(SalesPermissionKeys.Currency.Delete)]
[ServiceLookupPermission("SalesPermission:General")]
[LookupScript("Sales.Accounts", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class AccountsRow : LoggingRow<AccountsRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jAccountType = nameof(jAccountType);

    [DisplayName("Account Id"), Identity, IdProperty]
    public int? AccountId { get => fields.AccountId[this]; set => fields.AccountId[this] = value; }

    [DisplayName("Account"), NotNull]
    public int? Account { get => fields.Account[this]; set => fields.Account[this] = value; }

    [DisplayName("Sub Account"), Column("Sub_Account"), NotNull]
    public int? SubAccount { get => fields.SubAccount[this]; set => fields.SubAccount[this] = value; }

    [DisplayName("Account Type"), Column("AccountTypeID"), NotNull, ForeignKey(typeof(AccountTypeRow)), LeftJoin(jAccountType)]
    [TextualField(nameof(AccountTypeDescription)), ServiceLookupEditor(typeof(AccountTypeRow))]
    public int? AccountTypeId { get => fields.AccountTypeId[this]; set => fields.AccountTypeId[this] = value; }

    [DisplayName("Description"), Size(1073741823), QuickSearch, NameProperty]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    [DisplayName("Start Date")]
    public DateTime? StartDate { get => fields.StartDate[this]; set => fields.StartDate[this] = value; }

    [DisplayName("End Date")]
    public DateTime? EndDate { get => fields.EndDate[this]; set => fields.EndDate[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ

    [DisplayName("Account Type Description"), Expression($"{jAccountType}.[Description]")]
    public string AccountTypeDescription { get => fields.AccountTypeDescription[this]; set => fields.AccountTypeDescription[this] = value; }

    public class RowFields : LoggingRowFields
    {
        public Int32Field AccountId;
        public Int32Field Account;
        public Int32Field SubAccount;
        public Int32Field AccountTypeId;
        public StringField Description;
        public DateTimeField StartDate;
        public DateTimeField EndDate;
        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField AccountTypeDescription;
    }
}