
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Org.BouncyCastle.Crypto.Generators;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Shops]")]
    [DisplayName("Shops"), InstanceName("Shops")]
    [ReadPermission(PermissionKeys.Shops.View)]
    [ModifyPermission(PermissionKeys.Shops.Modify)]
    [DeletePermission(PermissionKeys.Shops.Delete)]
    [LookupScript(typeof(Lookups.ShopsLookup))]
    //[LookupScript("Store.Shops", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ShopsRow : LoggingRow<ShopsRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public int? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Shop Id"), Column("ShopID"), Size(14), PrimaryKey, NotNull, QuickSearch, NameProperty]
        public string ShopId
        {
            get => fields.ShopId[this];
            set => fields.ShopId[this] = value;
        }

        [DisplayName("Shop Name"), Size(40), NotNull]
        public string ShopName
        {
            get => fields.ShopName[this];
            set => fields.ShopName[this] = value;
        }

        [DisplayName("Contact Name"), Size(30)]
        public string ContactName
        {
            get => fields.ContactName[this];
            set => fields.ContactName[this] = value;
        }

        [DisplayName("Contact Title"), Size(30)]
        public string ContactTitle
        {
            get => fields.ContactTitle[this];
            set => fields.ContactTitle[this] = value;
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

        [DisplayName("Phone"), Size(24)]
        public string Phone
        {
            get => fields.Phone[this];
            set => fields.Phone[this] = value;
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


        public ShopsRow()
            : base()
        {
        }

        public ShopsRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field Id;
            public StringField ShopId;
            public StringField ShopName;
            public StringField ContactName;
            public StringField ContactTitle;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField Phone;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}