using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Default;

[ConnectionKey("Default"), Module("Default"), TableName("Tenants")]
[DisplayName("Tenants"), InstanceName("Tenants")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class TenantsRow : Row<TenantsRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Tenant Id"), Identity, IdProperty]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    [DisplayName("Tenant Name"), Size(100), NotNull, QuickSearch, NameProperty]
    public string TenantName { get => fields.TenantName[this]; set => fields.TenantName[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field TenantId;
        public StringField TenantName;

    }
}