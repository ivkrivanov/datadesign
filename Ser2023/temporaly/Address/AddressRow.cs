using Address.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Address.Address
{
    [ConnectionKey("Address"), Module("Address"), TableName("[address].[Address]")]
    [DisplayName("Address"), InstanceName("Address")]
    [ReadPermission(PermissionKeys.Address.View)]
    [ModifyPermission(PermissionKeys.Address.Modify)]
    [DeletePermission(PermissionKeys.Address.Delete)]
    [LookupScript("Address.Address", LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class AddressRow : LoggingRow<AddressRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Address Id"), Identity, IdProperty]
        public long? AddressId
        {
            get => fields.AddressId[this];
            set => fields.AddressId[this] = value;
        }

        [DisplayName("Address Line1"), Size(60), NotNull, QuickSearch, NameProperty]
        public string AddressLine1
        {
            get => fields.AddressLine1[this];
            set => fields.AddressLine1[this] = value;
        }

        [DisplayName("Address Line2"), Size(60)]
        public string AddressLine2
        {
            get => fields.AddressLine2[this];
            set => fields.AddressLine2[this] = value;
        }

        [DisplayName("City"), Size(30), NotNull]
        public string City
        {
            get => fields.City[this];
            set => fields.City[this] = value;
        }

        [DisplayName("State Province"), NotNull, ForeignKey("[address].[StateProvince]", "StateProvinceId"), LeftJoin("jStateProvince"), TextualField("StateProvinceStateProvinceCode")]
        public int? StateProvinceId
        {
            get => fields.StateProvinceId[this];
            set => fields.StateProvinceId[this] = value;
        }

        [DisplayName("Postal Code"), Size(15), NotNull]
        public string PostalCode
        {
            get => fields.PostalCode[this];
            set => fields.PostalCode[this] = value;
        }

        [DisplayName("Rowguid"), Column("rowguid"), NotNull]
        public Guid? Rowguid
        {
            get => fields.Rowguid[this];
            set => fields.Rowguid[this] = value;
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => fields.TenantId[this];
            set => fields.TenantId[this] = value;
        }

        public Int32Field TenantIdField
        {
            get => fields.TenantId;
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => fields.IsActive;
        }

        #endregion Tenant & Activ

        [DisplayName("State Province State Province Code"), Expression("jStateProvince.[StateProvinceCode]")]
        public string StateProvinceStateProvinceCode
        {
            get => fields.StateProvinceStateProvinceCode[this];
            set => fields.StateProvinceStateProvinceCode[this] = value;
        }

        [DisplayName("State Province Country Code"), Expression("jStateProvince.[CountryCode]")]
        public string StateProvinceCountryCode
        {
            get => fields.StateProvinceCountryCode[this];
            set => fields.StateProvinceCountryCode[this] = value;
        }

        [DisplayName("State Province Name"), Expression("jStateProvince.[Name]")]
        public string StateProvinceName
        {
            get => fields.StateProvinceName[this];
            set => fields.StateProvinceName[this] = value;
        }

        [DisplayName("State Province Territory Id"), Expression("jStateProvince.[TerritoryId]")]
        public int? StateProvinceTerritoryId
        {
            get => fields.StateProvinceTerritoryId[this];
            set => fields.StateProvinceTerritoryId[this] = value;
        }

        [DisplayName("State Province Rowguid"), Expression("jStateProvince.[rowguid]")]
        public Guid? StateProvinceRowguid
        {
            get => fields.StateProvinceRowguid[this];
            set => fields.StateProvinceRowguid[this] = value;
        }

        [DisplayName("State Province Is Active"), Expression("jStateProvince.[IsActive]")]
        public short? StateProvinceIsActive
        {
            get => fields.StateProvinceIsActive[this];
            set => fields.StateProvinceIsActive[this] = value;
        }

        public AddressRow()
            : base()
        {
        }

        public AddressRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int64Field AddressId;
            public StringField AddressLine1;
            public StringField AddressLine2;
            public StringField City;
            public Int32Field StateProvinceId;
            public StringField PostalCode;
            public GuidField Rowguid;
            public Int16Field IsActive;
            public Int32Field TenantId;

            public StringField StateProvinceStateProvinceCode;
            public StringField StateProvinceCountryCode;
            public StringField StateProvinceName;
            public Int32Field StateProvinceTerritoryId;
            public GuidField StateProvinceRowguid;
            public Int16Field StateProvinceIsActive;
        }
    }
}