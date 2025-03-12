using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[AddressType]")]
[DisplayName("Address Type"), InstanceName("Address Type")]
[ReadPermission("PermissionKeys.AddressType")]
[ModifyPermission("PermissionKeys.AddressType")]
[ServiceLookupPermission("PermissionKeys.AddressType")]
public sealed class AddressTypeRow : LoggingRow<AddressTypeRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Address Type Id"), Identity, IdProperty]
    public int? AddressTypeId { get => fields.AddressTypeId[this]; set => fields.AddressTypeId[this] = value; }

    [DisplayName("Address Type Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string AddressTypeName { get => fields.AddressTypeName[this]; set => fields.AddressTypeName[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public class RowFields : LoggingRowFields
    {
        public Int32Field AddressTypeId;
        public StringField AddressTypeName;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}