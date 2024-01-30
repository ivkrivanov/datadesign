
namespace Company.Company.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Company"), Module("Company"), TableName("[person].[PersonView]")]
    [DisplayName("Person View"), InstanceName("Person View")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PersonViewRow : Row, IIdRow, INameRow
    {
        [DisplayName("Person Type"), Size(2), NotNull, QuickSearch]
        public String PersonType
        {
            get { return Fields.PersonType[this]; }
            set { Fields.PersonType[this] = value; }
        }

        [DisplayName("Title"), Size(8)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("First Name"), Size(50), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Middle Name"), Size(50), NotNull]
        public String MiddleName
        {
            get { return Fields.MiddleName[this]; }
            set { Fields.MiddleName[this] = value; }
        }

        [DisplayName("Last Name"), Size(50), NotNull]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("Suffix"), Size(10)]
        public String Suffix
        {
            get { return Fields.Suffix[this]; }
            set { Fields.Suffix[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Phone Number Type"), Size(50), NotNull]
        public String PhoneNumberType
        {
            get { return Fields.PhoneNumberType[this]; }
            set { Fields.PhoneNumberType[this] = value; }
        }

        [DisplayName("Address Type"), Size(50), NotNull]
        public String AddressType
        {
            get { return Fields.AddressType[this]; }
            set { Fields.AddressType[this] = value; }
        }

        [DisplayName("Address Line1"), Size(60), NotNull]
        public String AddressLine1
        {
            get { return Fields.AddressLine1[this]; }
            set { Fields.AddressLine1[this] = value; }
        }

        [DisplayName("Address Line2"), Size(60)]
        public String AddressLine2
        {
            get { return Fields.AddressLine2[this]; }
            set { Fields.AddressLine2[this] = value; }
        }

        [DisplayName("City"), Size(30), NotNull]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Postal Code"), Size(15), NotNull]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("State Province Code"), Size(3), NotNull]
        public String StateProvinceCode
        {
            get { return Fields.StateProvinceCode[this]; }
            set { Fields.StateProvinceCode[this] = value; }
        }

        [DisplayName("Country"), Size(50), NotNull]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PersonType; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PersonType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PersonViewRow()
            : base(Fields)
        {
        }

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
}
