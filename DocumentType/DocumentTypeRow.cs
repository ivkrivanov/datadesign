using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[DocumentType]")]
[DisplayName("Document Type"), InstanceName("Document Type")]
[ReadPermission(PermissionKeys.DocumentType.View)]
[ModifyPermission(PermissionKeys.DocumentType.Modify)]
[DeletePermission(PermissionKeys.DocumentType.Delete)]
[LookupScript("Store.DocumentType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class DocumentTypeRow : LoggingRow<DocumentTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Document Type Id"), Column("DocumentTypeId"), Identity, IdProperty]
    public Int32? DocumentTypeId { get => Fields.DocumentTypeId[this]; set => Fields.DocumentTypeId[this] = value; }

    [DisplayName("Document Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public String DocumentName { get => Fields.DocumentName[this]; set  => Fields.DocumentName[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => Fields.TenantId[this]; set  => Fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => Fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => Fields.IsActive[this]; set => Fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => Fields.IsActive; }

    #endregion Tenant & Activ

    public class RowFields : LoggingRowFields
    {
        public Int32Field DocumentTypeId;
        public StringField DocumentName;

        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}

