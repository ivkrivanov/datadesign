using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[Province]")]
[DisplayName("Province"), InstanceName("Province")]
[ReadPermission(PermissionKeys.Province.View)]
[ModifyPermission(PermissionKeys.Province.Modify)]
[DeletePermission(PermissionKeys.Province.Delete)]
[ServiceLookupPermission("Company:General")]
[LookupScript("Company.Province", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class ProvinceRow : LoggingRow<ProvinceRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jCountry = nameof(jCountry);

    [DisplayName("Province Id"), Identity, IdProperty]
    public int? ProvinceId { get => fields.ProvinceId[this]; set => fields.ProvinceId[this] = value; }

    [DisplayName("Province Code"), Size(3), PrimaryKey, NotNull, QuickSearch, NameProperty]
    public string ProvinceCode { get => fields.ProvinceCode[this]; set => fields.ProvinceCode[this] = value; }

    //[DisplayName("Country"), NotNull, ForeignKey("[sales].[Country]", "CountryId"), LeftJoin(jCountry), QuickSearch] //, TextualField(nameof(FromCurrencyCode))]
    [DisplayName("Country"), ForeignKey(typeof(CountryRow)), LeftJoin(jCountry), LookupInclude, QuickSearch]
    [AsyncLookupEditor(typeof(CountryLookup), InplaceAdd = true, DialogType = "Company.CountryDialog", AutoComplete = true), QuickFilter(CssClass = "hidden-xs")]
    public int? CountryId { get => fields.CountryId[this]; set => fields.CountryId[this] = value; }
    [Origin(jCountry, nameof(CountryRow.CountryCode)), DisplayName("Country")]
    public string CountryCode { get => fields.CountryCode[this]; set=>fields.CountryCode[this] = value; }

    [DisplayName("Province Name"), Size(50), NotNull]
    public string ProvinceName { get => fields.ProvinceName[this]; set => fields.ProvinceName[this] = value; }

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
        public Int32Field ProvinceId;
        public StringField ProvinceCode;
        public Int32Field CountryId;
        //public StringField CountryId;
        public StringField ProvinceName;
        public StringField CountryCode;

        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}