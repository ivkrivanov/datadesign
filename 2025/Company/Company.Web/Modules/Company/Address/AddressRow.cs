using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[Address]")]
[DisplayName("Address"), InstanceName("Address")]
[ReadPermission(PermissionKeys.Address.View)]
[ModifyPermission(PermissionKeys.Address.Modify)]
[DeletePermission(PermissionKeys.Address.Delete)]
[ServiceLookupPermission("Company:General")]
[LookupScript("Company.Address", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class AddressRow : LoggingRow<AddressRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jCountryCode = nameof(jCountryCode);
    const string jStateProvince = nameof(jStateProvince);

    [DisplayName("Address Id"), Identity, IdProperty]
    public int? AddressId { get => fields.AddressId[this]; set => fields.AddressId[this] = value; }

    [DisplayName("Address Line1"), Size(60), NotNull, QuickSearch, NameProperty]
    public string AddressLine1 { get => fields.AddressLine1[this]; set => fields.AddressLine1[this] = value; }

    [DisplayName("Address Line2"), Size(60)]
    public string AddressLine2 { get => fields.AddressLine2[this]; set => fields.AddressLine2[this] = value; }

    [DisplayName("City"), Size(30), NotNull]
    public string City { get => fields.City[this]; set => fields.City[this] = value; }

    [DisplayName("Country Code"), Size(3), NotNull, ForeignKey(typeof(CountryRow)), LeftJoin(jCountryCode)]
    [TextualField(nameof(CountryCodeCountryName)), ServiceLookupEditor(typeof(CountryRow))]
    public string CountryCode { get => fields.CountryCode[this]; set => fields.CountryCode[this] = value; }

    [DisplayName("State Province"), NotNull, ForeignKey(typeof(StateProvinceRow)), LeftJoin(jStateProvince)]
    [TextualField(nameof(StateProvinceCode)), ServiceLookupEditor(typeof(StateProvinceRow))]
    public int? StateProvinceId { get => fields.StateProvinceId[this]; set => fields.StateProvinceId[this] = value; }

    [DisplayName("Postal Code"), Size(15), NotNull]
    public string PostalCode { get => fields.PostalCode[this]; set => fields.PostalCode[this] = value; }

    [DisplayName("Country Code Country Name"), Expression($"{jCountryCode}.[CountryName]")]
    public string CountryCodeCountryName { get => fields.CountryCodeCountryName[this]; set => fields.CountryCodeCountryName[this] = value; }

    [DisplayName("State Province State Province Code"), Expression($"{jStateProvince}.[StateProvinceCode]")]
    public string StateProvinceCode { get => fields.StateProvinceCode[this]; set => fields.StateProvinceCode[this] = value; }

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
        public Int32Field AddressId;
        public StringField AddressLine1;
        public StringField AddressLine2;
        public StringField City;
        public StringField CountryCode;
        public Int32Field StateProvinceId;
        public StringField PostalCode;
        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField CountryCodeCountryName;
        public StringField StateProvinceCode;
    }
}