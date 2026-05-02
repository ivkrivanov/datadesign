using Company.Administration.Entities;
namespace Company.Sales;

[ConnectionKey("Sales"), Module("Sales"), TableName("[sales].[DocumentType]")]
[DisplayName("Document Type"), InstanceName("Document Type")]
[ReadPermission(SalesPermissionKeys.Currency.View)]
[ModifyPermission(SalesPermissionKeys.Currency.Modify)]
[DeletePermission(SalesPermissionKeys.Currency.Delete)]
[ServiceLookupPermission("SalesPermission:General")]
[LookupScript("Sales.DokumenyYype", LookupType = typeof(MultiTenantRowLookupScript<>))]

public sealed class DocumentTypeRow : LoggingRow<DocumentTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Document Type Id"), Column("DocumentTypeID"), Identity, IdProperty]
    public int? DocumentTypeId { get => fields.DocumentTypeId[this]; set => fields.DocumentTypeId[this] = value; }

    [DisplayName("Document Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string DocumentName { get => fields.DocumentName[this]; set => fields.DocumentName[this] = value; }

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
        public Int32Field DocumentTypeId;
        public StringField DocumentName;

        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}