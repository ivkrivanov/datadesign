using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[Person]")]
[DisplayName("Person"), InstanceName("Person")]
[ReadPermission(PermissionKeys.Person.View)]
[ModifyPermission(PermissionKeys.Person.Modify)]
[DeletePermission(PermissionKeys.Person.Delete)]
[LookupScript("Company.Person", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class PersonRow : LoggingRow<PersonRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jContactType = nameof(jContactType);

    [DisplayName("Business Entity"), NotNull, ForeignKey("[person].[BusinessEntity]", "BusinessEntityId"), LeftJoin(jBusinessEntity), IdProperty]
    public long? BusinessEntityId
    {
        get => fields.BusinessEntityId[this];
        set => fields.BusinessEntityId[this] = value;
    }

    //[DisplayName("Person Id"), NotNull]
    //public long? PersonId
    //{
    //    get => fields.PersonId[this];
    //    set => fields.PersonId[this] = value;
    //}

    //[DisplayName("Person Type"), Size(2), NotNull, QuickSearch, NameProperty]
    //[ForeignKey("[person].[ContactType", "ContactTypeId"), LeftJoin(jContactType), LookupInclude]
    //[LookupEditor(typeof(ContactTypeRow), InplaceAdd = true)]   
    //public string PersonType
    //{
    //    get => fields.PersonType[this];
    //    set => fields.PersonType[this] = value;
    //}

    [DisplayName("Title"), Size(8)]
    public string Title
    {
        get => fields.Title[this];
        set => fields.Title[this] = value;
    }

    [DisplayName("First Name"), Size(50), NotNull]
    public string FirstName
    {
        get => fields.FirstName[this];
        set => fields.FirstName[this] = value;
    }

    [DisplayName("Middle Name"), Size(50)]
    public string MiddleName
    {
        get => fields.MiddleName[this];
        set => fields.MiddleName[this] = value;
    }

    [DisplayName("Last Name"), Size(50), NotNull]
    public string LastName
    {
        get => fields.LastName[this];
        set => fields.LastName[this] = value;
    }

    [DisplayName("FullName"), Concat("t0.FirstName", "' '", "t0.MiddleName", "' '", "t0.LastName"), Size(100), QuickSearch, NameProperty]
    public string FullName
    {
        get => Fields.FullName[this];
    }

    [DisplayName("Suffix"), Size(10)]
    public string Suffix
    {
        get => fields.Suffix[this];
        set => fields.Suffix[this] = value;
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

    public PersonRow()
    : base()
    {
    }

    public PersonRow(RowFields fields)
    : base(fields)
    {
    }

    public class RowFields : LoggingRowFields
    {
        public Int64Field BusinessEntityId;
        //public Int64Field PersonId;
        //public StringField PersonType;
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField FullName;
        public StringField Suffix;
        public GuidField Rowguid;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}