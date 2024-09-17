
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Employees]")]
    [DisplayName("Employees"), InstanceName("Employees")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [DeletePermission(PermissionKeys.General)]
    [LookupScript("Store.Employees", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class EmployeesRow : LoggingRow<EmployeesRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Employee Id"), Column("EmployeeID"), Identity, IdProperty]
        public int? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Last Name"), Size(20), NotNull, QuickSearch, NameProperty]
        public string LastName
        {
            get => fields.LastName[this];
            set => fields.LastName[this] = value;
        }

        [DisplayName("First Name"), Size(10), NotNull]
        public string FirstName
        {
            get => fields.FirstName[this];
            set => fields.FirstName[this] = value;
        }

        [DisplayName("FullName"), QuickSearch]
        [Expression("CONCAT(T0.[FirstName], CONCAT(' ', T0.[LastName]))")]
        [Expression("(T0.FirstName || ' ' || T0.LastName)", Dialect = "Sqlite")]
        public String FullName
        {
            get => Fields.FullName[this];
            set => Fields.FullName[this] = value;
        }

        [DisplayName("Gender"), Expression("(CASE WHEN T0.[TitleOfCourtesy] LIKE '%s%' THEN 2 WHEN T0.[TitleOfCourtesy] LIKE '%Mr%' THEN 1 END)")]
        public Gender? Gender
        {
            get => (Gender?)Fields.Gender[this];
            set => Fields.Gender[this] = (Int32?)value;
        }

        [DisplayName("Title"), Size(30)]
        public string Title
        {
            get => fields.Title[this];
            set => fields.Title[this] = value;
        }

        [DisplayName("Title Of Courtesy"), Size(25)]
        public string TitleOfCourtesy
        {
            get => fields.TitleOfCourtesy[this];
            set => fields.TitleOfCourtesy[this] = value;
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get => fields.BirthDate[this];
            set => fields.BirthDate[this] = value;
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get => fields.HireDate[this];
            set => fields.HireDate[this] = value;
        }

        [DisplayName("Address"), Size(60)]
        public string Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("City"), Size(15)]
        public string City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("Region"), Size(15)]
        public string Region
        {
            get => fields.Region[this];
            set => fields.Region[this] = value;
        }

        [DisplayName("Postal Code"), Size(10)]
        public string PostalCode
        {
            get => fields.PostalCode[this];
            set => fields.PostalCode[this] = value;
        }

        [DisplayName("Country"), Size(15)]
        public string Country
        {
            get => fields.Country[this];
            set => fields.Country[this] = value;
        }

        [DisplayName("Home Phone"), Size(24)]
        public string HomePhone
        {
            get => fields.HomePhone[this];
            set => fields.HomePhone[this] = value;
        }

        [DisplayName("Extension"), Size(4)]
        public string Extension
        {
            get => fields.Extension[this];
            set => fields.Extension[this] = value;
        }

        [DisplayName("Photo"), Size(2147483647)]
        public Stream Photo
        {
            get => fields.Photo[this];
            set => fields.Photo[this] = value;
        }

        [DisplayName("Notes"), Size(1073741823)]
        public string Notes
        {
            get => fields.Notes[this];
            set => fields.Notes[this] = value;
        }

        [DisplayName("Reports To"), ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jReportsTo"), TextualField("ReportsToLastName")]
        public int? ReportsTo
        {
            get => fields.ReportsTo[this];
            set => fields.ReportsTo[this] = value;
        }

        [DisplayName("Photo Path"), Size(255)]
        public string PhotoPath
        {
            get => fields.PhotoPath[this];
            set => fields.PhotoPath[this] = value;
        }

        [DisplayName("Reports To Last Name"), Expression("jReportsTo.[LastName]")]
        public string ReportsToLastName
        {
            get => fields.ReportsToLastName[this];
            set => fields.ReportsToLastName[this] = value;
        }

        [DisplayName("Reports To First Name"), Expression("jReportsTo.[FirstName]")]
        public string ReportsToFirstName
        {
            get => fields.ReportsToFirstName[this];
            set => fields.ReportsToFirstName[this] = value;
        }

        [DisplayName("Reports To Full Name"), Expression("jReportsTo.[FullName]")]
        public String ReportsToFullName
        {
            get => Fields.ReportsToFullName[this];
            set => Fields.ReportsToFullName[this] = value;
        }
        [DisplayName("Reports To Title"), Expression("jReportsTo.[Title]")]
        public string ReportsToTitle
        {
            get => fields.ReportsToTitle[this];
            set => fields.ReportsToTitle[this] = value;
        }

        [DisplayName("Reports To Title Of Courtesy"), Expression("jReportsTo.[TitleOfCourtesy]")]
        public string ReportsToTitleOfCourtesy
        {
            get => fields.ReportsToTitleOfCourtesy[this];
            set => fields.ReportsToTitleOfCourtesy[this] = value;
        }

        [DisplayName("Reports To Birth Date"), Expression("jReportsTo.[BirthDate]")]
        public DateTime? ReportsToBirthDate
        {
            get => fields.ReportsToBirthDate[this];
            set => fields.ReportsToBirthDate[this] = value;
        }

        [DisplayName("Reports To Hire Date"), Expression("jReportsTo.[HireDate]")]
        public DateTime? ReportsToHireDate
        {
            get => fields.ReportsToHireDate[this];
            set => fields.ReportsToHireDate[this] = value;
        }

        [DisplayName("Reports To Address"), Expression("jReportsTo.[Address]")]
        public string ReportsToAddress
        {
            get => fields.ReportsToAddress[this];
            set => fields.ReportsToAddress[this] = value;
        }

        [DisplayName("Reports To City"), Expression("jReportsTo.[City]")]
        public string ReportsToCity
        {
            get => fields.ReportsToCity[this];
            set => fields.ReportsToCity[this] = value;
        }

        [DisplayName("Reports To Region"), Expression("jReportsTo.[Region]")]
        public string ReportsToRegion
        {
            get => fields.ReportsToRegion[this];
            set => fields.ReportsToRegion[this] = value;
        }

        [DisplayName("Reports To Postal Code"), Expression("jReportsTo.[PostalCode]")]
        public string ReportsToPostalCode
        {
            get => fields.ReportsToPostalCode[this];
            set => fields.ReportsToPostalCode[this] = value;
        }

        [DisplayName("Reports To Country"), Expression("jReportsTo.[Country]")]
        public string ReportsToCountry
        {
            get => fields.ReportsToCountry[this];
            set => fields.ReportsToCountry[this] = value;
        }

        [DisplayName("Reports To Home Phone"), Expression("jReportsTo.[HomePhone]")]
        public string ReportsToHomePhone
        {
            get => fields.ReportsToHomePhone[this];
            set => fields.ReportsToHomePhone[this] = value;
        }

        [DisplayName("Reports To Extension"), Expression("jReportsTo.[Extension]")]
        public string ReportsToExtension
        {
            get => fields.ReportsToExtension[this];
            set => fields.ReportsToExtension[this] = value;
        }

        [DisplayName("Reports To Photo"), Expression("jReportsTo.[Photo]")]
        public Stream ReportsToPhoto
        {
            get => fields.ReportsToPhoto[this];
            set => fields.ReportsToPhoto[this] = value;
        }

        [DisplayName("Reports To Notes"), Expression("jReportsTo.[Notes]")]
        public string ReportsToNotes
        {
            get => fields.ReportsToNotes[this];
            set => fields.ReportsToNotes[this] = value;
        }

        [DisplayName("Reports To"), Expression("jReportsTo.[ReportsTo]")]
        public int? ReportsToReportsTo
        {
            get => fields.ReportsToReportsTo[this];
            set => fields.ReportsToReportsTo[this] = value;
        }

        [DisplayName("Reports To Photo Path"), Expression("jReportsTo.[PhotoPath]")]
        public string ReportsToPhotoPath
        {
            get => fields.ReportsToPhotoPath[this];
            set => fields.ReportsToPhotoPath[this] = value;
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this];
            set => Fields.TenantId[this] = value;
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId;
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => Fields.IsActive[this];
            set => Fields.IsActive[this] = value;
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => Fields.IsActive;
        }

        #endregion Tenant & Activ


        public EmployeesRow()
            : base()
        {
        }

        public EmployeesRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EmployeeId;
            public StringField LastName;
            public StringField FirstName;
            public StringField FullName;
            public StringField Title;
            public StringField TitleOfCourtesy;
            public DateTimeField BirthDate;
            public DateTimeField HireDate;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField HomePhone;
            public StringField Extension;
            public StreamField Photo;
            public StringField Notes;
            public Int32Field ReportsTo;
            public StringField PhotoPath;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField ReportsToFullName;
            public StringField ReportsToLastName;
            public StringField ReportsToFirstName;
            public StringField ReportsToTitle;
            public StringField ReportsToTitleOfCourtesy;
            public DateTimeField ReportsToBirthDate;
            public DateTimeField ReportsToHireDate;
            public StringField ReportsToAddress;
            public StringField ReportsToCity;
            public StringField ReportsToRegion;
            public StringField ReportsToPostalCode;
            public StringField ReportsToCountry;
            public StringField ReportsToHomePhone;
            public StringField ReportsToExtension;
            public StreamField ReportsToPhoto;
            public StringField ReportsToNotes;
            public Int32Field ReportsToReportsTo;
            public StringField ReportsToPhotoPath;

            public Int32Field Gender;
        }
    }
}