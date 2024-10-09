using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Wares]")]
[DisplayName("Wares"), InstanceName("Wares")]
[ReadPermission(PermissionKeys.Wares.View)]
[ModifyPermission(PermissionKeys.Wares.Modify)]
[DeletePermission(PermissionKeys.Wares.Delete)]
[LookupScript("Store.Wares", LookupType = typeof(MultiTenantRowLookupScript<>))]
[LocalizationRow(typeof(WaresLangRow))]
public sealed class WaresRow : LoggingRow<WaresRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jCounterparty = nameof(jCounterparty);
    const string jCategory = nameof(jCategory);
    const string jMeasure = nameof(jMeasure);


    [DisplayName("Wares Id"), Column("WaresID"), Identity, IdProperty]
    public int? WaresId { get => fields.WaresId[this]; set => fields.WaresId[this] = value;}

    [DisplayName("Wares Code"), Size(15), NotNull, QuickSearch, LookupInclude]
    public string WaresCode { get => fields.WaresCode[this]; set => fields.WaresCode[this] = value; }

    [DisplayName("Wares Barcode"), Size(15), QuickSearch, LookupInclude]
    public string WaresBarcode { get => fields.WaresBarcode[this]; set => fields.WaresBarcode[this] = value; }

    [DisplayName("Wares Label"), Size(20)]
    public string WaresLabel { get => fields.WaresLabel[this]; set => fields.WaresLabel[this] = value; }

    [DisplayName("Wares Name"), Size(60), QuickSearch, LookupInclude, NameProperty]
    public string WaresName { get => fields.WaresName[this]; set => fields.WaresName[this] = value; }

    [DisplayName("Wares Image"), Size(255)]
    [ImageUploadEditor(FilenameFormat = "WaresImage/~", CopyToHistory = true)]
    public string WaresImage { get => fields.WaresImage[this]; set => fields.WaresImage[this] = value; }

    [DisplayName("Quantity Per Unit"), Size(15), Scale(4)]
    public decimal? QuantityPerUnit { get => fields.QuantityPerUnit[this]; set => fields.QuantityPerUnit[this] = value; }

    [DisplayName("Unit Price"), Size(15), Scale(4), LookupInclude]
    public decimal? UnitPrice { get => fields.UnitPrice[this]; set => fields.UnitPrice[this] = value; }

    [DisplayName("Units In Stock"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
    public decimal? UnitsInStock { get => fields.UnitsInStock[this]; set => fields.UnitsInStock[this] = value; }

    [DisplayName("Units On Order"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
    public decimal? UnitsOnOrder { get => fields.UnitsOnOrder[this]; set => fields.UnitsOnOrder[this] = value; }

    [DisplayName("Discontinued"), NotNull]
    public bool? Discontinued { get => fields.Discontinued[this]; set => fields.Discontinued[this] = value; }

    [DisplayName("Account Id"), Column("AccountID")]
    public Int32? AccountId {  get => Fields.AccountId[this]; set => Fields.AccountId[this] = value; }

    #region Counterparty

    [DisplayName("Counterparty"), NotNull, Size(14), ForeignKey(typeof(CounterpartiesRow)), LeftJoin(jCounterparty)]
    //[QuickSearch, Store.CounterpartiesEditor, LookupInclude]
    [LookupEditor(typeof(CounterpartiesRow), InplaceAdd = false, DialogType = "Company.Store.CounterpartiesDialog")]
    public string CounterpartyId { get => fields.CounterpartyId[this]; set => fields.CounterpartyId[this] = value; }

    [DisplayName("Counterparty Company Name"), Origin(jCounterparty, nameof(CounterpartiesRow.CompanyName))] // Expression("jCounterparty.[CompanyName]")]
    public string CompanyName { get => fields.CompanyName[this]; set => fields.CompanyName[this] = value; }

    [DisplayName("Counterparty Contact Name"), Origin(jCounterparty, nameof(CounterpartiesRow.ContactName))] //Expression("jCounterparty.[ContactName]")]
    public string ContactName { get => fields.ContactName[this]; set => fields.ContactName[this] = value; }

    [DisplayName("Counterparty Contact Title"), Origin(jCounterparty, nameof(CounterpartiesRow.ContactTitle))] //Expression("jCounterparty.[ContactTitle]")]
    public string ContactTitle { get => fields.ContactTitle[this]; set => fields.ContactTitle[this] = value; }

    [DisplayName("Counterparty Address"), Origin(jCounterparty, nameof(CounterpartiesRow.Address))] //Expression("jCounterparty.[Address]")]
    public string Address { get => fields.Address[this]; set => fields.Address[this] = value; }

    [DisplayName("Counterparty City"), Origin(jCounterparty, nameof(CounterpartiesRow.City))] //Expression("jCounterparty.[City]")]
    public string City { get => fields.City[this]; set => fields.City[this] = value; }

    [DisplayName("Counterparty Region"), Origin(jCounterparty, nameof(CounterpartiesRow.Region))] // Expression("jCounterparty.[Region]")]
    public string Region { get => fields.Region[this]; set => fields.Region[this] = value; }

    [DisplayName("Counterparty Postal Code"), Origin(jCounterparty, nameof(CounterpartiesRow.PostalCode))] //Expression("jCounterparty.[PostalCode]")]
    public string PostalCode { get => fields.PostalCode[this]; set => fields.PostalCode[this] = value; }

    [DisplayName("Counterparty Country"), Origin(jCounterparty, nameof(CounterpartiesRow.Country))] //Expression("jCounterparty.[Country]")]
    public string Country { get => fields.Country[this]; set => fields.Country[this] = value; }

    [DisplayName("Counterparty Phone"), Origin(jCounterparty, nameof(CounterpartiesRow.Phone))] // Expression("jCounterparty.[Phone]")]
    public string Phone { get => fields.Phone[this]; set => fields.Phone[this] = value; }

    #endregion Counterparty

    #region Category

    [DisplayName("Category"), ForeignKey(typeof(CategoriesRow)), LeftJoin(jCategory), LookupInclude]
    [LookupEditor(typeof(CategoriesRow), InplaceAdd = true, FilterField = "Type", FilterValue = 100)] //, DialogType = "Store.Store.CategoriesDialog"
    public int? CategoryId { get => fields.CategoryId[this]; set => fields.CategoryId[this] = value; }

    [DisplayName("Category Category Type Id"), Origin(jCategory, nameof(CategoriesRow.Type))]  // Expression("jCategory.[CategoryTypeID]")]
    public Int16? Type { get => Fields.Type[this]; set => Fields.Type[this] = value; }

    [DisplayName("Category Category Name"), Origin(jCategory, nameof(CategoriesRow.CategoryName))] //Expression("jCategory.[CategoryName]")]
    public string CategoryName { get => fields.CategoryName[this]; set => fields.CategoryName[this] = value; }

    [DisplayName("Category Description"), Origin(jCategory, nameof(CategoriesRow.Description))] //Expression("jCategory.[Description]")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value; }

    #endregion Category

    #region Measure

    [DisplayName("Measure"), Column("MeasureID"), NotNull, ForeignKey(typeof(MeasuresRow)), LeftJoin(jMeasure), TextualField("MeasureName")]
    public int? MeasureId { get => fields.MeasureId[this]; set => fields.MeasureId[this] = value; }
    [DisplayName("Measure Measure Name"), Origin(jMeasure, nameof(MeasuresRow.MeasureName))] //Expression("jMeasure.[MeasureName]")]
    public string MeasureName { get => fields.MeasureName[this]; set => fields.MeasureName[this] = value; }

    #endregion Measure

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

    public class RowFields : LoggingRowFields
    {
        public Int32Field WaresId;
        public StringField WaresCode;
        public StringField WaresBarcode;
        public StringField WaresLabel;
        public StringField WaresName;
        public StringField WaresImage;
        public StringField CounterpartyId;
        public Int32Field CategoryId;
        public Int32Field MeasureId;
        public DecimalField QuantityPerUnit;
        public DecimalField UnitPrice;
        public DecimalField UnitsInStock;
        public DecimalField UnitsOnOrder;
        public BooleanField Discontinued;
        public Int32Field AccountId;

        public Int16Field IsActive;
        public Int32Field TenantId;

        public StringField CompanyName;
        public StringField ContactName;
        public StringField ContactTitle;
        public StringField Address;
        public StringField City;
        public StringField Region;
        public StringField PostalCode;
        public StringField Country;
        public StringField Phone;

        public Int16Field Type;
        public StringField CategoryName;
        public StringField Description;

        public StringField MeasureName;

    }
}