using Company.Administration.Entities;
using FluentMigrator;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[AddressType]")]
[DisplayName("Address Type"), InstanceName("Address Type")]
[ReadPermission(PermissionKeys.AddressType.View)]
[ModifyPermission(PermissionKeys.AddressType.Modify)]
[DeletePermission(PermissionKeys.AddressType.Delete)]
[LookupScript("Company.AddressType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class AddressTypeRow : LoggingRow<AddressTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Address Type Id"), Identity, IdProperty]
    public long? AddressTypeId
    {
        get => fields.AddressTypeId[this];
        set => fields.AddressTypeId[this] = value;
    }

    [DisplayName("Name"), Size(50), QuickSearch, NameProperty]
    public string Name
    {
        get => fields.Name[this];
        set => fields.Name[this] = value;
    }

    [DisplayName("Rowguid"), Column("rowguid"), NotNull, DefaultValue(SystemMethods.NewGuid)]
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

    public AddressTypeRow()
    : base()
    {
    }

    public AddressTypeRow(RowFields fields)
    : base(fields)
    {
    }

    public class RowFields : LoggingRowFields
    {
        public Int64Field AddressTypeId;
        public StringField Name;
        public GuidField Rowguid;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}