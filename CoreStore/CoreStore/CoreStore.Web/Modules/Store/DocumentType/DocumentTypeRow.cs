
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[DocumentType]")]
    [DisplayName("Document Type"), InstanceName("Document Type")]
    [ReadPermission(PermissionKeys.DocumentType.View)]
    [ModifyPermission(PermissionKeys.DocumentType.Modify)]
    [DeletePermission(PermissionKeys.DocumentType.Delete)]
    [LookupScript("Store.DocumentType", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    public sealed class DocumentTypeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Document Type Id"), Column("DocumentTypeID"), Identity]
        public Int32? DocumentTypeId
        {
            get { return Fields.DocumentTypeId[this]; }
            set { Fields.DocumentTypeId[this] = value; }
        }

        [DisplayName("Document Name"), Size(50), NotNull, QuickSearch]
        public String DocumentName
        {
            get { return Fields.DocumentName[this]; }
            set { Fields.DocumentName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DocumentTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DocumentName; }
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Tenant & Activ

        public static readonly RowFields Fields = new RowFields().Init();

        public DocumentTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field DocumentTypeId;
            public StringField DocumentName;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
