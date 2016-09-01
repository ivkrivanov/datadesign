
namespace Ledger.HR.Entities
{
    using System;
    using System.ComponentModel;
    using Ledger.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;

    [ConnectionKey("Default"), DisplayName("EmployeesEmails"), InstanceName("EmployeeEmail"), TwoLevelCached]
    [ReadPermission(HR.PermissionKeys.HR.View)]
    [ModifyPermission(HR.PermissionKeys.HR.Modify)]
    public sealed class EmployeeEmailRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        #region EmployeeEmail

        [DisplayName("Employee Email Id"), Identity]
        public Int32? EmployeeEmailId
        {
            get { return Fields.EmployeeEmailId[this]; }
            set { Fields.EmployeeEmailId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[ldg].[Employees]", "EmployeeId")]
        [LeftJoin("jEmployee"), LookupInclude, TextualField("FullName")]
        [LookupEditor("HR.Employee", InplaceAdd = true, DialogType = "HR.Employee")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Email"), NotNull, ForeignKey("[ldg].[Emails]", "EmailId")]
        [LeftJoin("jEmail"), TextualField("EmailAddress")]
        [LookupEditor("Infra.Email", InplaceAdd = true, DialogType = "Infra.Email")]
        public Int32? EmailId
        {
            get { return Fields.EmailId[this]; }
            set { Fields.EmailId[this] = value; }
        }

        [DisplayName("Email Type"), Size(50), NotNull, QuickSearch]
        public String EmailType
        {
            get { return Fields.EmailType[this]; }
            set { Fields.EmailType[this] = value; }
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
            get { return Fields.EmployeeEmailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmailType; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }
        #endregion Special Fields

        #endregion EmployeeEmail

        #region Employee

        [DisplayName("First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Middle Name"), Expression("jEmployee.[MiddleName]")]
        public String EmployeeMiddleName
        {
            get { return Fields.EmployeeMiddleName[this]; }
            set { Fields.EmployeeMiddleName[this] = value; }
        }

        [DisplayName("Sur Name"), Expression("jEmployee.[SurName]")]
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

        [DisplayName("Gender"), Expression("jEmployee.[Gender]")]
        public Int16? EmployeeGender
        {
            get { return Fields.EmployeeGender[this]; }
            set { Fields.EmployeeGender[this] = value; }
        }

        [DisplayName("Egn"), Expression("jEmployee.[EGN]")]
        public String EmployeeEgn
        {
            get { return Fields.EmployeeEgn[this]; }
            set { Fields.EmployeeEgn[this] = value; }
        }

        [DisplayName("Hire Date"), Expression("jEmployee.[HireDate]")]
        public DateTime? EmployeeHireDate
        {
            get { return Fields.EmployeeHireDate[this]; }
            set { Fields.EmployeeHireDate[this] = value; }
        }

        [DisplayName("Length Of Service"), Expression("jEmployee.[LengthOfService]")]
        public DateTime? EmployeeLengthOfService
        {
            get { return Fields.EmployeeLengthOfService[this]; }
            set { Fields.EmployeeLengthOfService[this] = value; }
        }

        [DisplayName("Photo"), Expression("jEmployee.[Photo]")]
        public String EmployeePhoto
        {
            get { return Fields.EmployeePhoto[this]; }
            set { Fields.EmployeePhoto[this] = value; }
        }

        [DisplayName("Salary"), Expression("jEmployee.[Salary]")]
        public Double? EmployeeSalary
        {
            get { return Fields.EmployeeSalary[this]; }
            set { Fields.EmployeeSalary[this] = value; }
        }

        #endregion Employee

        #region Email

        [DisplayName("Email"), Expression("jEmail.[EmailAddress]")]
        public String EmailAddress
        {
            get { return Fields.EmailAddress[this]; }
            set { Fields.EmailAddress[this] = value; }
        }

        #endregion

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeEmailRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EmployeeEmailId;
            public Int32Field EmployeeId;
            public Int32Field EmailId;
            public StringField EmailType;
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

            public StringField EmailAddress;

            public RowFields()
                : base("[ldg].[EmployeesEmails]")
            {
                LocalTextPrefix = "HR.EmployeeEmail";
            }
        }
    }
}