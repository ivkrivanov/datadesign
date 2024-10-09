using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
//using static Company.Company.PermissionKeys;
//using System.ComponentModel.DataAnnotations.Schema;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntity]")]
[DisplayName("Business Entity"), InstanceName("Business Entity")]
[ReadPermission(PermissionKeys.BusinessEntity.View)]
[ModifyPermission(PermissionKeys.BusinessEntity.Modify)]
[DeletePermission(PermissionKeys.BusinessEntity.Delete)]
//[LeftJoin("per", "[person].[Person]", "per.[BusinessEntityId] = T0.[BusinessEntityId]", RowType = typeof(PersonRow), TitlePrefix = "")]
//[LeftJoin("adr", "[person].[BusinessEntityAddress]", "adr.[BusinessEntityId] = T0.[BusinessEntityId]", RowType = typeof(BusinessEntityAddressRow), TitlePrefix = "")]
[UpdatableExtension(jPerson, typeof(PersonRow), CascadeDelete = true)]
[UpdatableExtension(JAddressType, typeof(AddressTypeRow), CascadeDelete = true)]
[UpdatableExtension(JAddress, typeof(AddressRow), CascadeDelete = true)]
[UpdatableExtension(JBusinessEntityAddress, typeof(BusinessEntityAddressRow), CascadeDelete = true)]
[LookupScript("Company.BusinessEntity", LookupType = typeof(MultiTenantRowLookupScript<>))]

public sealed class BusinessEntityRow : LoggingRow<BusinessEntityRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    const string jPerson = nameof(jPerson);
    const string JAddressType = nameof(JAddressType);
    const string JAddress = nameof(JAddress);
    const string JBusinessEntityAddress = nameof(JBusinessEntityAddress);

    [DisplayName("Business Entity Id"), Column("BusinessEntityId"), Identity, PrimaryKey, IdProperty, QuickSearch]
    [ForeignKey(typeof(PersonRow), nameof(PersonRow.BusinessEntityId)), LeftJoin(jPerson), Updatable(true)]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    #region Person

    [DisplayName("PersonType"), Origin(jPerson, nameof(PersonRow.PersonType)), LookupInclude]
    public String PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }

    [DisplayName("Title"), Origin(jPerson, nameof(PersonRow.Title)), Updatable]
    public String Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("FirstName"), Origin(jPerson, nameof(PersonRow.FirstName)), Updatable]
    public String FirstName { get => fields.FirstName[this]; set => fields.FirstName[this] = value; }

    [DisplayName("MiddleName"), Origin(jPerson, nameof(PersonRow.MiddleName)), Updatable]
    public String MiddleName { get => fields.MiddleName[this]; set => fields.MiddleName[this] = value; }

    [DisplayName("LastName"), Origin(jPerson, nameof(PersonRow.LastName)), Updatable]
    public String LastName { get => fields.LastName[this]; set => fields.LastName[this] = value; }

    [DisplayName("Suffix"), Origin(jPerson, nameof(PersonRow.Suffix)), Updatable]
    public string Suffix { get => fields.Suffix[this]; set => fields.Suffix[this] = value; }

    [DisplayName("FullName"), Origin(jPerson, nameof(PersonRow.FullName))]
    public string FullName { get => fields.FullName[this]; set => fields.FullName[this] = value; }

    #endregion Person

    #region EntityAddressType

    //[DisplayName("EntitytAddressId"), PrimaryKey]
    //[ForeignKey(typeof(BusinessEntityAddressRow), nameof(BusinessEntityAddressRow.BusinessEntityId)), LeftJoin(JBusinessEntityAddress), Updatable(true)]
    //public int? BEAId { get => fields.BEAId[this]; set => fields.BEAId[this] = value; }

    [DisplayName("AddressType"), PrimaryKey] // LookupEditor(typeof(AddressTypeRow), Multiple = true), NotMapped]
    [ForeignKey(typeof(BusinessEntityAddressRow), nameof(BusinessEntityAddressRow.BusinessEntityId)), LeftJoin(JBusinessEntityAddress), Updatable(true)]
    [Origin(JBusinessEntityAddress, nameof(BusinessEntityAddressRow.AddressTypeId))]
    public int? AddressTypeId { get => fields.AddressTypeId[this]; set => fields.AddressTypeId[this] = value; }

    [DisplayName("AddressId"), PrimaryKey]
    [Origin(JBusinessEntityAddress, nameof(BusinessEntityAddressRow.AddressId))]
    public int? AddressId { get => fields.AddressId[this]; set => fields.AddressId[this] = value; }

    #endregion EntityAddressType

    //[DisplayName("AddressType"), MasterDetailRelation(foreignKey: nameof(AddressTypeRow.AddressTypeId)), NotMapped]
    //public List<AddressTypeRow> AddressType { get => fields.AddressesType[this]; set { fields.AddressesType[this] = value; } }

    //[DisplayName("AddressType"), LookupEditor(typeof(AddressTypeRow), Multiple = true), NotMapped]
    //[ForeignKey(typeof(AddressTypeRow), nameof(AddressTypeRow.AddressTypeId)), LeftJoin(JAddressType), Updatable(true)]
    //public string AddressTypeName { get => fields.AddressTypeName[this]; set => fields.AddressTypeName[this] = value; }



    //#region Address

    //[DisplayName("EntityAddress"), Origin(JBusinessEntityAddress, nameof(BusinessEntityAddressRow.BusinessEntityId))]
    //public int? BEAId { get => fields.BEAId[this]; set { fields.BEAId[this] = value; } }


    //[DisplayName("Addresses"), LookupEditor(typeof(AddressRow), Multiple = true), NotMapped]
    //[LinkingSetRelation(typeof(AddressRow), "BusinessEntityId", "AddressId")]
    //[MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]


    //[DisplayName("Addresses"), MasterDetailRelation(foreignKey: nameof(BusinessEntityAddressRow.BusinessEntityId)), NotMapped]
    //public List<BusinessEntityAddressRow> Addresses { get => fields.Addresses[this]; set => fields.Addresses[this] = value; }

    //#endregion Address

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
        public Int32Field BusinessEntityId;
        public Int16Field IsActive;
        public Int32Field TenantId;

        //public Int32Field BEId;
        public StringField PersonType;
        public StringField Title;
        public StringField FirstName;
        public StringField MiddleName;
        public StringField LastName;
        public StringField FullName;
        public StringField Suffix;

        public Int32Field AddressId;
        public Int32Field AddressTypeId;

        //public StringField AddressTypeName;

        //public Int32Field BEAId;
        //public ListField<AddressTypeRow> AddressesType;



    }
}