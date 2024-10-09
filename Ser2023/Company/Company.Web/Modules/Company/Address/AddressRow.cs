using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

<<<<<<< HEAD
=======

>>>>>>> revert
[ConnectionKey("Company"), Module("Company"), TableName("[person].[Address]")]
[DisplayName("Address"), InstanceName("Address")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[LookupScript("Company.Address", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class AddressRow : LoggingRow<AddressRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jStateProvince = nameof(jStateProvince);
    const string jCountryCode = nameof(jCountryCode);

    [DisplayName("Address Id"), Identity, IdProperty]
    public long? AddressId { get => fields.AddressId[this]; set => fields.AddressId[this] = value; }

    [DisplayName("Address Line1"), Size(60), NotNull, QuickSearch, NameProperty]
    public string AddressLine1 { get => fields.AddressLine1[this]; set => fields.AddressLine1[this] = value; }

    [DisplayName("Address Line2"), Size(60)]
    public string AddressLine2 { get => fields.AddressLine2[this]; set => fields.AddressLine2[this] = value; }

    [DisplayName("City"), Size(30), LookupEditor(typeof(Lookups.AddressCityLookup), InplaceAdd = true, AutoComplete = true), NotNull] //CascadeFrom = "StateProvince"
    public string City { get => fields.City[this]; set => fields.City[this] = value; }

    [DisplayName("Postal Code"), Size(15), NotNull]
    public string PostalCode { get => fields.PostalCode[this]; set => fields.PostalCode[this] = value; }

    #region Country

    [DisplayName("Country"), NotNull, TextualField(nameof(CountryCode)), LookupInclude]
    [ForeignKey(typeof(CountryRow), nameof(CountryRow.CountryCode)), LeftJoin(jCountryCode)]
    //[LookupEditor(typeof(CountryRow), InplaceAdd = true)]
    [AsyncLookupEditor(typeof(Lookups.AddressCountryLookup), AutoComplete = true, InplaceAdd = true)]
    public string CountryCode { get => fields.CountryCode[this]; set => fields.CountryCode[this] = value; }

    [DisplayName("Country"), Origin(jCountryCode, nameof(CountryRow.CountryName)), LookupInclude]
    public string CountryName { get => fields.CountryName[this]; set => fields.CountryName[this] = value; }

    #endregion Country

    #region Province

<<<<<<< HEAD
    [DisplayName("State Province"), NotNull, ForeignKey("[person].[StateProvince]", "StateProvinceId"), LeftJoin(jStateProvince), TextualField(nameof(StateProvinceName)), LookupInclude]
    [LookupEditor(typeof(StateProvinceRow), InplaceAdd = true)]
    public int? StateProvinceId
    {
        get => fields.StateProvinceId[this];
        set => fields.StateProvinceId[this] = value;
    }
=======
    [DisplayName("State Province"), NotNull, LookupInclude, TextualField(nameof(StateProvinceName))]
    [ForeignKey(typeof(StateProvinceRow), nameof(StateProvinceRow.StateProvinceId)), LeftJoin(jStateProvince)] // )]
    [LookupEditor(typeof(StateProvinceRow), AutoComplete = true, InplaceAdd = true)] //CascadeFrom = "Country", 
    public int? StateProvinceId { get => fields.StateProvinceId[this]; set => fields.StateProvinceId[this] = value; }
>>>>>>> revert

    [DisplayName("State Province Code"), Origin(jStateProvince, nameof(StateProvinceRow.StateProvinceCode)), LookupInclude, MinSelectLevel(SelectLevel.List)]
    public string StateProvinceCode { get => fields.StateProvinceCode[this]; set => fields.StateProvinceCode[this] = value; }

    [DisplayName("State Province Name"), Origin(jStateProvince, nameof(StateProvinceRow.StateProvinceName))]
    public string StateProvinceName { get => fields.StateProvinceName[this]; set => fields.StateProvinceName[this] = value; }

    #endregion Province

    //[DisplayName("Rowguid"), Column("rowguid"), NotNull, DefaultValue(SystemMethods.NewGuid)]
    //public Guid? Rowguid
    //{
    //    get => fields.Rowguid[this];
    //    set => fields.Rowguid[this] = value;
    //}

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ

    public class RowFields : LoggingRowFields
    {
        public Int64Field AddressId;
        public StringField AddressLine1;
        public StringField AddressLine2;
        public StringField City;
        //Country
        public StringField CountryCode;
        public StringField CountryName;
        //Province
        public Int32Field StateProvinceId;
        public StringField StateProvinceCode;
        public StringField StateProvinceName;
        public StringField PostalCode;
        //public GuidField Rowguid;
        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}