
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CounterpartyDetails]")]
    [DisplayName("Counterparty Details"), InstanceName("Counterparty Details")]
    [ReadPermission(PermissionKeys.Counterparties.View)]
    [ModifyPermission(PermissionKeys.Counterparties.Modify)]
    [DeletePermission(PermissionKeys.Counterparties.Delete)]
    public sealed class CounterpartyDetailsRow : Row<CounterpartyDetailsRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey, IdProperty]
        public Int32? Id
        {
            get => Fields.Id[this]; 
            set =>Fields.Id[this] = value; 
        }

        [DisplayName("Last Contact Date")]
        public DateTime? LastContactDate
        {
            get => Fields.LastContactDate[this]; 
            set =>Fields.LastContactDate[this] = value; 
        }

        [DisplayName("Last Contacted By"), ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jLastContactedBy"), TextualField("LastContactedByLastName")]
        public Int32? LastContactedBy
        {
            get => Fields.LastContactedBy[this]; 
            set =>Fields.LastContactedBy[this] = value; 
        }

        [DisplayName("Email"), Size(100), QuickSearch, NameProperty]
        public String Email
        {
            get => Fields.Email[this]; 
            set =>Fields.Email[this] = value; 
        }

        [DisplayName("Send Bulletin"), NotNull]
        public Boolean? SendBulletin
        {
            get => Fields.SendBulletin[this]; 
            set =>Fields.SendBulletin[this] = value; 
        }

        [DisplayName("Last Contacted By Last Name"), Expression("jLastContactedBy.[LastName]")]
        public String LastContactedByLastName
        {
            get => Fields.LastContactedByLastName[this]; 
            set =>Fields.LastContactedByLastName[this] = value; 
        }

        [DisplayName("Last Contacted By First Name"), Expression("jLastContactedBy.[FirstName]")]
        public String LastContactedByFirstName
        {
            get => Fields.LastContactedByFirstName[this];
            set =>Fields.LastContactedByFirstName[this] = value; 
        }

        [DisplayName("Last Contacted By Title"), Expression("jLastContactedBy.[Title]")]
        public String LastContactedByTitle
        {
            get => Fields.LastContactedByTitle[this]; 
            set =>Fields.LastContactedByTitle[this] = value; 
        }

        [DisplayName("Last Contacted By Title Of Courtesy"), Expression("jLastContactedBy.[TitleOfCourtesy]")]
        public String LastContactedByTitleOfCourtesy
        {
            get => Fields.LastContactedByTitleOfCourtesy[this]; 
            set =>Fields.LastContactedByTitleOfCourtesy[this] = value; 
        }

        [DisplayName("Last Contacted By Birth Date"), Expression("jLastContactedBy.[BirthDate]")]
        public DateTime? LastContactedByBirthDate
        {
            get => Fields.LastContactedByBirthDate[this]; 
            set =>Fields.LastContactedByBirthDate[this] = value; 
        }

        [DisplayName("Last Contacted By Hire Date"), Expression("jLastContactedBy.[HireDate]")]
        public DateTime? LastContactedByHireDate
        {
            get => Fields.LastContactedByHireDate[this]; 
            set =>Fields.LastContactedByHireDate[this] = value; 
        }

        [DisplayName("Last Contacted By Address"), Expression("jLastContactedBy.[Address]")]
        public String LastContactedByAddress
        {
            get => Fields.LastContactedByAddress[this]; 
            set =>Fields.LastContactedByAddress[this] = value; 
        }

        [DisplayName("Last Contacted By City"), Expression("jLastContactedBy.[City]")]
        public String LastContactedByCity
        {
            get => Fields.LastContactedByCity[this]; 
            set =>Fields.LastContactedByCity[this] = value; 
        }

        [DisplayName("Last Contacted By Region"), Expression("jLastContactedBy.[Region]")]
        public String LastContactedByRegion
        {
            get => Fields.LastContactedByRegion[this]; 
            set =>Fields.LastContactedByRegion[this] = value; 
        }

        [DisplayName("Last Contacted By Postal Code"), Expression("jLastContactedBy.[PostalCode]")]
        public String LastContactedByPostalCode
        {
            get => Fields.LastContactedByPostalCode[this]; 
            set =>Fields.LastContactedByPostalCode[this] = value; 
        }

        [DisplayName("Last Contacted By Country"), Expression("jLastContactedBy.[Country]")]
        public String LastContactedByCountry
        {
            get => Fields.LastContactedByCountry[this]; 
            set =>Fields.LastContactedByCountry[this] = value; 
        }

        [DisplayName("Last Contacted By Home Phone"), Expression("jLastContactedBy.[HomePhone]")]
        public String LastContactedByHomePhone
        {
            get => Fields.LastContactedByHomePhone[this]; 
            set =>Fields.LastContactedByHomePhone[this] = value; 
        }

        [DisplayName("Last Contacted By Extension"), Expression("jLastContactedBy.[Extension]")]
        public String LastContactedByExtension
        {
            get => Fields.LastContactedByExtension[this]; 
            set =>Fields.LastContactedByExtension[this] = value; 
        }

        [DisplayName("Last Contacted By Photo"), Expression("jLastContactedBy.[Photo]")]
        public Stream LastContactedByPhoto
        {
            get => Fields.LastContactedByPhoto[this]; 
            set =>Fields.LastContactedByPhoto[this] = value; 
        }

        [DisplayName("Last Contacted By Notes"), Expression("jLastContactedBy.[Notes]")]
        public String LastContactedByNotes
        {
            get => Fields.LastContactedByNotes[this]; 
            set =>Fields.LastContactedByNotes[this] = value; 
        }

        [DisplayName("Last Contacted By Reports To"), Expression("jLastContactedBy.[ReportsTo]")]
        public Int32? LastContactedByReportsTo
        {
            get => Fields.LastContactedByReportsTo[this]; 
            set =>Fields.LastContactedByReportsTo[this] = value; 
        }

        [DisplayName("Last Contacted By Photo Path"), Expression("jLastContactedBy.[PhotoPath]")]
        public String LastContactedByPhotoPath
        {
            get => Fields.LastContactedByPhotoPath[this]; 
            set =>Fields.LastContactedByPhotoPath[this] = value; 
        }

        public CounterpartyDetailsRow() 
        { 
        }

        public CounterpartyDetailsRow(RowFields Fields)
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField LastContactDate;
            public Int32Field LastContactedBy;
            public StringField Email;
            public BooleanField SendBulletin;

            public StringField LastContactedByLastName;
            public StringField LastContactedByFirstName;
            public StringField LastContactedByTitle;
            public StringField LastContactedByTitleOfCourtesy;
            public DateTimeField LastContactedByBirthDate;
            public DateTimeField LastContactedByHireDate;
            public StringField LastContactedByAddress;
            public StringField LastContactedByCity;
            public StringField LastContactedByRegion;
            public StringField LastContactedByPostalCode;
            public StringField LastContactedByCountry;
            public StringField LastContactedByHomePhone;
            public StringField LastContactedByExtension;
            public StreamField LastContactedByPhoto;
            public StringField LastContactedByNotes;
            public Int32Field LastContactedByReportsTo;
            public StringField LastContactedByPhotoPath;
        }
    }
}