

namespace Ledger.Infra.Entities
{
    using Ledger.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Addresses"), InstanceName("Addresses"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class AddressesRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Address Id"), Identity]
        public Int32? AddressId
        {
            get { return Fields.AddressId[this]; }
            set { Fields.AddressId[this] = value; }
        }

        [DisplayName("Address"), Size(256), QuickSearch]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("Zip Code"), Size(128)]
        public String ZipCode
        {
            get { return Fields.ZipCode[this]; }
            set { Fields.ZipCode[this] = value; }
        }

        [DisplayName("City"), Size(256)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("State"), Size(256)]
        public String State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Country"), Size(64)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Street Address"), Expression("CONCAT(T0.[Address], ' ', T0.[City], ' ', T0.[Country])"), QuickSearch]
        public String StreetAddress
        {
            get { return Fields.StreetAddress[this]; }
            set { Fields.StreetAddress[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }


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

        IIdField IIdRow.IdField
        {
            get { return Fields.AddressId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StreetAddress; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AddressesRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field AddressId;
            public StringField Address;
            public StringField ZipCode;
            public StringField City;
            public StringField State;
            public StringField Country;

            public StringField StreetAddress;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;

            public RowFields()
                : base("[ldg].[Addresses]")
            {
                LocalTextPrefix = "Infra.Addresses";
            }
        }
    }
}