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
[LeftJoin("per", "person.Person", "Per.[BusinessEntityId] = t0.[BusinessEntityId]", RowType = typeof(PersonRow), TitlePrefix = "")]
[UpdatableExtension("cd", typeof(PersonRow), CascadeDelete = true)]
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

    //[Origin("per")]
    //[LookupEditor(typeof(ContactTypeRow), InplaceAdd = true)]
    //public string PersonType
    //{
    //    get => fields.PersonType[this];
    //    set => fields.PersonType[this] = value;
    //}

    [Origin("per")]
    public string Title
    {
        get => fields.Title[this];
        set => fields.Title[this] = value;
    }

    [Origin("per")]
    public string FirstName
    {
        get => fields.FirstName[this];
        set => fields.FirstName[this] = value;
    }

    [Origin("per")]
    public string MiddleName
    {
        get => fields.MiddleName[this];
        set => fields.MiddleName[this] = value;
    }

    [Origin("per")]
    public string LastName
    {
        get => fields.LastName[this];
        set => fields.LastName[this] = value;
    }

    [Origin("per")]
    public string Suffix
    {
        get => fields.Suffix[this];
        set => fields.Suffix[this] = value;
    }

    [Origin("per")]
    public string FullName
    {
        get => Fields.FullName[this];
    }


    //[LinkingSetRelation(typeof(PersonRow), "BusinessEntityId", "BusinessEntityId")]
    //[MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
    //public ListField<Int32> Person
    //{
    //    get => Fields.Person[this];
    //    set => Fields.Person[this] = value;

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

        //public StringField PersonType;
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField FullName;
        public StringField Suffix;

        //public ListField<Int32> Person;



        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}