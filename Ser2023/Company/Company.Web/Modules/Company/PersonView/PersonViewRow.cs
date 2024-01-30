using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[PersonView]")]
[DisplayName("Person View"), InstanceName("Person View")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class PersonViewRow : Row<PersonViewRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Person Type"), Size(2), NotNull, IdProperty, QuickSearch, NameProperty]
    public string PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }

    [DisplayName("Title"), Size(8)]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("First Name"), Size(50), NotNull]
    public string FirstName { get => fields.FirstName[this]; set => fields.FirstName[this] = value; }

    [DisplayName("Middle Name"), Size(50), NotNull]
    public string MiddleName { get => fields.MiddleName[this]; set => fields.MiddleName[this] = value; }

    [DisplayName("Last Name"), Size(50), NotNull]
    public string LastName { get => fields.LastName[this]; set => fields.LastName[this] = value; }

    [DisplayName("Suffix"), Size(10)]
    public string Suffix { get => fields.Suffix[this]; set => fields.Suffix[this] = value; }

    [DisplayName("Name"), Size(50), NotNull]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    [DisplayName("Phone Number Type"), Size(50), NotNull]
    public string PhoneNumberType { get => fields.PhoneNumberType[this]; set => fields.PhoneNumberType[this] = value; }

    [DisplayName("Address Type"), Size(50), NotNull]
    public string AddressType { get => fields.AddressType[this]; set => fields.AddressType[this] = value; }

    [DisplayName("Address Line1"), Size(60), NotNull]
    public string AddressLine1 { get => fields.AddressLine1[this]; set => fields.AddressLine1[this] = value; }

    [DisplayName("Address Line2"), Size(60)]
    public string AddressLine2 { get => fields.AddressLine2[this]; set => fields.AddressLine2[this] = value; }

    [DisplayName("City"), Size(30), NotNull]
    public string City { get => fields.City[this]; set => fields.City[this] = value; }

    [DisplayName("Postal Code"), Size(15), NotNull]
    public string PostalCode { get => fields.PostalCode[this]; set => fields.PostalCode[this] = value; }

    [DisplayName("State Province Code"), Size(3), NotNull]
    public string StateProvinceCode { get => fields.StateProvinceCode[this]; set => fields.StateProvinceCode[this] = value; }

    [DisplayName("Country"), Size(50), NotNull]
    public string Country { get => fields.Country[this]; set => fields.Country[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public StringField PersonType;
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField Suffix;
        public StringField Name;
        public StringField PhoneNumberType;
        public StringField AddressType;
        public StringField AddressLine1;
        public StringField AddressLine2;
        public StringField City;
        public StringField PostalCode;
        public StringField StateProvinceCode;
        public StringField Country;

    }
}