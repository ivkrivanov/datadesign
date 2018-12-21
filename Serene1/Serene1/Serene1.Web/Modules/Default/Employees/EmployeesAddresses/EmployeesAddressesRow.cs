
namespace Serene1.Default.Employees.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Default"), TableName("[ldg].[EmployeesAddresses]")]
    [DisplayName("Employees Addresses"), InstanceName("Employees Addresses")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    //[LookupScript("Employees.EmployeesAddresses", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class EmployeesAddressesRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {

        [DisplayName("Employee Address Id"), Identity]
        public Int32? EmployeeAddressId
        {
            get { return Fields.EmployeeAddressId[this]; }
            set { Fields.EmployeeAddressId[this] = value; }
        }

        [DisplayName("Employee Id"), NotNull]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Address"), NotNull, ForeignKey("[ldg].[Addresses]", "AddressId"), LeftJoin("jAddress"), TextualField("Address")]
        public Int32? AddressId
        {
            get { return Fields.AddressId[this]; }
            set { Fields.AddressId[this] = value; }
        }

        [DisplayName("Address Type Id")]
        public Int16? AddressTypeId
        {
            get { return Fields.AddressTypeId[this]; }
            set { Fields.AddressTypeId[this] = value; }
        }

        #region Active

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }
        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Active

        #region Tenant

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            //set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        #endregion Tenant

        #region Fields
        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeAddressId; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.Address; }
        }


        #endregion Fields

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


        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeesAddressesRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            #region Employee Address
            public Int32Field EmployeeAddressId;
            public Int32Field EmployeeId;
            public Int32Field AddressId;
            public Int16Field AddressTypeId;
            public Int32Field TenantId;
            public Int16Field IsActive;
            #endregion Employee Address

            #region Address
            public StringField Address;
            public StringField AddressZipCode;
            public StringField AddressCity;
            public StringField AddressState;
            public StringField AddressCountry;
            #endregion Address
        }
    }
}
