using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntityAddress]")]
[DisplayName("Business Entity Address"), InstanceName("Business Entity Address")]
[ReadPermission(PermissionKeys.BusinessEntityAddress.View)]
[ModifyPermission(PermissionKeys.BusinessEntityAddress.Modify)]
[DeletePermission(PermissionKeys.BusinessEntityAddress.Delete)]
[ServiceLookupPermission("Company:General")]
[LookupScript("Company.BusinessEntity.Address", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class BusinessEntityAddressRow : LoggingRow<BusinessEntityAddressRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jAddress = nameof(jAddress);
    const string jAddressType = nameof(jAddressType);

    [DisplayName("Business Entity"), PrimaryKey, NotNull, ForeignKey(typeof(BusinessEntityRow)), LeftJoin(jBusinessEntity), IdProperty]
    [LookupEditor(typeof(BusinessEntityRow), Async = true)]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Address"), PrimaryKey, NotNull, ForeignKey(typeof(AddressRow)), LeftJoin(jAddress), TextualField(nameof(AddressLine1))]
    [ServiceLookupEditor(typeof(AddressRow))]
    public int? AddressId { get => fields.AddressId[this]; set => fields.AddressId[this] = value; }

    [DisplayName("Address Type"), PrimaryKey, NotNull, ForeignKey(typeof(AddressTypeRow)), LeftJoin(jAddressType)]
    [TextualField(nameof(AddressTypeName)), ServiceLookupEditor(typeof(AddressTypeRow))]
    public int? AddressTypeId { get => fields.AddressTypeId[this]; set => fields.AddressTypeId[this] = value; }

    [DisplayName("Address Address Line1"), Expression($"{jAddress}.[AddressLine1]")]
    public string AddressLine1 { get => fields.AddressLine1[this]; set => fields.AddressLine1[this] = value; }

    [DisplayName("Address Type Address Type Name"), Expression($"{jAddressType}.[AddressTypeName]")]
    public string AddressTypeName { get => fields.AddressTypeName[this]; set => fields.AddressTypeName[this] = value; }

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
        public Int32Field BusinessEntityId;
        public Int32Field AddressId;
        public Int32Field AddressTypeId;

        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField AddressLine1;
        public StringField AddressTypeName;
    }
}