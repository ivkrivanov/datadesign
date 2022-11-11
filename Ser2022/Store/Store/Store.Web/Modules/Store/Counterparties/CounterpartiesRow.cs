
namespace Store.Store.Entities
{
    //using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Extensions.Entities;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Counterparties]")]
    [DisplayName("Counterparties"), InstanceName("Counterparties")]
    [ReadPermission(PermissionKeys.Counterparties.View)]
    [ModifyPermission(PermissionKeys.Counterparties.Modify)]
    [DeletePermission(PermissionKeys.Counterparties.Delete)]
    [LeftJoin("cd", "CounterpartyDetails", "cd.[ID] = t0.[ID]", RowType = typeof(CounterpartyDetailsRow), TitlePrefix = "")]
    [UpdatableExtension("cd", typeof(CounterpartyDetailsRow), CascadeDelete = true)]
    [LookupScript(typeof(Scripts.CounterpartiesLookup))]
    public sealed class CounterpartiesRow : LoggingRow<CounterpartiesRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Id"), Column("ID"), Identity, IdProperty]
        public Int32? Id
        {
            get => Fields.Id[this]; 
            set =>Fields.Id[this] = value; 
        }

        [DisplayName("Counterparty Id"), Column("CounterpartyID"), Size(14), PrimaryKey, NotNull, QuickSearch, Updatable(false), LookupInclude]
        public String CounterpartyId
        {
            get => Fields.CounterpartyId[this]; 
            set =>Fields.CounterpartyId[this] = value; 
        }

        [DisplayName("Company Name"), Size(40), NotNull, QuickSearch, LookupInclude, NameProperty]
        public String CompanyName
        {
            get => Fields.CompanyName[this]; 
            set =>Fields.CompanyName[this] = value; 
        }

        [DisplayName("Contact Name"), Size(30), QuickSearch]
        public String ContactName
        {
            get => Fields.ContactName[this]; 
            set =>Fields.ContactName[this] = value; 
        }

        [DisplayName("Contact Title"), Size(30)]
        public String ContactTitle
        {
            get => Fields.ContactTitle[this]; 
            set =>Fields.ContactTitle[this] = value; 
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get => Fields.Address[this]; 
            set =>Fields.Address[this] = value; 
        }

        [DisplayName("City"), Size(15), LookupEditor(typeof(Scripts.CounterpartiesLookupCity), CascadeFrom = "Country", AutoComplete = true)]
        public String City
        {
            get => Fields.City[this]; 
            set =>Fields.City[this] = value; 
        }

        [DisplayName("Region"), Size(15)]
        public String Region
        {
            get => Fields.Region[this]; 
            set =>Fields.Region[this] = value; 
        }

        [DisplayName("Postal Code"), Size(10)]
        public String PostalCode
        {
            get => Fields.PostalCode[this]; 
            set =>Fields.PostalCode[this] = value; 
        }

        [DisplayName("Country"), Size(15), LookupEditor(typeof(Scripts.CounterpartiesLookupCountry), AutoComplete = true)]
        public String Country
        {
            get => Fields.Country[this]; 
            set =>Fields.Country[this] = value; 
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get => Fields.Phone[this]; 
            set =>Fields.Phone[this] = value; 
        }

        [Origin("cd")]
        public DateTime? LastContactDate
        {
            get => Fields.LastContactDate[this]; 
            set =>Fields.LastContactDate[this] = value; 
        }

        [Origin("cd"), LookupEditor(typeof(EmployeesRow))]
        public Int32? LastContactedBy
        {
            get => Fields.LastContactedBy[this]; 
            set =>Fields.LastContactedBy[this] = value; 
        }

        [Origin("cd"), EmailEditor]
        public String Email
        {
            get => Fields.Email[this]; 
            set =>Fields.Email[this] = value; 
        }

        [Origin("cd"), DefaultValue(false)]
        public Boolean? SendBulletin
        {
            get => Fields.SendBulletin[this]; 
            set =>Fields.SendBulletin[this] = value; 
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NotesList
        {
            get => Fields.NotesList[this]; 
            set =>Fields.NotesList[this] = value; 
        }

        [LookupEditor(typeof(EmployeesRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CounterpartyRepresentativesRow), "CounterpartyID", "EmployeeID")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
        public List<Int32> Representatives
        {
            get => Fields.Representatives[this]; 
            set =>Fields.Representatives[this] = value; 
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this]; 
            set =>Fields.TenantId[this] = value; 
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId; 
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => Fields.IsActive[this]; 
            set =>Fields.IsActive[this] = value; 
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => Fields.IsActive; 
        }

        #endregion Tenant & Activ

        public CounterpartiesRow()
        {
        }

        public CounterpartiesRow(RowFields Fields)
            : base(Fields)
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

            public RowListField<NoteRow> NotesList;
            public ListField<Int32> Representatives;
            public DateTimeField LastContactDate;
            public Int32Field LastContactedBy;
            public StringField Email;
            public BooleanField SendBulletin;
        }
    }
}
