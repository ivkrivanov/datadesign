
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CounterpartyDetails]")]
[DisplayName("Counterparty Details"), InstanceName("Counterparty Details")]
[ReadPermission(PermissionKeys.Counterparties.View)]
[ModifyPermission(PermissionKeys.Counterparties.Modify)]
[DeletePermission(PermissionKeys.Counterparties.Delete)]
public sealed class CounterpartyDetailsRow : Row<CounterpartyDetailsRow.RowFields>, IIdRow, INameRow
{
    const string jLastContactedBy = nameof(jLastContactedBy);

    [DisplayName("Id"), Column("ID"), PrimaryKey, NotNull, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Last Contact Date")]
    public DateTime? LastContactDate { get => fields.LastContactDate[this]; set => fields.LastContactDate[this] = value; }

    //[DisplayName("Last Contacted By"), ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin(jLastContactedBy), TextualField("LastContactedByLastName")]
    [DisplayName("Last Contacted By"), ForeignKey(typeof(EmployeesRow)), LeftJoin(jLastContactedBy), TextualField(nameof(LastContactedByFullName))]
    public int? LastContactedBy { get => fields.LastContactedBy[this]; set => fields.LastContactedBy[this] = value; }

    [DisplayName("Email"), Size(100), QuickSearch, NameProperty]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("Send Bulletin"), NotNull]
    public bool? SendBulletin { get => fields.SendBulletin[this]; set => fields.SendBulletin[this] = value; }

    //[DisplayName("Last Contacted By Last Name"), Origin(jLastContactedBy, nameof(EmployeesRow.LastName))]    // Expression(jLastContactedBy.[LastName])]
    //public string LastContactedByLastName { get => fields.LastContactedByLastName[this]; set => fields.LastContactedByLastName[this] = value; }

    //[DisplayName("Last Contacted By First Name"), Origin(jLastContactedBy, nameof(EmployeesRow.FirstName))] //Expression("jLastContactedBy.[FirstName]")]
    //public string LastContactedByFirstName { get => fields.LastContactedByFirstName[this]; set => fields.LastContactedByFirstName[this] = value; }

    [DisplayName("Last Contacted By First Name"), Origin(jLastContactedBy, nameof(EmployeesRow.FullName))] //Expression("jLastContactedBy.[FirstName]")]
    public string LastContactedByFullName { get => fields.LastContactedByFullName[this]; set => fields.LastContactedByFullName[this] = value; }

    [DisplayName("Last Contacted By Title"), Origin(jLastContactedBy, nameof(EmployeesRow.Title))] // Expression("jLastContactedBy.[Title]")]
    public string LastContactedByTitle { get => fields.LastContactedByTitle[this]; set => fields.LastContactedByTitle[this] = value; }

    [DisplayName("Last Contacted By Title Of Courtesy"), Origin(jLastContactedBy, nameof(EmployeesRow.TitleOfCourtesy))] // Expression("jLastContactedBy.[TitleOfCourtesy]")]
    public string LastContactedByTitleOfCourtesy { get => fields.LastContactedByTitleOfCourtesy[this]; set => fields.LastContactedByTitleOfCourtesy[this] = value; }

    [DisplayName("Last Contacted By Birth Date"), Origin(jLastContactedBy, nameof(EmployeesRow.BirthDate))] // Expression("jLastContactedBy.[BirthDate]")]
    public DateTime? LastContactedByBirthDate { get => fields.LastContactedByBirthDate[this]; set => fields.LastContactedByBirthDate[this] = value; }

    [DisplayName("Last Contacted By Hire Date"), Origin(jLastContactedBy, nameof(EmployeesRow.HireDate))] //Expression("jLastContactedBy.[HireDate]")]
    public DateTime? LastContactedByHireDate { get => fields.LastContactedByHireDate[this]; set => fields.LastContactedByHireDate[this] = value; }

