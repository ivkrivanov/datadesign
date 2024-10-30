using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntityContact]")]
[DisplayName("Business Entity Contact"), InstanceName("Business Entity Contact")]
[ReadPermission(PermissionKeys.BusinessEntityContact.View)]
[ModifyPermission(PermissionKeys.BusinessEntityContact.Modify)]
[DeletePermission(PermissionKeys.BusinessEntityContact.Delete)]
public sealed class BusinessEntityContactRow : LoggingRow<BusinessEntityContactRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jPerson = nameof(jPerson);
    const string jContactType = nameof(jContactType);

    [DisplayName("Business Entity"), PrimaryKey, NotNull, ForeignKey(typeof(BusinessEntityRow)), LeftJoin(jBusinessEntity), IdProperty]
    [ServiceLookupEditor(typeof(BusinessEntityRow))]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Person"), PrimaryKey, NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jPerson), TextualField(nameof(PersonType))]
    [ServiceLookupEditor(typeof(PersonRow))]
    public int? PersonId { get => fields.PersonId[this]; set => fields.PersonId[this] = value; }

    [DisplayName("Contact Type"), PrimaryKey, NotNull, ForeignKey(typeof(ContactTypeRow)), LeftJoin(jContactType)]
    [TextualField(nameof(ContactTypeName)), ServiceLookupEditor(typeof(ContactTypeRow), Service = "Company/ContactType/List")]
    public int? ContactTypeId { get => fields.ContactTypeId[this]; set => fields.ContactTypeId[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ

    [DisplayName("Person Person Type"), Expression($"{jPerson}.[PersonType]")]
    public string PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }

    [DisplayName("Contact Type Name"), Expression($"{jContactType}.[Name]")]
    public string ContactTypeName { get => fields.ContactTypeName[this]; set => fields.ContactTypeName[this] = value; }

    public class RowFields : LoggingRowFields
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