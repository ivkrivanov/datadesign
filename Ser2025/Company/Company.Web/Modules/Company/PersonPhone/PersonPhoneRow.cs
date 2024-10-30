using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[PersonPhone]")]
[DisplayName("Person Phone"), InstanceName("Person Phone")]
[ReadPermission(PermissionKeys.PersonPhone.View)]
[ModifyPermission(PermissionKeys.PersonPhone.Modify)]
[DeletePermission(PermissionKeys.PersonPhone.Delete)]
public sealed class PersonPhoneRow : LoggingRow<PersonPhoneRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jPhoneNumberType = nameof(jPhoneNumberType);

    [DisplayName("Business Entity"), PrimaryKey, NotNull, ForeignKey(typeof(PersonRow)), LeftJoin(jBusinessEntity), IdProperty]
    [TextualField(nameof(BusinessEntityPersonType)), ServiceLookupEditor(typeof(PersonRow))]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Phone Number"), Size(25), PrimaryKey, NotNull, QuickSearch, NameProperty]
    public string PhoneNumber { get => fields.PhoneNumber[this]; set => fields.PhoneNumber[this] = value; }

    [DisplayName("Phone Number Type"), PrimaryKey, NotNull, ForeignKey(typeof(PhoneNumberTypeRow)), LeftJoin(jPhoneNumberType)]
    [TextualField(nameof(PhoneNumberTypeName))]
    [ServiceLookupEditor(typeof(PhoneNumberTypeRow), Service = "Company/PhoneNumberType/List")]
    public int? PhoneNumberTypeId { get => fields.PhoneNumberTypeId[this]; set => fields.PhoneNumberTypeId[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ

    [DisplayName("Business Entity Person Type"), Expression($"{jBusinessEntity}.[PersonType]")]
    public string BusinessEntityPersonType { get => fields.BusinessEntityPersonType[this]; set => fields.BusinessEntityPersonType[this] = value; }

    [DisplayName("Phone Number Type Name"), Expression($"{jPhoneNumberType}.[Name]")]
    public string PhoneNumberTypeName { get => fields.PhoneNumberTypeName[this]; set => fields.PhoneNumberTypeName[this] = value; }

    public class RowFields : LoggingRowFields
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