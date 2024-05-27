using Company.Administration.Entities;
using Org.BouncyCastle.Crypto.Generators;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Counterparties]")]
[DisplayName("Counterparties"), InstanceName("Counterparties")]
[ReadPermission(PermissionKeys.Counterparties.View)]
[ModifyPermission(PermissionKeys.Counterparties.Modify)]
[DeletePermission(PermissionKeys.Counterparties.Delete)]
[LeftJoin("cd", "CounterpartyDetails", "cd.[ID] = t0.[ID]", RowType = typeof(CounterpartyDetailsRow), TitlePrefix = "")]
[UpdatableExtension("cd", typeof(CounterpartyDetailsRow), CascadeDelete = true)]
[LookupScript(typeof(Lookups.CounterpartiesLookup))]
public sealed class CounterpartiesRow : LoggingRow<CounterpartiesRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    [DisplayName("Id"), Column("ID"), Identity, IdProperty]
    public int? Id
    {
        get => fields.Id[this];
        set => fields.Id[this] = value;
    }

    [DisplayName("Counterparty Id"), Column("CounterpartyID"), Size(14), PrimaryKey, NotNull, QuickSearch, NameProperty]
    public string CounterpartyId
    {
        get => fields.CounterpartyId[this];
        set => fields.CounterpartyId[this] = value;
    }

    [DisplayName("Company Name"), Size(40), NotNull]
    public string CompanyName
    {
        get => fields.CompanyName[this];
        set => fields.CompanyName[this] = value;
    }

    [DisplayName("Contact Name"), Size(40)]
    public string ContactName
    {
        get => fields.ContactName[this];
        set => fields.ContactName[this] = value;
    }

    [DisplayName("Contact Title"), Size(30)]
    public string ContactTitle
    {
        get => fields.ContactTitle[this];
        set => fields.ContactTitle[this] = value;
    }

    [DisplayName("Address"), Size(60)]
    public string Address
    {
        get => fields.Address[this];
        set => fields.Address[this] = value;
    }

    [DisplayName("City"), Size(15), LookupEditor(typeof(Lookups.CounterpartiesCityLookup), CascadeFrom = "Country", AutoComplete = true)]
    public string City
    {
        get => fields.City[this];
        set => fields.City[this] = value;
    }

    [DisplayName("Region"), Size(15)]
    public string Region
    {
        get => fields.Region[this];
        set => fields.Region[this] = value;
    }

    [DisplayName("Postal Code"), Size(10)]
    public string PostalCode
    {
        get => fields.PostalCode[this];
        set => fields.PostalCode[this] = value;
    }

    [DisplayName("Country"), Size(20), LookupEditor(typeof(Lookups.CounterpartiesCountryLookup), AutoComplete = true)]
    public string Country
    {
        get => fields.Country[this];
        set => fields.Country[this] = value;
    }

    [DisplayName("Phone"), Size(24)]
    public string Phone
    {
        get => fields.Phone[this];
        set => fields.Phone[this] = value;
    }

    [Origin("cd")]
    public DateTime? LastContactDate
    {
        get => Fields.LastContactDate[this];
        set => Fields.LastContactDate[this] = value;
    }

    [Origin("cd"), LookupEditor(typeof(EmployeesRow))]
    public Int32? LastContactedBy
    {
        get => Fields.LastContactedBy[this];
        set => Fields.LastContactedBy[this] = value;
    }

    [Origin("cd"), EmailEditor]
    public String Email
    {
        get => Fields.Email[this];
        set => Fields.Email[this] = value;
    }

    [Origin("cd"), DefaultValue(false)]
    public Boolean? SendBulletin
    {
        get => Fields.SendBulletin[this];
        set => Fields.SendBulletin[this] = value;
    }

    [NotesEditor, NotMapped]
    public List<NotesRow> NotesList
    {
        get => Fields.NotesList[this];
        set => Fields.NotesList[this] = value;
    }

    [LookupEditor(typeof(EmployeesRow), Multiple = true), NotMapped]
    [LinkingSetRelation(typeof(CounterpartyRepresentativesRow), "CounterpartyID", "EmployeeID")]
    [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
    public List<Int32> Representatives
    {
        get => Fields.Representatives[this];
        set => Fields.Representatives[this] = value;
    }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId
    {
        get => Fields.TenantId[this];
        set => Fields.TenantId[this] = value;
    }

    public Int32Field TenantIdField
    {
        get => Fields.TenantId;
    }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive
    {
        get => Fields.IsActive[this];
        set => Fields.IsActive[this] = value;
    }

    Int16Field IIsActiveRow.IsActiveField
    {
        get => Fields.IsActive;
    }

    #endregion Tenant & Activ

    public CounterpartiesRow()
        : base()
    {
    }

    public CounterpartiesRow(RowFields fields)
        : base(fields)
    {
    }

    public class RowFields : LoggingRowFields
    {
        public Int32Field Id;
        public StringField CounterpartyId;
        public StringField CompanyName;
        public StringField ContactName;
        public StringField ContactTitle;
        public StringField Address;
        public StringField City;
        public StringField Region;
        public StringField PostalCode;
        public StringField Country;
        public StringField Phone;

        public Int16Field IsActive;
        public Int32Field TenantId;

        public RowListField<NotesRow> NotesList;
        public ListField<Int32> Representatives;
        public DateTimeField LastContactDate;
        public Int32Field LastContactedBy;
        public StringField Email;
        public BooleanField SendBulletin;
    }
}