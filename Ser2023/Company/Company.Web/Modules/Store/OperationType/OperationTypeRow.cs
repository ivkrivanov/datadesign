
using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[OperationType]")]
[DisplayName("Operation Type"), InstanceName("Operation Type")]
[ReadPermission(PermissionKeys.OperationType.View)]
[ModifyPermission(PermissionKeys.OperationType.Modify)]
[DeletePermission(PermissionKeys.OperationType.Delete)]
[LookupScript("Store.OperationType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class OperationTypeRow : LoggingRow<OperationTypeRow.RowFields>, IIdRow, INameRow,  IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Operation Type Id"), Column("OperationTypeID"), Identity, IdProperty]
    public int? OperationTypeId
    {
        get => fields.OperationTypeId[this];
        set => fields.OperationTypeId[this] = value;
    }

    [DisplayName("Op Code"), NotNull]
    public short? OpCode
    {
        get => fields.OpCode[this];
        set => fields.OpCode[this] = value;
    }

    [DisplayName("Operation"), Size(30), NotNull, QuickSearch, NameProperty]
    public string Operation
    {
        get => fields.Operation[this];
        set => fields.Operation[this] = value;
    }


    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId
    {
        get => Fields.TenantId[this];
        set => Fields.TenantId[this] = value;
    }

    public Int32Field TenantIdField
    {
        get => Fields.TenantId;
    }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive
    {
        get => Fields.IsActive[this];
        set => Fields.IsActive[this] = value;
    }

    Int16Field IIsActiveRow.IsActiveField
    {
        get => Fields.IsActive;
    }

    #endregion Tenant & Activ


    public OperationTypeRow()
        : base()
    {
    }

    public OperationTypeRow(RowFields fields)
        : base(fields)
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
