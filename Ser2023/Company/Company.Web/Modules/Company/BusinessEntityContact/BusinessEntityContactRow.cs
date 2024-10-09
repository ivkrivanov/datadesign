using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntityContact]")]
[DisplayName("Business Entity Contact"), InstanceName("Business Entity Contact")]
[ReadPermission(PermissionKeys.BusinessEntityContact.View)]
[ModifyPermission(PermissionKeys.BusinessEntityContact.Modify)]
[DeletePermission(PermissionKeys.BusinessEntityContact.Delete)]
[LookupScript("Company.BusinessEntityContact", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class BusinessEntityContactRow : LoggingRow<BusinessEntityContactRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jContactType = nameof(jContactType);

    [DisplayName("Business Entity"), Column("BusinessEntityID"), NotNull, ForeignKey("[person].[BusinessEntity]", "BusinessEntityId"), LeftJoin(jBusinessEntity), IdProperty]
    public long? BusinessEntityId
    {
        get => fields.BusinessEntityId[this];
        set => fields.BusinessEntityId[this] = value;
    }

    [DisplayName("Person Id"), NotNull]
    public long? PersonId
    {
        get => fields.PersonId[this];
        set => fields.PersonId[this] = value;
    }

    [DisplayName("Contact Type"), NotNull, ForeignKey("[person].[ContactType]", "ContactTypeId"), LeftJoin(jContactType), TextualField(nameof(ContactTypeName)), NameProperty]
    public long? ContactTypeId
    {
        get => fields.ContactTypeId[this];
        set => fields.ContactTypeId[this] = value;
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

    [DisplayName("Contact Type Name"), Expression($"{jContactType}.[Name]")]
    public string ContactTypeName
    {
        get => fields.ContactTypeName[this];
        set => fields.ContactTypeName[this] = value;
    }

    public BusinessEntityContactRow() : base() { }

    public BusinessEntityContactRow(RowFields fields)
        : base(fields)
    {
    }

    public class RowFields : LoggingRowFields
    {
        public Int64Field BusinessEntityId;
        public Int64Field PersonId;
        public Int64Field ContactTypeId;
        //public GuidField Rowguid;

        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField ContactTypeName;
    }
}