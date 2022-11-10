
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Serenity.Extensions.Entities;
    using Store;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Shops]")]
    [DisplayName("Shops"), InstanceName("Shops")]
    [ReadPermission(PermissionKeys.Shops.View)]
    [ModifyPermission(PermissionKeys.Shops.Modify)]
    [DeletePermission(PermissionKeys.Shops.Delete)]
    [LookupScript(typeof(Scripts.ShopsLookup))]
    //[LookupScript("Store.Shops", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class ShopsRow : LoggingRow<ShopsRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get => Fields.Id[this]; 
            set => Fields.Id[this] = value; 
        }

        [DisplayName("Shop Id"), Column("ShopID"), Size(14), PrimaryKey, QuickSearch]
        public String ShopId
        {
            get => Fields.ShopId[this]; 
            set => Fields.ShopId[this] = value; 
        }

        [DisplayName("Shop Name"), Size(40), NotNull, QuickSearch, NameProperty]
        public String ShopName
        {
            get => Fields.ShopName[this]; 
            set => Fields.ShopName[this] = value; 
        }

        [DisplayName("Contact Name"), Size(30)]
        public String ContactName
        {
            get => Fields.ContactName[this]; 
            set => Fields.ContactName[this] = value; 
        }

        [DisplayName("Contact Title"), Size(30)]
        public String ContactTitle
        {
            get => Fields.ContactTitle[this]; 
            set => Fields.ContactTitle[this] = value; 
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

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get => Fields.Phone[this]; 
            set => Fields.Phone[this] = value; 
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
        {
        }

        public ShopsRow(RowFields Fields)
            : base(Fields)
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
