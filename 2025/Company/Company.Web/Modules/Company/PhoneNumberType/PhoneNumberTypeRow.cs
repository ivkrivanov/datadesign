using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[PhoneNumberType]")]
[DisplayName("Phone Number Type"), InstanceName("Phone Number Type")]
[ReadPermission("PermissionKeys.PhoneNumberType")]
[ModifyPermission("PermissionKeys.PhoneNumberType")]
[ServiceLookupPermission("PermissionKeys.PhoneNumberType")]
public sealed class PhoneNumberTypeRow : Administration.LoggingRow<PhoneNumberTypeRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Phone Number Type Id"), Identity, IdProperty]
    public int? PhoneNumberTypeId { get => fields.PhoneNumberTypeId[this]; set => fields.PhoneNumberTypeId[this] = value; }

    [DisplayName("Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public class RowFields : Administration.LoggingRowFields
    {
        public Int32Field PhoneNumberTypeId;
        public StringField Name;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}