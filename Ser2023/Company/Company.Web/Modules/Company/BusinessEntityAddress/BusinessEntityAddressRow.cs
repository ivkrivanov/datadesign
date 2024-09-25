using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Company;

[ConnectionKey("Company"), Module("Company"), TableName("[person].[BusinessEntityAddress]")]
[DisplayName("Business Entity Address"), InstanceName("Business Entity Address")]
[ReadPermission(PermissionKeys.BusinessEntityAddress.View)]
[ModifyPermission(PermissionKeys.BusinessEntityAddress.Modify)]
[DeletePermission(PermissionKeys.BusinessEntityAddress.Delete)]
[LookupScript("Company.BusinessEntityAddress", LookupType = typeof(MultiTenantRowLookupScript<>))]
public sealed class BusinessEntityAddressRow : LoggingRow<BusinessEntityAddressRow.RowFields>, IIdRow, IIsActiveRow, IMultiTenantRow //, INameRow
{
    const string jBusinessEntity = nameof(jBusinessEntity);
    const string jAddress = nameof(jAddress);
    const string jAddressType = nameof(jAddressType);

    [DisplayName("Business Entity"), NotNull, IdProperty, Updatable] //ForeignKey(typeof(BusinessEntityRow), nameof(BusinessEntityRow.BusinessEntityId)), LeftJoin(jBusinessEntity), IdProperty, Updatable]
    public long? BusinessEntityId { get => fields.BusinessEntityId[this]; set => fields.BusinessEntityId[this] = value; }

    [DisplayName("Address"), NotNull, ForeignKey(typeof(AddressRow), nameof(AddressRow.AddressId)), LeftJoin(jAddress)] //, TextualField(nameof(AddressLine1))]
    public long? AddressId { get => fields.AddressId[this]; set => fields.AddressId[this] = value; }

    [DisplayName("Address Type"), NotNull, ForeignKey(typeof(AddressTypeRow), nameof(AddressTypeRow.AddressTypeId)), LeftJoin(jAddressType), NameProperty] //, TextualField(nameof(AddressTypeName))
    [LookupEditor(typeof(AddressTypeRow), InplaceAdd = true)]
    public long? AddressTypeId { get => fields.AddressTypeId[this]; set => fields.AddressTypeId[this] = value; }

    //[DisplayName("AddressTypeName"), Origin(jAddressType, nameof(AddressTypeRow.AddressTypeId)), LookupInclude]  // Expression($"{jAddressType}.[Name]"), Column("Name"), LookupInclude]
    //[LookupEditor(typeof(AddressTypeRow), InplaceAdd = true)]
    //public string StringField { get => fields.AddressType[this]; set => fields.AddressType[this] = value; }

    //[DisplayName("AddressTypeName"), MasterDetailRelation(foreignKey: nameof(AddressTypeRow.AddressTypeId)), NotMapped]
    //public List<AddressTypeRow> AddressType { get => fields.AddressType[this]; set => fields.AddressType[this] = value; }


    //[DisplayName("Addresses"), LookupEditor(typeof(AddressRow), Multiple = true), NotMapped]
    //[MasterDetailRelation(foreignKey: nameof(AddressRow.AddressId))]
    ////[LinkingSetRelation(typeof(AddressRow), "AddressId")]
    //[MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
    //public List<AddressRow> Addresses { get => fields.Addresses[this]; set => fields.Addresses[this] = value; }

    //[DisplayName("Rowguid"), Column("rowguid")]
    //public Guid? Rowguid
    //{
    //    get => fields.Rowguid[this];
    //    set => fields.Rowguid[this] = value;
    //}

    //[DisplayName("Address Address Line1"), Expression($"{jAddress}.[AddressLine1]")]
    //public string AddressLine1
    //{
    //    get => fields.AddressLine1[this];
    //    set => fields.AddressLine1[this] = value;
    //}

    //[DisplayName("Address Type Name"), Expression($"{jAddressType}.[Name]")]
    //public string AddressTypeName
    //{
    //    get => fields.AddressTypeName[this];
    //    set => fields.AddressTypeName[this] = value;
    //}

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
        public Int64Field BusinessEntityId;
        public Int64Field AddressId;
        public Int64Field AddressTypeId;
        //public StringField AddressType;

        //public StringField AddressTypeName;
        //public GuidField Rowguid;
        //public RowListField<AddressTypeRow> AddressType;

        public Int16Field IsActive;
        public Int32Field TenantId;
    }
}