    [DisplayName("Last Contacted By Address"), Origin(jLastContactedBy, nameof(EmployeesRow.Address))] // Expression("jLastContactedBy.[Address]")]
    public string LastContactedByAddress { get => fields.LastContactedByAddress[this]; set => fields.LastContactedByAddress[this] = value; }

    [DisplayName("Last Contacted By City"), Origin(jLastContactedBy, nameof(EmployeesRow.City))] // Expression("jLastContactedBy.[City]")]
    public string LastContactedByCity { get => fields.LastContactedByCity[this]; set => fields.LastContactedByCity[this] = value; }

    [DisplayName("Last Contacted By Region"), Origin(jLastContactedBy, nameof(EmployeesRow.Region))] // Expression("jLastContactedBy.[Region]")]
    public string LastContactedByRegion { get => fields.LastContactedByRegion[this]; set => fields.LastContactedByRegion[this] = value; }

    [DisplayName("Last Contacted By Postal Code"), Origin(jLastContactedBy, nameof(EmployeesRow.PostalCode))] // Expression("jLastContactedBy.[PostalCode]")]
    public string LastContactedByPostalCode { get => fields.LastContactedByPostalCode[this]; set => fields.LastContactedByPostalCode[this] = value; }

    [DisplayName("Last Contacted By Country"), Origin(jLastContactedBy, nameof(EmployeesRow.Country))] // Expression("jLastContactedBy.[Country]")]
    public string LastContactedByCountry { get => fields.LastContactedByCountry[this]; set => fields.LastContactedByCountry[this] = value; }

    [DisplayName("Last Contacted By Home Phone"), Origin(jLastContactedBy, nameof(EmployeesRow.HomePhone))] // Expression("jLastContactedBy.[HomePhone]")]
    public string LastContactedByHomePhone { get => fields.LastContactedByHomePhone[this]; set => fields.LastContactedByHomePhone[this] = value; }

    [DisplayName("Last Contacted By Extension"), Origin(jLastContactedBy, nameof(EmployeesRow.Extension))] // Expression("jLastContactedBy.[Extension]")]
    public string LastContactedByExtension { get => fields.LastContactedByExtension[this]; set => fields.LastContactedByExtension[this] = value; }

    [DisplayName("Last Contacted By Photo"), Origin(jLastContactedBy, nameof(EmployeesRow.Photo))] // Expression("jLastContactedBy.[Photo]")]
    public Stream LastContactedByPhoto { get => fields.LastContactedByPhoto[this]; set => fields.LastContactedByPhoto[this] = value; }

    [DisplayName("Last Contacted By Notes"), Origin(jLastContactedBy, nameof(EmployeesRow.Notes))] // Expression("jLastContactedBy.[Notes]")]
    public string LastContactedByNotes { get => fields.LastContactedByNotes[this]; set => fields.LastContactedByNotes[this] = value; }

    [DisplayName("Last Contacted By Reports To"), Origin(jLastContactedBy, nameof(EmployeesRow.ReportsTo))] // Expression("jLastContactedBy.[ReportsTo]")]
    public int? LastContactedByReportsTo { get => fields.LastContactedByReportsTo[this]; set => fields.LastContactedByReportsTo[this] = value; }

    [DisplayName("Last Contacted By Photo Path"), Origin(jLastContactedBy, nameof(EmployeesRow.PhotoPath))] // Expression("jLastContactedBy.[PhotoPath]")]
    public string LastContactedByPhotoPath { get => fields.LastContactedByPhotoPath[this]; set => fields.LastContactedByPhotoPath[this] = value; }

    //public CounterpartyDetailsRow()
    //    : base()
    //{
    //}
    //public CounterpartyDetailsRow(RowFields fields)
    //    : base(fields)
    //{
    //}

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public DateTimeField LastContactDate;
        public Int32Field LastContactedBy;
        public StringField Email;
        public BooleanField SendBulletin;

        //public StringField LastContactedByLastName;
        //public StringField LastContactedByFirstName;
        public StringField LastContactedByFullName;
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