using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;
using Company.Administration.Entities;
using System;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("DocumentType")]
[DisplayName("Document Type"), InstanceName("Document Type")]
[ReadPermission(PermissionKeys.DocumentType.View)]
[ModifyPermission(PermissionKeys.DocumentType.Modify)]
[DeletePermission(PermissionKeys.DocumentType.Delete)]
[LookupScript("Store.DocumentType", LookupType = typeof(MultiTenantRowLookupScript<>))]
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