using Address.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Address.Address
{
    [ConnectionKey("Address"), Module("Address"), TableName("[address].[StateProvince]")]
    [DisplayName("State Province"), InstanceName("State Province")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class StateProvinceRow : LoggingRow<StateProvinceRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("State Province Id"), Identity, IdProperty]
        public int? StateProvinceId
        {
            get => fields.StateProvinceId[this];
            set => fields.StateProvinceId[this] = value;
        }

        [DisplayName("State Province Code"), Size(5), NotNull, QuickSearch, NameProperty]
        public string StateProvinceCode
        {
            get => fields.StateProvinceCode[this];
            set => fields.StateProvinceCode[this] = value;
        }

        [DisplayName("Country Code"), Size(3), NotNull, ForeignKey("[address].[Country]", "CountryCode"), LeftJoin("jCountryCode"), TextualField("CountryCodeName")]
        public string CountryCode
        {
            get => fields.CountryCode[this];
            set => fields.CountryCode[this] = value;
        }

        [DisplayName("Name"), Size(50), NotNull]
        public string Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Territory Id"), NotNull]
        public int? TerritoryId
        {
            get => fields.TerritoryId[this];
            set => fields.TerritoryId[this] = value;
        }

        [DisplayName("Rowguid"), Column("rowguid"), NotNull]
        public Guid? Rowguid
        {
            get => fields.Rowguid[this];
            set => fields.Rowguid[this] = value;
        }

        [DisplayName("Is Active"), NotNull]
        public short? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Country Code Name"), Expression("jCountryCode.[Name]")]
        public string CountryCodeName
        {
            get => fields.CountryCodeName[this];
            set => fields.CountryCodeName[this] = value;
        }

        [DisplayName("Country Code Is Active"), Expression("jCountryCode.[IsActive]")]
        public short? CountryCodeIsActive
        {
            get => fields.CountryCodeIsActive[this];
            set => fields.CountryCodeIsActive[this] = value;
        }

        public StateProvinceRow()
            : base()
        {
        }

        public StateProvinceRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field StateProvinceId;
            public StringField StateProvinceCode;
            public StringField CountryCode;
            public StringField Name;
            public Int32Field TerritoryId;
            public GuidField Rowguid;
            public Int16Field IsActive;

            public StringField CountryCodeName;
            public Int16Field CountryCodeIsActive;
        }
    }
}