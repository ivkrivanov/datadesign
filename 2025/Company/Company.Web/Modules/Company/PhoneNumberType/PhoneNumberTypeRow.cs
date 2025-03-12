using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[PhoneNumberType]")]
[DisplayName("Phone Number Type"), InstanceName("Phone Number Type")]
[ReadPermission(PermissionKeys.PhoneNumberType.View)]
[ModifyPermission(PermissionKeys.PhoneNumberType.Modify)]
[DeletePermission(PermissionKeys.PhoneNumberType.Delete)]
[ServiceLookupPermission("PermissionKeys.PhoneNumberType")]
[LookupScript("Company.PhoneNumberType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class PhoneNumberTypeRow : LoggingRow<PhoneNumberTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Phone Number Type Id"), Identity, IdProperty]
    public int? PhoneNumberTypeId { get => fields.PhoneNumberTypeId[this]; set => fields.PhoneNumberTypeId[this] = value; }

    [DisplayName("Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

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
        public Int32Field PhoneNumberTypeId;
        public StringField Name;
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}