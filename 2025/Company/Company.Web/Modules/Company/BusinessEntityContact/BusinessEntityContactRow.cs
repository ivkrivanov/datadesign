using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntityContact]")]
[DisplayName("Business Entity Contact"), InstanceName("Business Entity Contact")]
[ReadPermission("PermissionKeys.BusinessEntityContact")]
[ModifyPermission("PermissionKeys.BusinessEntityContact")]
public sealed class BusinessEntityContactRow : Administration.LoggingRow<BusinessEntityContactRow.RowFields>, IIdRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jPerson = nameof(jPerson);
    const string jContactType = nameof(jContactType);

    [DisplayName("Business Entity"), PrimaryKey, NotNull, ForeignKey(typeof(BusinessEntityRow)), LeftJoin(jBusinessEntity), IdProperty]
    [LookupEditor(typeof(BusinessEntityRow), Async = true)]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Person"), PrimaryKey, NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jPerson), TextualField(nameof(PersonType))]
    [LookupEditor(typeof(PersonRow), Async = true)]
    public int? PersonId { get => fields.PersonId[this]; set => fields.PersonId[this] = value; }

    [DisplayName("Contact Type"), PrimaryKey, NotNull, ForeignKey(typeof(ContactTypeRow)), LeftJoin(jContactType)]
    [TextualField(nameof(ContactTypeName)), ServiceLookupEditor(typeof(ContactTypeRow))]
    public int? ContactTypeId { get => fields.ContactTypeId[this]; set => fields.ContactTypeId[this] = value; }

    [DisplayName("Is Active"), NotNull]
    public short? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    [DisplayName("Tenant Id"), NotNull]
    public int? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    [DisplayName("Person Person Type"), Expression($"{jPerson}.[PersonType]")]
    public string PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }

    [DisplayName("Contact Type Name"), Expression($"{jContactType}.[Name]")]
    public string ContactTypeName { get => fields.ContactTypeName[this]; set => fields.ContactTypeName[this] = value; }

    public class RowFields : Administration.LoggingRowFields
    {
        public Int32Field BusinessEntityId;
        public Int32Field PersonId;
        public Int32Field ContactTypeId;
        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField PersonType;
        public StringField ContactTypeName;
    }
}