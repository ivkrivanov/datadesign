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
    [DisplayName("Address Id"), Identity, IdProperty]
    public int? AddressId { get => fields.AddressId[this]; set => fields.AddressId[this] = value; }

    [DisplayName("Address Line1"), Size(60), NotNull, QuickSearch, NameProperty]
    public string AddressLine1 { get => fields.AddressLine1[this]; set => fields.AddressLine1[this] = value; }

    [DisplayName("Address Line2"), Size(60)]
    public string AddressLine2 { get => fields.AddressLine2[this]; set => fields.AddressLine2[this] = value; }

    [DisplayName("City"), Size(30), NotNull]
    public string City { get => fields.City[this]; set => fields.City[this] = value; }

    [DisplayName("Country Id"), Size(3), NotNull]
    public string CountryId { get => fields.CountryId[this]; set => fields.CountryId[this] = value; }

    [DisplayName("Province Id"), NotNull]
    public int? ProvinceId { get => fields.ProvinceId[this]; set => fields.ProvinceId[this] = value; }

    [DisplayName("Postal Code"), Size(15), NotNull]
    public string PostalCode { get => fields.PostalCode[this]; set => fields.PostalCode[this] = value; }

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
        public StringField CountryId;
        public Int32Field ProvinceId;
        public StringField PostalCode;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}