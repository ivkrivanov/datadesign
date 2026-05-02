using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[AddressType]")]
[DisplayName("Address Type"), InstanceName("Address Type")]
[ReadPermission(PermissionKeys.AddressType.View)]
[ModifyPermission(PermissionKeys.AddressType.Modify)]
[DeletePermission(PermissionKeys.AddressType.Delete)]
[ServiceLookupPermission("Company:General")]
[LookupScript("Company.AddressType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class AddressTypeRow : LoggingRow<AddressTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Address Type Id"), Identity, IdProperty]
    public int? AddressTypeId { get => fields.AddressTypeId[this]; set => fields.AddressTypeId[this] = value; }

    [DisplayName("Address Type Name"), Size(50), NotNull, QuickSearch, NameProperty]
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
        public Int32Field AddressTypeId;
        public StringField AddressTypeName;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}