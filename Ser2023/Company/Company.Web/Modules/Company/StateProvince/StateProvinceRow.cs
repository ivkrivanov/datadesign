using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[StateProvince]")]
[DisplayName("State Province"), InstanceName("State Province")]
[ReadPermission(PermissionKeys.StateProvince.View)]
[ModifyPermission(PermissionKeys.StateProvince.Modify)]
[DeletePermission(PermissionKeys.StateProvince.Delete)]
[LookupScript("Company.StateProvince", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class StateProvinceRow : LoggingRow<StateProvinceRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jCountryCode = nameof(jCountryCode);

    [DisplayName("State Province Id"), Identity, IdProperty]
    public int? StateProvinceId { get => fields.StateProvinceId[this]; set => fields.StateProvinceId[this] = value; }

    [DisplayName("Province"), Size(5), NotNull, QuickSearch, NameProperty]
    public string StateProvinceCode { get => fields.StateProvinceCode[this]; set => fields.StateProvinceCode[this] = value; }

    [DisplayName("Name"), Size(50), NotNull]
    public string StateProvinceName { get => fields.StateProvinceName[this]; set => fields.StateProvinceName[this] = value; }

    [DisplayName("Territory Id"), NotNull]
    public int? TerritoryId { get => fields.TerritoryId[this]; set => fields.TerritoryId[this] = value; }

    #region Country

    [DisplayName("Country"), Size(3), NotNull, ForeignKey(typeof(CountryRow)), LeftJoin(jCountryCode), TextualField(nameof(CountryCode)), LookupInclude]
    [LookupEditor(typeof(CountryRow), InplaceAdd = true)]
    public string CountryCode { get => fields.CountryCode[this]; set => fields.CountryCode[this] = value; }

    [DisplayName("Country"), Origin(jCountryCode, nameof(CountryRow.CountryName)), LookupInclude]  // Expression($"{jCountryCode}.[CountryName]"), Column("CountryName"), LookupInclude]
    public string CountryName { get => fields.CountryName[this]; set => fields.CountryName[this] = value; }

    #endregion Country


    //[DisplayName("Rowguid"), Column("rowguid")] //NotNull, DefaultValue(SystemMethods.NewGuid)]
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

    //public StateProvinceRow() : base() { }
    //public StateProvinceRow(RowFields fields) : base() { }


    public class RowFields : LoggingRowFields
    {
        public Int32Field StateProvinceId;
        public StringField StateProvinceCode;
        public StringField CountryCode;
        public StringField CountryName;
        public StringField StateProvinceName;
        public Int32Field TerritoryId;
        //public GuidField Rowguid;
        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}