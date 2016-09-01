

namespace Ledger.HR.Entities
{
    using System;
    using System.ComponentModel;
    using Ledger.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Employee Phones"), InstanceName("EmployeesPhones"), TwoLevelCached]
    [ReadPermission(HR.PermissionKeys.General)]
    [ModifyPermission(HR.PermissionKeys.General)]
    public sealed class EmployeePhoneRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        #region EmployeePhone

        [DisplayName("Employee Phone Id"), Identity]
        public Int32? EmployeePhoneId
        {
            get { return Fields.EmployeePhoneId[this]; }
            set { Fields.EmployeePhoneId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[ldg].[Employees]", "EmployeeId")]
        [LeftJoin("jEmployee"), TextualField("FullName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Phone"), NotNull, ForeignKey("[ldg].[Phones]", "PhoneId")]
        [LeftJoin("jPhone"), LookupInclude, TextualField("PhonePhoneNumber")]
        [LookupEditor("Infra.Phone", InplaceAdd = true, DialogType = "Infra.Phone")]
        public Int32? PhoneId
        {
            get { return Fields.PhoneId[this]; }
            set { Fields.PhoneId[this] = value; }
        }

        [DisplayName("Phone Type"), Size(50), NotNull, QuickSearch]
        public String PhoneType
        {
            get { return Fields.PhoneType[this]; }
            set { Fields.PhoneType[this] = value; }
        }

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
            get { return Fields.EmployeePhoneId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PhoneType; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Special Fields

        #endregion EmployeePhone

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

        [DisplayName("Full Name"), Expression("CONCAT(t0.[FirstName], ' ', t0.[MiddleName], ' ', t0.[SurName])"), QuickSearch]
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

        [DisplayName("Phone Phone Number"), Expression("jPhone.[PhoneNumber]")]
        public String PhonePhoneNumber
        {
            get { return Fields.PhonePhoneNumber[this]; }
            set { Fields.PhonePhoneNumber[this] = value; }
        }

        #endregion

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeePhoneRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EmployeePhoneId;
            public Int32Field EmployeeId;
            public Int32Field PhoneId;
            public StringField PhoneType;
            public Int32Field TenantId;
            public Int16Field IsActive;

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

            public StringField PhonePhoneNumber;

            public RowFields()
                : base("[ldg].[EmployeesPhones]")
            {
                LocalTextPrefix = "HR.EmployeePhone";
            }
        }
    }
}