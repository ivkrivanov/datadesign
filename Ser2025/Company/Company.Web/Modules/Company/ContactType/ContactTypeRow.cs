using Company.Administration.Entities;
namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[ContactType]")]
[DisplayName("Contact Type"), InstanceName("Contact Type")]
[ReadPermission(PermissionKeys.ContactType.View)]
[ModifyPermission(PermissionKeys.ContactType.Modify)]
[DeletePermission(PermissionKeys.ContactType.Delete)]
[ServiceLookupPermission("Administration:General")]
public sealed class ContactTypeRow : LoggingRow<ContactTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Contact Type Id"), Identity, IdProperty]
    public int? ContactTypeId { get => fields.ContactTypeId[this]; set => fields.ContactTypeId[this] = value; }

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
        public Int32Field ContactTypeId;
        public StringField Name;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}