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
<<<<<<< HEAD
    const string jContactType = nameof(jContactType);
=======
    const string JBusinessEntityAddress = nameof(JBusinessEntityAddress);
    const string JAddressType = nameof(JAddressType);
    const string JAddress = nameof(JAddress);
>>>>>>> revert

    [DisplayName("BusinessEntity"), PrimaryKey, IdProperty]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

<<<<<<< HEAD
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
=======
    #region Person

    [DisplayName("Person Type"), Size(2), NotNull, QuickSearch]
    public string PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }
>>>>>>> revert

    [DisplayName("Title"), Size(8)]
    public string Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("First Name"), Size(50), NotNull]
    public string FirstName { get => fields.FirstName[this]; set => fields.FirstName[this] = value; }

    [DisplayName("Middle Name"), Size(50), NotNull]
    public string MiddleName { get => fields.MiddleName[this]; set => fields.MiddleName[this] = value; }

    [DisplayName("Last Name"), Size(50), NotNull] //, NameProperty]
    public string LastName { get => fields.LastName[this]; set => fields.LastName[this] = value; }

    [DisplayName("FullName"), Size(100), QuickSearch, NameProperty]
    [Concat($"T0.[{nameof(Title)}]", "' '", $"T0.[{nameof(FirstName)}]", "' '", $"T0.[{nameof(MiddleName)}]", "' '", $"T0.[{nameof(LastName)}]", "' '", $"T0.[{nameof(Suffix)}]")]
    public string FullName { get => Fields.FullName[this]; set => Fields.FullName[this] = value; }

    [DisplayName("FullName"), Concat("t0.FirstName", "' '", "t0.MiddleName", "' '", "t0.LastName"), Size(100), QuickSearch, NameProperty]
    public string FullName
    {
        get => Fields.FullName[this];
    }

    [DisplayName("Suffix"), Size(10)]
    public string Suffix { get => fields.Suffix[this]; set => fields.Suffix[this] = value; }

    #endregion Person

    //#region BE

    ////[DisplayName("Business Entity Id"), PrimaryKey, ForeignKey(typeof(PersonRow)), LeftJoin(jPerson), Updatable]
    ////[ForeignKey(typeof(AddressTypeRow)), LeftJoin(JAddressType), Updatable]
    //[DisplayName("BEId")] //, Column("BEId")]
    //[ForeignKey(typeof(BusinessEntityRow), nameof(BusinessEntityRow.BusinessEntityId)), LeftJoin(jBusinessEntity), Identity, Updatable]
    //public int? BEId { get => fields.BEId[this]; set => fields.BEId[this] = value; }

    //#endregion BE

    //#region EntityAddressType

    //[DisplayName("AddressType"), LookupEditor(typeof(AddressTypeRow), Multiple = true), NotMapped]
    //public string AddressTypeName { get => fields.AddressTypeName[this]; set => fields.AddressTypeName[this] = value; }

    //#endregion EntityAddressType



    //[DisplayName("Addresses"), MasterDetailRelation(foreignKey:nameof(AddressRow))]
    //public List<AddressRow> Addresses { get => fields.Addresses[this]; set => fields.Addresses[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => fields.TenantId[this]; set => fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => fields.IsActive[this]; set => fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => fields.IsActive; }

    #endregion Tenant & Activ

    public class RowFields : LoggingRowFields
    {
<<<<<<< HEAD
        public Int64Field BusinessEntityId;
        //public Int64Field PersonId;
        //public StringField PersonType;
=======
        public Int32Field BusinessEntityId;
        public StringField PersonType;
>>>>>>> revert
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField FullName;
        public StringField Suffix;

        //public Int32Field BEId;


        //public ListField<AddressRow> Addresses;

        public Int16Field IsActive;
        public Int32Field TenantId;

    }
}