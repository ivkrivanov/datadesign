using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[PersonPhone]")]
[DisplayName("Person Phone"), InstanceName("Person Phone")]
[ReadPermission("PermissionKeys.PersonPhone")]
[ModifyPermission("PermissionKeys.PersonPhone")]
public sealed class PersonPhoneRow : Administration.LoggingRow<PersonPhoneRow.RowFields>, IIdRow, INameRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jPhoneNumberType = nameof(jPhoneNumberType);

    [DisplayName("Business Entity"), PrimaryKey, NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jBusinessEntity), IdProperty]
    [TextualField(nameof(BusinessEntityPersonType)), LookupEditor(typeof(PersonRow), Async = true)]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Phone Number"), Size(25), PrimaryKey, NotNull, QuickSearch, NameProperty]
    public string PhoneNumber { get => fields.PhoneNumber[this]; set => fields.PhoneNumber[this] = value; }

    [DisplayName("Phone Number Type"), PrimaryKey, NotNull, ForeignKey(typeof(PhoneNumberTypeRow)), LeftJoin(jPhoneNumberType)]
    [TextualField(nameof(PhoneNumberTypeName)), ServiceLookupEditor(typeof(PhoneNumberTypeRow))]
    public int? PhoneNumberTypeId { get => fields.PhoneNumberTypeId[this]; set => fields.PhoneNumberTypeId[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    [DisplayName("Business Entity Person Type"), Expression($"{jBusinessEntity}.[PersonType]")]
    public string BusinessEntityPersonType { get => fields.BusinessEntityPersonType[this]; set => fields.BusinessEntityPersonType[this] = value; }

    [DisplayName("Phone Number Type Name"), Expression($"{jPhoneNumberType}.[Name]")]
    public string PhoneNumberTypeName { get => fields.PhoneNumberTypeName[this]; set => fields.PhoneNumberTypeName[this] = value; }

    public class RowFields : Administration.LoggingRowFields
    {
        public Int32Field BusinessEntityId;
        public StringField PhoneNumber;
        public Int32Field PhoneNumberTypeId;
        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField BusinessEntityPersonType;
        public StringField PhoneNumberTypeName;
    }
}