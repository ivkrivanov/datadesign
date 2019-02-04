
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[OperationType]")]
    [DisplayName("Operation Type"), InstanceName("OperationType")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript("Store.OperationType", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    public sealed class OperationTypeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Operation ID"), Identity, LookupInclude]
        public Int32? OperationTypeID
        {
            get { return Fields.OperationTypeID[this]; }
            set { Fields.OperationTypeID[this] = value; }
        }

        [DisplayName("OpCode"), NotNull, QuickSearch, LookupInclude]
        public Int16? OpCode
        {
            get { return Fields.OpCode[this]; }
            set { Fields.OpCode[this] = value; }
        }

        [DisplayName("Operation"), Size(30), NotNull, QuickSearch, LookupInclude]
        public String Operation
        {
            get { return Fields.Operation[this]; }
            set { Fields.Operation[this] = value; }
        }


        IIdField IIdRow.IdField
        {
            get { return Fields.OperationTypeID; }
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
            public Int32Field OperationTypeID;
            public Int16Field OpCode;
            public StringField Operation;

            public Int16Field IsActive;
            public Int32Field TenantId;
        }
    }
}
