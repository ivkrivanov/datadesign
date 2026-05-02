
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;


    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Wares]")]
    [DisplayName("Wares"), InstanceName("Wares")]
    [ReadPermission(PermissionKeys.Wares.View)]
    [ModifyPermission(PermissionKeys.Wares.Modify)]
    [DeletePermission(PermissionKeys.Wares.Delete)]
    [LookupScript("Store.Wares", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(WaresLangRow))]
    public sealed class WaresRow : LoggingRow<WaresRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Wares Id"), Column("WaresID"), Identity, IdProperty]
        public int? WaresId
        {
            get => fields.WaresId[this];
            set => fields.WaresId[this] = value;
        }

        [DisplayName("Wares Code"), Size(15), NotNull, QuickSearch, LookupInclude]
        public string WaresCode
        {
            get => fields.WaresCode[this];
            set => fields.WaresCode[this] = value;
        }

        [DisplayName("Wares Barcode"), Size(15), QuickSearch, LookupInclude]
        public string WaresBarcode
        {
            get => fields.WaresBarcode[this];
            set => fields.WaresBarcode[this] = value;
        }

        [DisplayName("Wares Label"), Size(20)]
        public string WaresLabel
        {
            get => fields.WaresLabel[this];
            set => fields.WaresLabel[this] = value;
        }

        [DisplayName("Wares Name"), Size(60), QuickSearch, LookupInclude, NameProperty]
        public string WaresName
        {
            get => fields.WaresName[this];
            set => fields.WaresName[this] = value;
        }

        [DisplayName("Wares Image"), Size(255)]
        [ImageUploadEditor(FilenameFormat = "WaresImage/~", CopyToHistory = true)]
        public string WaresImage
        {
            get => fields.WaresImage[this];
            set => fields.WaresImage[this] = value;
        }

        [DisplayName("Quantity Per Unit"), Size(15), Scale(4)]
        public decimal? QuantityPerUnit
        {
            get => fields.QuantityPerUnit[this];
            set => fields.QuantityPerUnit[this] = value;
        }

        [DisplayName("Unit Price"), Size(15), Scale(4), LookupInclude]
        public decimal? UnitPrice
        {
            get => fields.UnitPrice[this];
            set => fields.UnitPrice[this] = value;
        }

        [DisplayName("Units In Stock"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
        public decimal? UnitsInStock
        {
            get => fields.UnitsInStock[this];
            set => fields.UnitsInStock[this] = value;
        }

        [DisplayName("Units On Order"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
        public decimal? UnitsOnOrder
        {
            get => fields.UnitsOnOrder[this];
            set => fields.UnitsOnOrder[this] = value;
        }

        [DisplayName("Discontinued"), NotNull]
        public bool? Discontinued
        {
            get => fields.Discontinued[this];
            set => fields.Discontinued[this] = value;
        }

        [DisplayName("Account Id"), Column("AccountID")]
        public Int32? AccountId
        {
            get => Fields.AccountId[this];
            set => Fields.AccountId[this] = value;
        }

        #region Counterparty

        [DisplayName("Counterparty"), NotNull, Size(14), ForeignKey(typeof(CounterpartiesRow)), LeftJoin("jCounterparty")]
        //[QuickSearch, Store.CounterpartiesEditor, LookupInclude]
        [LookupEditor(typeof(CounterpartiesRow), InplaceAdd = false, DialogType = "Store.Store.CounterpartiesDialog")]
        public string CounterpartyId
        {
            get => fields.CounterpartyId[this];
            set => fields.CounterpartyId[this] = value;
        }

        [DisplayName("Counterparty Company Name"), Expression("jCounterparty.[CompanyName]")]
        public string CounterpartyCompanyName
        {
            get => fields.CounterpartyCompanyName[this];
            set => fields.CounterpartyCompanyName[this] = value;
        }

        [DisplayName("Counterparty Contact Name"), Expression("jCounterparty.[ContactName]")]
        public string CounterpartyContactName
        {
            get => fields.CounterpartyContactName[this];
            set => fields.CounterpartyContactName[this] = value;
        }

        [DisplayName("Counterparty Contact Title"), Expression("jCounterparty.[ContactTitle]")]
        public string CounterpartyContactTitle
        {
            get => fields.CounterpartyContactTitle[this];
            set => fields.CounterpartyContactTitle[this] = value;
        }

        [DisplayName("Counterparty Address"), Expression("jCounterparty.[Address]")]
        public string CounterpartyAddress
        {
            get => fields.CounterpartyAddress[this];
            set => fields.CounterpartyAddress[this] = value;
        }

        [DisplayName("Counterparty City"), Expression("jCounterparty.[City]")]
        public string CounterpartyCity
        {
            get => fields.CounterpartyCity[this];
            set => fields.CounterpartyCity[this] = value;
        }

        [DisplayName("Counterparty Region"), Expression("jCounterparty.[Region]")]
        public string CounterpartyRegion
        {
            get => fields.CounterpartyRegion[this];
            set => fields.CounterpartyRegion[this] = value;
        }

        [DisplayName("Counterparty Postal Code"), Expression("jCounterparty.[PostalCode]")]
        public string CounterpartyPostalCode
        {
            get => fields.CounterpartyPostalCode[this];
            set => fields.CounterpartyPostalCode[this] = value;
        }

        [DisplayName("Counterparty Country"), Expression("jCounterparty.[Country]")]
        public string CounterpartyCountry
        {
            get => fields.CounterpartyCountry[this];
            set => fields.CounterpartyCountry[this] = value;
        }

        [DisplayName("Counterparty Phone"), Expression("jCounterparty.[Phone]")]
        public string CounterpartyPhone
        {
            get => fields.CounterpartyPhone[this];
            set => fields.CounterpartyPhone[this] = value;
        }

        #endregion Counterparty

        #region Category

        [DisplayName("Category"), ForeignKey(typeof(CategoriesRow)), LeftJoin("jCategory"), LookupInclude]
        [LookupEditor(typeof(CategoriesRow), InplaceAdd = true, FilterField = "Type", FilterValue = 100)] //, DialogType = "Store.Store.CategoriesDialog"
        public int? CategoryId
        {
            get => fields.CategoryId[this];
            set => fields.CategoryId[this] = value;
        }

        [DisplayName("Category Category Type Id"), Expression("jCategory.[CategoryTypeID]")]
        public Int16? Type
        {
            get => Fields.Type[this];
            set => Fields.Type[this] = value;
        }

        [DisplayName("Category Category Name"), Expression("jCategory.[CategoryName]")]
        public string CategoryCategoryName
        {
            get => fields.CategoryCategoryName[this];
            set => fields.CategoryCategoryName[this] = value;
        }

        [DisplayName("Category Description"), Expression("jCategory.[Description]")]
        public string CategoryDescription
        {
            get => fields.CategoryDescription[this];
            set => fields.CategoryDescription[this] = value;
        }

        #endregion Category

        #region Measure

        [DisplayName("Measure"), Column("MeasureID"), NotNull, ForeignKey("[dbo].[Measures]", "MeasureID"), LeftJoin("jMeasure"), TextualField("MeasureMeasureName")]
        public int? MeasureId
        {
            get => fields.MeasureId[this];
            set => fields.MeasureId[this] = value;
        }
        [DisplayName("Measure Measure Name"), Expression("jMeasure.[MeasureName]")]
        public string MeasureName
        {
            get => fields.MeasureName[this];
            set => fields.MeasureName[this] = value;
        }

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

        public WaresRow()
            : base()
        {
        }

        public WaresRow(RowFields fields)
            : base(fields)
        {
        }

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

            public StringField CounterpartyCompanyName;
            public StringField CounterpartyContactName;
            public StringField CounterpartyContactTitle;
            public StringField CounterpartyAddress;
            public StringField CounterpartyCity;
            public StringField CounterpartyRegion;
            public StringField CounterpartyPostalCode;
            public StringField CounterpartyCountry;
            public StringField CounterpartyPhone;

            public Int16Field Type;
            public StringField CategoryCategoryName;
            public StringField CategoryDescription;

            public StringField MeasureName;

        }
    }
}