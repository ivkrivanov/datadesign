using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Person"), TableName("[person].[Person]")]
[DisplayName("Person"), InstanceName("Person")]
[ReadPermission(PermissionKeys.Person.View)]
[ModifyPermission(PermissionKeys.Person.Modify)]
[DeletePermission(PermissionKeys.Person.Delete)]
[LookupScript("Company.Person", LookupType = typeof(Lookups.PersonLookup))]
public sealed class PersonRow : LoggingRow<PersonRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);

    [DisplayName("Business Entity"), Column("BusinessEntityId"), PrimaryKey] //, NotNull, ForeignKey("[person].[BusinessEntity]", "BusinessEntityId"), LeftJoin(jBusinessEntity), IdProperty]
    public int? BusinessEntityId
    {
        get => fields.BusinessEntityId[this];
        set => fields.BusinessEntityId[this] = value;
    }

    [DisplayName("Person Type"), Size(2), NotNull, QuickSearch]
    public string PersonType
    {
        get => fields.PersonType[this];
        set => fields.PersonType[this] = value;
    }

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

    [DisplayName("Middle Name"), Size(50), NotNull]
    public string MiddleName
    {
        get => fields.MiddleName[this];
        set => fields.MiddleName[this] = value;
    }

    [DisplayName("Last Name"), Size(50), NotNull, NameProperty]
    public string LastName
    {
        get => fields.LastName[this];
        set => fields.LastName[this] = value;
    }

    [DisplayName("Suffix"), Size(10)]
    public string Suffix
    {
        get => fields.Suffix[this];
        set => fields.Suffix[this] = value;
    }

    //[DisplayName("FullName"), Size(100), QuickSearch, NameProperty]
    //[Expression("CONCAT(T0.[Title], CONCAT(' ', T0.[FirstName], CONCAT(' ', T0.[MiddleName], CONCAT(' ', T0.[LastName], CONCAT(' ', T0.[Suffix],")]
    //public string FullName
    //{
    //    get => Fields.FullName[this];
    //    set => Fields.FullName[this] = value;
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
        public Int32Field BusinessEntityId;
        public StringField PersonType;
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField Suffix;
        //public StringField FullName;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}