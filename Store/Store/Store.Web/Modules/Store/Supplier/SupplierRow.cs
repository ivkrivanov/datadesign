
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Suppliers]")]
    [DisplayName("Suppliers"), InstanceName("Supplier")]
    [ReadPermission(PermissionKeys.Supplier.View)]
    [ModifyPermission(PermissionKeys.Supplier.Modify)]
    [LookupScript("Store.Supplier", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    public sealed class SupplierRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Supplier ID"), Identity]
        public Int32? SupplierID
        {
            get { return Fields.SupplierID[this]; }
            set { Fields.SupplierID[this] = value; }
        }

        [DisplayName("STAT"), Column("SupplierSTAT"), Size(14), NotNull, QuickSearch]
        public String SupplierStat
        {
            get { return Fields.SupplierStat[this]; }
            set { Fields.SupplierStat[this] = value; }
        }

        [DisplayName("Company Name"), Size(40), NotNull]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("Contact Name"), Size(30)]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("Contact Title"), Size(30)]
        public String ContactTitle
        {
            get { return Fields.ContactTitle[this]; }
            set { Fields.ContactTitle[this] = value; }
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(15)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Country"), Size(15), LookupFiltering("Store.SupplierCountry")]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Fax"), Size(24)]
        public String Fax
        {
            get { return Fields.Fax[this]; }
            set { Fields.Fax[this] = value; }
        }

        [DisplayName("Email"), Size(100)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("URL")]
        public String HomePage
        {
            get { return Fields.HomePage[this]; }
            set { Fields.HomePage[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SupplierID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        #region Tenant & Activ

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

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Tenant & Activ

        public static readonly RowFields Fields = new RowFields().Init();

        public SupplierRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field SupplierID;
            public StringField SupplierStat;
            public StringField CompanyName;
            public StringField ContactName;
            public StringField ContactTitle;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField Phone;
            public StringField Fax;
            public StringField Email;
            public StringField HomePage;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;
        }
    }
}
