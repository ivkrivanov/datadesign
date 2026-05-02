using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[Country]")]
[DisplayName("Country"), InstanceName("Country")]
[ReadPermission(PermissionKeys.Country.View)]
[ModifyPermission(PermissionKeys.Country.Modify)]
[DeletePermission(PermissionKeys.Country.Delete)]
[ServiceLookupPermission("Company:General")]
[LookupScript("Company.Country", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class CountryRow : LoggingRow<CountryRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("CountryId"), Column("CountryId"), Identity, PrimaryKey, NotNull, IdProperty, QuickSearch]
    public int? CountryId { get => fields.CountryId[this]; set => fields.CountryId[this] = value; }
    [DisplayName("Country Code"), Size(3), NameProperty, QuickSearch]
    public string CountryCode { get => fields.CountryCode[this]; set => fields.CountryCode[this] = value; }

    [DisplayName("Country Name"), Size(50), NotNull]
    public string CountryName { get => fields.CountryName[this]; set => fields.CountryName[this] = value; }


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
        public Int32Field CountryId;
        public StringField CountryCode;
        public StringField CountryName;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}