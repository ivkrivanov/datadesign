
namespace Ledger.HR.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using Ledger.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Infra.Entities;

    [ConnectionKey("Default"), DisplayName("Employees"), InstanceName("Employees"), TwoLevelCached]
    [ReadPermission(HR.PermissionKeys.General)]
    [ModifyPermission(HR.PermissionKeys.General)]
    public sealed class EmployeeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        #region Employee
        [DisplayName("Employee Id"), Identity]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("First Name"), Size(50), QuickSearch]
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

        [DisplayName("Sur Name"), Size(50)]
        public String SurName
        {
            get { return Fields.SurName[this]; }
            set { Fields.SurName[this] = value; }
        }

        [DisplayName("Full Name"), Expression("CONCAT(T0.[FirstName], ' ', T0.[MiddleName], ' ', T0.[SurName])"), QuickSearch]
        public String FullName
        {
            get { return Fields.FullName[this]; }
            set { Fields.FullName[this] = value; }
        }

        [DisplayName("Gender"), NotNull]
        public Gender? Gender
        {
            get { return (Gender)Fields.Gender[this]; }
            set { Fields.Gender[this] = (Int16)value; }
        }

        [DisplayName("Egn"), Column("EGN"), Size(255), NotNull]
        public String Egn
        {
            get { return Fields.Egn[this]; }
            set { Fields.Egn[this] = value; }
        }

        [DisplayName("Hire Date")]
        public DateTime? HireDate
        {
            get { return Fields.HireDate[this]; }
            set { Fields.HireDate[this] = value; }
        }

        [DisplayName("Length Of Service")]
        public DateTime? LengthOfService
        {
            get { return Fields.LengthOfService[this]; }
            set { Fields.LengthOfService[this] = value; }
        }

        [DisplayName("Photo"), Size(255), ImageUploadEditor(FilenameFormat = "Employees/PhotoImage/~")]
        public String Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }

        [DisplayName("Salary"), DisplayFormat("#####0.00")]
        public Double? Salary
        {
            get { return Fields.Salary[this]; }
            set { Fields.Salary[this] = value; }
        }

        #endregion Employee

        #region Address

        [DisplayName("Address List"), MasterDetailRelation(foreignKey: "EmployeeId"), NotMapped]
        public List<EmployeeAddressRow> AddressList
        {
            get { return Fields.AddressList[this]; }
            set { Fields.AddressList[this] = value; }
        }

        #endregion Address

        #region Email

        [DisplayName("Email List"), MasterDetailRelation(foreignKey: "EmailId"), NotMapped]
        public List<EmployeeEmailRow> EmailList
        {
            get { return Fields.EmailList[this]; }
            set { Fields.EmailList[this] = value; }
        }

        #endregion Email

        #region Phone

        [DisplayName("Phone List"), MasterDetailRelation(foreignKey: "PhoneId"), NotMapped]
        public List<EmployeePhoneRow> PhoneList
        {
            get { return Fields.PhoneList[this]; }
            set { Fields.PhoneList[this] = value; }
        }

        #endregion Phone

        #region Notes

        [Infra.NotesEditor, NotMapped]
        public List<NoteRow> NotesList
        {
            get { return Fields.NotesList[this]; }
            set { Fields.NotesList[this] = value; }
        }
        #endregion Notes

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
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FullName; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EmployeeId;
            public StringField FirstName;
            public StringField MiddleName;
            public StringField SurName;
            public StringField FullName;
            public Int16Field Gender;
            public StringField Egn;
            public DateTimeField HireDate;
            public DateTimeField LengthOfService;
            public StringField Photo;
            public DoubleField Salary;
            public Int16Field IsActive;
            public Int32Field TenantId;

            public readonly RowListField<EmployeeAddressRow> AddressList;
            public readonly RowListField<EmployeeEmailRow> EmailList;
            public readonly RowListField<EmployeePhoneRow> PhoneList;

            public RowListField<NoteRow> NotesList;

            public RowFields()
                : base("[ldg].[Employees]")
            {
                LocalTextPrefix = "HR.Employee";
            }
        }
    }
}