using Company.Administration.Entities;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntity]")]
[DisplayName("Business Entity"), InstanceName("Business Entity")]
[ReadPermission(PermissionKeys.BusinessEntity.View)]
[ModifyPermission(PermissionKeys.BusinessEntity.Modify)]
[DeletePermission(PermissionKeys.BusinessEntity.Delete)]
[ServiceLookupPermission("Company:General")]
[LookupScript("Company.BusinessEntity", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class BusinessEntityRow : LoggingRow<BusinessEntityRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Business Entity Id"), Identity, IdProperty]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }








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
        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}