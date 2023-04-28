using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntity]")]
[DisplayName("Business Entity"), InstanceName("Business Entity")]
[ReadPermission(PermissionKeys.BusinessEntity.View)]
[ModifyPermission(PermissionKeys.BusinessEntity.Modify)]
[DeletePermission(PermissionKeys.BusinessEntity.Delete)]
[LookupScript("Company.BusinessEntity", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class BusinessEntityRow : LoggingRow<BusinessEntityRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Business Entity Id"), PrimaryKey, NotNull, IdProperty]
    public long? BusinessEntityId
    {
        get => fields.BusinessEntityId[this];
        set => fields.BusinessEntityId[this] = value;
    }

    [DisplayName("Rowguid"), Column("rowguid")]
    public Guid? Rowguid
    {
        get => fields.Rowguid[this];
        set => fields.Rowguid[this] = value;
    }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId
    {
        get => fields.TenantId[this];
        set => fields.TenantId[this] = value;
    }

    public Int32Field TenantIdField
    {
        get => fields.TenantId;
    }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive
    {
        get => fields.IsActive[this];
        set => fields.IsActive[this] = value;
    }

    Int16Field IIsActiveRow.IsActiveField
    {
        get => fields.IsActive;
    }

    #endregion Tenant & Activ

    public BusinessEntityRow()
        : base()
    {
    }

    public BusinessEntityRow(RowFields fields)
        : base(fields)
    {
    }

    public class RowFields : LoggingRowFields
    {
        public Int64Field BusinessEntityId;
        public GuidField Rowguid;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}