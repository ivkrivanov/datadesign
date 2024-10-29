namespace Company.Administration;

[ConnectionKey("Default"), Module("Administration"), TableName("[dbo].[Tenants]")]
[DisplayName("Tenants"), InstanceName("Tenant"), TwoLevelCached]
[ReadPermission(PermissionKeys.Tenants)]
[ModifyPermission(PermissionKeys.Tenants)]
[LookupScript(Permission = PermissionKeys.Tenants)]
public sealed class TenantRow : Row<TenantRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Tenant Id"), Identity, IdProperty]
    public Int32? TenantId { get => Fields.TenantId[this]; set => Fields.TenantId[this] = value; }

    [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public String TenantName { get => Fields.TenantName[this]; set => Fields.TenantName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field TenantId;
        public StringField TenantName;
    }
}
