﻿
namespace Store.Store.Entities
{
    using Administration.Entities;
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
        public Int32? EmployeeId
        {
            get => Fields.EmployeeId[this];
            set => Fields.EmployeeId[this] = value;
        }

        [DisplayName("Last Name"), Size(20), NotNull, NameProperty]
        public String LastName
        {
            get => Fields.LastName[this];
            set => Fields.LastName[this] = value;
        }

        [DisplayName("First Name"), Size(10), NotNull]
        public String FirstName
        {
            get => Fields.FirstName[this];
            set => Fields.FirstName[this] = value;
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
        public String Title
        {
            get => Fields.Title[this];
            set => Fields.Title[this] = value;
        }

        [DisplayName("Title Of Courtesy"), Size(25)]
        public String TitleOfCourtesy
        {
            get => Fields.TitleOfCourtesy[this];
            set => Fields.TitleOfCourtesy[this] = value;
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get => Fields.BirthDate[this];
            set => Fields.BirthDate[this] = value;
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get => Fields.HireDate[this];
            set => Fields.HireDate[this] = value;
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get => Fields.Address[this];
            set => Fields.Address[this] = value;
        }

        [DisplayName("City"), Size(15)]
        public String City
        {
            get => Fields.City[this];
            set => Fields.City[this] = value;
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get => Fields.Region[this];
            set => Fields.Region[this] = value;
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get => Fields.PostalCode[this];
            set => Fields.PostalCode[this] = value;
        }

        [DisplayName("Country"), Size(15)]
        public String Country
        {
            get => Fields.Country[this];
            set => Fields.Country[this] = value;
        }

        [DisplayName("Home Phone"), Size(24)]
        public String HomePhone
        {
            get => Fields.HomePhone[this];
            set => Fields.HomePhone[this] = value;
        }

        [DisplayName("Extension"), Size(4)]
        public String Extension
        {
            get => Fields.Extension[this];
            set => Fields.Extension[this] = value;
        }

        [DisplayName("Photo")]
        public Stream Photo
        {
            get => Fields.Photo[this];
            set => Fields.Photo[this] = value;
        }

        [DisplayName("Notes"), Size(1073741823)]
        public String Notes
        {
            get => Fields.Notes[this];
            set => Fields.Notes[this] = value;
        }

        [DisplayName("Reports To"), ForeignKey(typeof(EmployeesRow)), LeftJoin("jReportsTo")]
        public Int32? ReportsTo
        {
            get => Fields.ReportsTo[this];
            set => Fields.ReportsTo[this] = value;
        }

        [DisplayName("Photo Path"), Size(255)]
        public String PhotoPath
        {
            get => Fields.PhotoPath[this];
            set => Fields.PhotoPath[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToLastName
        {
            get => Fields.ReportsToLastName[this];
            set => Fields.ReportsToLastName[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToFirstName
        {
            get => Fields.ReportsToFirstName[this];
            set => Fields.ReportsToFirstName[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToFullName
        {
            get => Fields.ReportsToFullName[this];
            set => Fields.ReportsToFullName[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToTitle
        {
            get => Fields.ReportsToTitle[this];
            set => Fields.ReportsToTitle[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToTitleOfCourtesy
        {
            get => Fields.ReportsToTitleOfCourtesy[this];
            set => Fields.ReportsToTitleOfCourtesy[this] = value;
        }

        [Origin("jReportsTo")]
        public DateTime? ReportsToBirthDate
        {
            get => Fields.ReportsToBirthDate[this];
            set => Fields.ReportsToBirthDate[this] = value;
        }

        [Origin("jReportsTo")]
        public DateTime? ReportsToHireDate
        {
            get => Fields.ReportsToHireDate[this];
            set => Fields.ReportsToHireDate[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToAddress
        {
            get => Fields.ReportsToAddress[this];
            set => Fields.ReportsToAddress[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToCity
        {
            get => Fields.ReportsToCity[this];
            set => Fields.ReportsToCity[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToRegion
        {
            get => Fields.ReportsToRegion[this];
            set => Fields.ReportsToRegion[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToPostalCode
        {
            get => Fields.ReportsToPostalCode[this];
            set => Fields.ReportsToPostalCode[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToCountry
        {
            get => Fields.ReportsToCountry[this];
            set => Fields.ReportsToCountry[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToHomePhone
        {
            get => Fields.ReportsToHomePhone[this];
            set => Fields.ReportsToHomePhone[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToExtension
        {
            get => Fields.ReportsToExtension[this];
            set => Fields.ReportsToExtension[this] = value;
        }

        [Origin("jReportsTo")]
        public Stream ReportsToPhoto
        {
            get => Fields.ReportsToPhoto[this];
            set => Fields.ReportsToPhoto[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToNotes
        {
            get => Fields.ReportsToNotes[this];
            set => Fields.ReportsToNotes[this] = value;
        }

        [Origin("jReportsTo")]
        public Int32? ReportsToReportsTo
        {
            get => Fields.ReportsToReportsTo[this];
            set => Fields.ReportsToReportsTo[this] = value;
        }

        [Origin("jReportsTo")]
        public String ReportsToPhotoPath
        {
            get => Fields.ReportsToPhotoPath[this];
            set => Fields.ReportsToPhotoPath[this] = value;
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
        {
        }

        public EmployeesRow(RowFields Fields)
            : base(Fields)
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
