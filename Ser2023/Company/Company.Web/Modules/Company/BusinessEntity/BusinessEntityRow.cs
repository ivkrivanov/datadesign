using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;
//using System.ComponentModel.DataAnnotations.Schema;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntity]")]
[DisplayName("Business Entity"), InstanceName("Business Entity")]
[ReadPermission(PermissionKeys.BusinessEntity.View)]
[ModifyPermission(PermissionKeys.BusinessEntity.Modify)]
[DeletePermission(PermissionKeys.BusinessEntity.Delete)]
//[LeftJoin("per", "[person].[Person]", "per.[BusinessEntityId] = T0.[BusinessEntityId]", RowType = typeof(PersonRow), TitlePrefix = "")]
[LeftJoin("adr", "[person].[BusinessEntityAddress]", "adr.[BusinessEntityId] = T0.[BusinessEntityId]", RowType = typeof(BusinessEntityAddressRow), TitlePrefix = "")]
[UpdatableExtension(jPerson, typeof(PersonRow), CascadeDelete = true)]
[LookupScript("Company.BusinessEntity", LookupType = typeof(MultiTenantRowLookupScript<>))]

public sealed class BusinessEntityRow : LoggingRow<BusinessEntityRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow
{
    const string jPerson = nameof(jPerson);

    [DisplayName("Business Entity Id"), PrimaryKey, ForeignKey(typeof(PersonRow)), LeftJoin(jPerson), Updatable]
    [Column("BusinessEntityId"), Identity, IdProperty]
    public int? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    #region Person

    [DisplayName("PersonType"), Origin(jPerson, nameof(PersonRow.PersonType)), LookupInclude]
    public String PersonType { get => fields.PersonType[this]; set => fields.PersonType[this] = value; }

    [DisplayName("Title"), Origin(jPerson, nameof(PersonRow.Title))]
    public String Title { get => fields.Title[this]; set => fields.Title[this] = value; }

    [DisplayName("FirstName"), Origin(jPerson, nameof(PersonRow.FirstName))]
    public String FirstName { get => fields.FirstName[this]; set => fields.FirstName[this] = value; }

    [DisplayName("MiddleName"), Origin(jPerson, nameof(PersonRow.MiddleName))]
    public String MiddleName { get => fields.MiddleName[this]; set => fields.MiddleName[this] = value; }

    [DisplayName("LastName"), Origin(jPerson, nameof(PersonRow.LastName))]
    public String LastName { get => fields.LastName[this]; set => fields.LastName[this] = value; }

    [DisplayName("Suffix"), Origin(jPerson, nameof(PersonRow.Suffix))]
    public string Suffix { get => fields.Suffix[this]; set => fields.Suffix[this] = value; }

    #endregion Person

    #region EntityAddress

    //[DisplayName("AddressType"), LookupEditor(typeof(AddressTypeRow), Multiple = true), NotMapped]
    //public string Name { get=> fields.Name[this]; set=> fields.Name[this] = value; }

    //[DisplayName("Addresses"), LookupEditor(typeof(AddressRow), Multiple = true), NotMapped]
    //[LinkingSetRelation(typeof(BusinessEntityAddressRow), "BusinessEntityId", "AddressId")]
    //[MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
    //public List<int> BusinessEntityAddresses { get => fields.BusinessEntityAddresses[this]; set => fields.BusinessEntityAddresses[this] = value; }

    #endregion

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
        //public StringField FullName;
        public StringField Suffix;
        //public StringField Name;

        //public ListField<int> BusinessEntityAddresses;



    }
}