using Company.Administration.Entities;
namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[StateProvince]")]
[DisplayName("State Province"), InstanceName("State Province")]
[ReadPermission(PermissionKeys.StateProvince.View)]
[ModifyPermission(PermissionKeys.StateProvince.Modify)]
[DeletePermission(PermissionKeys.StateProvince.Delete)]
[ServiceLookupPermission("Administration:General")]
public sealed class StateProvinceRow : LoggingRow<StateProvinceRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jCountryCode = nameof(jCountryCode);

    [DisplayName("State Province Id"), Identity, IdProperty]
    public int? StateProvinceId { get => fields.StateProvinceId[this]; set => fields.StateProvinceId[this] = value; }

    [DisplayName("State Province Code"), Size(3), NotNull, QuickSearch, NameProperty]
    public string StateProvinceCode { get => fields.StateProvinceCode[this]; set => fields.StateProvinceCode[this] = value; }

    [DisplayName("Country Code"), Size(3), NotNull, ForeignKey(typeof(CountryRow)), LeftJoin(jCountryCode)]
    [TextualField(nameof(CountryCodeCountryName)), ServiceLookupEditor(typeof(CountryRow))]
    public string CountryCode { get => fields.CountryCode[this]; set => fields.CountryCode[this] = value; }

    [DisplayName("State Province Name"), Size(50), NotNull]
    public string StateProvinceName { get => fields.StateProvinceName[this]; set => fields.StateProvinceName[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }
    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ


    [DisplayName("Country Code Country Name"), Expression($"{jCountryCode}.[CountryName]")]
    public string CountryCodeCountryName { get => fields.CountryCodeCountryName[this]; set => fields.CountryCodeCountryName[this] = value; }

    public class RowFields : LoggingRowFields
    {
        public Int32Field StateProvinceId;
        public StringField StateProvinceCode;
        public StringField CountryCode;
        public StringField StateProvinceName;

        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField CountryCodeCountryName;
    }
}