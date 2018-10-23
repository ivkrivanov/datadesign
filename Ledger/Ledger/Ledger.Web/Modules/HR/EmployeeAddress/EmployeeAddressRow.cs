
namespace Ledger.HR.Entities
{
    using System;
    using System.ComponentModel;
    using Ledger.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System.IO;
    using Ledger.Infra.Entities;

    [ConnectionKey("Default"), DisplayName("Employee Addresses"), InstanceName("EmployeesAddresses"), TwoLevelCached]
    [ReadPermission(HR.PermissionKeys.HR.View)]
    [ModifyPermission(HR.PermissionKeys.HR.Modify)]
    [LookupScript("HR.EmployeeAddress")]
    public sealed class EmployeeAddressRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        #region EmployeeAddress

        [DisplayName("Employee Address Id"), Identity, LookupInclude]
        public Int32? EmployeeAddressId
        {
            get { return Fields.EmployeeAddressId[this]; }
            set { Fields.EmployeeAddressId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[ldg].[Employees]", "EmployeeId")]
        [LeftJoin("jEmployee"), TextualField("FullName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Address"), NotNull, ForeignKey("[ldg].[Addresses]", "AddressId"), LeftJoin("jAddress"), LookupInclude]
        [LinkingSetRelation(typeof(AddressesRow), "EmployeeAddressId", "AddressId")]
        //[TextualField("StreetAddress")]
        [LookupEditor(typeof(AddressesRow), InplaceAdd = true)] //, DialogType = "Infra.Addresses")]
        public Int32? AddressId
        {
            get { return Fields.AddressId[this]; }
            set { Fields.AddressId[this] = value; }
        }

        [DisplayName("Address Type"), Size(50), QuickSearch]
        public String AddressType
        {
            get { return Fields.AddressType[this]; }
            set { Fields.AddressType[this] = value; }
        }

        [DisplayName("Address Type"), Size(50)]
        public AddressTypeId? AddressTypeId
        {
            get { return (AddressTypeId?)Fields.AddressTypeId[this]; }
            set { Fields.AddressTypeId[this] = (Int16?)value; }
        }

        #endregion EmployeeAddress

        #region Special Fields

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeAddressId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.AddressType; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Special Fields

        #region Employee

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Employee Middle Name"), Expression("jEmployee.[MiddleName]")]
        public String EmployeeMiddleName
        {
            get { return Fields.EmployeeMiddleName[this]; }
            set { Fields.EmployeeMiddleName[this] = value; }
        }

        [DisplayName("Employee Sur Name"), Expression("jEmployee.[SurName]")]
        public String EmployeeSurName
        {
            get { return Fields.EmployeeSurName[this]; }
            set { Fields.EmployeeSurName[this] = value; }
        }

        [DisplayName("Full Name"), Expression("CONCAT(jEmployee.[FirstName], ' ', jEmployee.[MiddleName], ' ', jEmployee.[SurName])"), QuickSearch]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Employee Gender"), Expression("jEmployee.[Gender]")]
        public Int16? EmployeeGender
        {
            get { return Fields.EmployeeGender[this]; }
            set { Fields.EmployeeGender[this] = value; }
        }

        [DisplayName("Employee Egn"), Expression("jEmployee.[EGN]")]
        public String EmployeeEgn
        {
            get { return Fields.EmployeeEgn[this]; }
            set { Fields.EmployeeEgn[this] = value; }
        }

        [DisplayName("Employee Hire Date"), Expression("jEmployee.[HireDate]")]
        public DateTime? EmployeeHireDate
        {
            get { return Fields.EmployeeHireDate[this]; }
            set { Fields.EmployeeHireDate[this] = value; }
        }

        [DisplayName("Employee Length Of Service"), Expression("jEmployee.[LengthOfService]")]
        public DateTime? EmployeeLengthOfService
        {
            get { return Fields.EmployeeLengthOfService[this]; }
            set { Fields.EmployeeLengthOfService[this] = value; }
        }

        [DisplayName("Employee Photo"), Expression("jEmployee.[Photo]")]
        public String EmployeePhoto
        {
            get { return Fields.EmployeePhoto[this]; }
            set { Fields.EmployeePhoto[this] = value; }
        }

        [DisplayName("Employee Salary"), Expression("jEmployee.[Salary]")]
        public Double? EmployeeSalary
        {
            get { return Fields.EmployeeSalary[this]; }
            set { Fields.EmployeeSalary[this] = value; }
        }

        #endregion Employee

        #region Address

        [DisplayName("Address"), Expression("jAddress.[Address]")]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Address Zip Code"), Expression("jAddress.[ZipCode]")]
        public String AddressZipCode
        {
            get { return Fields.AddressZipCode[this]; }
            set { Fields.AddressZipCode[this] = value; }
        }

        [DisplayName("Address City"), Expression("jAddress.[City]")]
        public String AddressCity
        {
            get { return Fields.AddressCity[this]; }
            set { Fields.AddressCity[this] = value; }
        }

        [DisplayName("Address State"), Expression("jAddress.[State]")]
        public String AddressState
        {
            get { return Fields.AddressState[this]; }
            set { Fields.AddressState[this] = value; }
        }

        [DisplayName("Address Country"), Expression("jAddress.[Country]")]
        public String AddressCountry
        {
            get { return Fields.AddressCountry[this]; }
            set { Fields.AddressCountry[this] = value; }
        }

        [DisplayName("Street Address"), Expression("CONCAT(jAddress.[Address],' ', jAddress.[City], ' ', jAddress.[Country])")]
        [MinSelectLevel(SelectLevel.List)]
        public String StreetAddress
        {
            get { return Fields.StreetAddress[this]; }
            set { Fields.StreetAddress[this] = value; }
        }

        #endregion Address


        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeAddressRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            //EmployeeAddress
            public Int32Field EmployeeAddressId;
            public Int32Field EmployeeId;
            public Int32Field AddressId;
            public StringField AddressType;
            public Int16Field AddressTypeId;
            public Int32Field TenantId;
            public Int16Field IsActive;
            
            //Employee
            public StringField EmployeeFirstName;
            public StringField EmployeeMiddleName;
            public StringField EmployeeSurName;
            public StringField FullName;
            public Int16Field EmployeeGender;
            public StringField EmployeeEgn;
            public DateTimeField EmployeeHireDate;
            public DateTimeField EmployeeLengthOfService;
            public StringField EmployeePhoto;
            public DoubleField EmployeeSalary;

            //Address
            public StringField Address;
            public StringField AddressZipCode;
            public StringField AddressCity;
            public StringField AddressState;
            public StringField AddressCountry;
            public StringField StreetAddress;


            public RowFields()
                : base("[ldg].[EmployeesAddresses]")
            {
                LocalTextPrefix = "HR.EmployeeAddress";
            }
        }
    }
}