using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[ContactType]")]
[DisplayName("Contact Type"), InstanceName("Contact Type")]
[ReadPermission("PermissionKeys.ContactType")]
[ModifyPermission("PermissionKeys.ContactType")]
[ServiceLookupPermission("PermissionKeys.ContactType")]
public sealed class ContactTypeRow : Administration.LoggingRow<ContactTypeRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Contact Type Id"), Identity, IdProperty]
    public int? ContactTypeId { get => fields.ContactTypeId[this]; set => fields.ContactTypeId[this] = value; }

    [DisplayName("Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public class RowFields : Administration.LoggingRowFields
    {
        public Int32Field ContactTypeId;
        public StringField Name;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}