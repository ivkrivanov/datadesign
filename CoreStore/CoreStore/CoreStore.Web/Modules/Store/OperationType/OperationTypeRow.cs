
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[OperationType]")]
    [DisplayName("Operation Type"), InstanceName("Operation Type")]
    [ReadPermission(PermissionKeys.OperationType.View)]
    [ModifyPermission(PermissionKeys.OperationType.Modify)]
    [DeletePermission(PermissionKeys.OperationType.Delete)]
    [LookupScript("Store.OperationType", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    public sealed class OperationTypeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Operation Type Id"), Column("OperationTypeID"), Identity]
        public Int32? OperationTypeId
        {
            get { return Fields.OperationTypeId[this]; }
            set { Fields.OperationTypeId[this] = value; }
        }

        [DisplayName("Op Code"), NotNull]
        public Int16? OpCode
        {
            get { return Fields.OpCode[this]; }
            set { Fields.OpCode[this] = value; }
        }

        [DisplayName("Operation"), Size(30), NotNull, QuickSearch]
        public String Operation
        {
            get { return Fields.Operation[this]; }
            set { Fields.Operation[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OperationTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Operation; }
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

        public OperationTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field OperationTypeId;
            public Int16Field OpCode;
            public StringField Operation;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
