using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[ContactType]")]
[DisplayName("Contact Type"), InstanceName("Contact Type")]
[ReadPermission(PermissionKeys.ContactType.View)]
[ModifyPermission(PermissionKeys.ContactType.Modify)]
[DeletePermission(PermissionKeys.ContactType.Delete)]
[LookupScript("Company.ContactType", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class ContactTypeRow : LoggingRow<ContactTypeRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Contact Type Id"), Identity, IdProperty]
    public long? ContactTypeId
    {
        get => fields.ContactTypeId[this];
        set => fields.ContactTypeId[this] = value;
    }

    [DisplayName("Name"), Size(50), NotNull, QuickSearch, NameProperty]
    public string Name
    {
        get => fields.Name[this];
        set => fields.Name[this] = value;
    }

    //[DisplayName("Rowguid"), Column("rowguid")]
    //public Guid? Rowguid
    //{
    //    get => fields.Rowguid[this];
    //    set => fields.Rowguid[this] = value;
    //}

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

    public ContactTypeRow()
        : base()
    {
    }

    public ContactTypeRow(RowFields fields)
        : base(fields)
    {
    }
    public class RowFields : LoggingRowFields
    {
        public Int64Field ContactTypeId;
        public StringField Name;
        //public GuidField Rowguid;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}