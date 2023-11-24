
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;
    using global::Store.Administration.Entities;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Wares]")]
    [DisplayName("Wares"), InstanceName("Wares")]
    [ReadPermission(PermissionKeys.Wares.View)]
    [ModifyPermission(PermissionKeys.Wares.Modify)]
    [DeletePermission(PermissionKeys.Wares.Delete)]
    [LookupScript("Store.Wares", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [LocalizationRow(typeof(WaresLangRow))]
    public sealed class WaresRow : LoggingRow<WaresRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Wares Id"), Identity, LookupInclude, IdProperty]
        public Int32? WaresId
        {
            get => Fields.WaresId[this]; 
            set => Fields.WaresId[this] = value; 
        }

        [DisplayName("Wares Code"), Size(15), NotNull, QuickSearch, LookupInclude]
        public String WaresCode
        {
            get => Fields.WaresCode[this]; 
            set => Fields.WaresCode[this] = value; 
        }

        [DisplayName("Wares Barcode"), Size(15), QuickSearch, LookupInclude]
        public String WaresBarcode
        {
            get => Fields.WaresBarcode[this]; 
            set => Fields.WaresBarcode[this] = value; 
        }

        [DisplayName("Wares Label"), Size(20)]
        public String WaresLabel
        {
            get => Fields.WaresLabel[this]; 
            set => Fields.WaresLabel[this] = value; 
        }

        [DisplayName("Wares Name"), Size(60), QuickSearch, LookupInclude, NameProperty]
        public String WaresName
        {
            get => Fields.WaresName[this]; 
            set => Fields.WaresName[this] = value; 
        }

        [DisplayName("Wares Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "WaresImage/~", CopyToHistory = true)]
        public String WaresImage
        {
            get => Fields.WaresImage[this]; 
            set => Fields.WaresImage[this] = value; 
        }

        [DisplayName("Quantity Per Unit"), Size(15), Scale(4), DefaultValue(1)]
        public Decimal? QuantityPerUnit
        {
            get => Fields.QuantityPerUnit[this]; 
            set => Fields.QuantityPerUnit[this] = value; 
        }

        [DisplayName("Unit Price"), Size(15), Scale(4), LookupInclude]
        public Decimal? UnitPrice
        {
            get => Fields.UnitPrice[this]; 
            set => Fields.UnitPrice[this] = value; 
        }

        [DisplayName("Units In Stock"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
        public Decimal? UnitsInStock
        {
            get => Fields.UnitsInStock[this]; 
            set => Fields.UnitsInStock[this] = value; 
        }

        [DisplayName("Units On Order"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
        public Decimal? UnitsOnOrder
        {
            get => Fields.UnitsOnOrder[this]; 
            set => Fields.UnitsOnOrder[this] = value; 
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get => Fields.Discontinued[this]; 
            set => Fields.Discontinued[this] = value; 
        }

        [DisplayName("Account Id"), Column("AccountID")]
        public Int32? AccountId
        {
            get => Fields.AccountId[this]; 
            set => Fields.AccountId[this] = value; 
        }

        #region Counterparty
        [DisplayName("Counterparty ID"), NotNull, ForeignKey(typeof(CounterpartiesRow), "CounterpartyID"), LeftJoin("c")]
        [QuickSearch, CounterpartiesEditor, LookupInclude]
        public String CounterpartyId
        {
            get => Fields.CounterpartyId[this]; 
            set => Fields.CounterpartyId[this] = value; 
        }

        [Origin("c")]
        //[DisplayName("Counterparty Contact Name"), Expression("c.[ContactName]")]
        public String CounterpartyContactName
        {
            get => Fields.CounterpartyContactName[this]; 
            set => Fields.CounterpartyContactName[this] = value; 
        }

        [Origin("c"), DisplayName("Counterparty")]
        //[DisplayName("Counterparty Company Name"), Expression("c.[CompanyName]")]
        [LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String CounterpartyCompanyName
        {
            get => Fields.CounterpartyCompanyName[this]; 
            set => Fields.CounterpartyCompanyName[this] = value; 
        }

        [Origin("c")]
        //[DisplayName("Counterparty Contact Title"), Expression("c.[ContactTitle]")]
        public String CounterpartyContactTitle
        {
            get => Fields.CounterpartyContactTitle[this]; 
            set => Fields.CounterpartyContactTitle[this] = value; 
        }

        [Origin("c")]
        //[DisplayName("Counterparty City"), Expression("c.[City]")]
        public String CounterpartyCity
        {
            get => Fields.CounterpartyCity[this]; 
            set => Fields.CounterpartyCity[this] = value; 
        }

        [Origin("c")]
        //[DisplayName("Counterparty Region"), Expression("c.[Region]")]
        public String CounterpartyRegion
        {
            get => Fields.CounterpartyRegion[this]; 
            set => Fields.CounterpartyRegion[this] = value; 
        }

        [Origin("c")]
        //[DisplayName("Counterparty Country"), Expression("c.[Country]")]
        public String CounterpartyCountry
        {
            get => Fields.CounterpartyCountry[this]; 
            set => Fields.CounterpartyCountry[this] = value; 
        }

        [Origin("c")]
        //[DisplayName("Counterparty Phone"), Expression("c.[Phone]")]
        public String CounterpartyPhone
        {
            get => Fields.CounterpartyPhone[this]; 
            set => Fields.CounterpartyPhone[this] = value; 
        }

        #endregion Counterparty

        #region Category

        [DisplayName("Category ID"), ForeignKey(typeof(CategoriesRow)), LeftJoin("cat"), LookupInclude]
        [LookupEditor(typeof(CategoriesRow), FilterField = "Type", FilterValue = 100, InplaceAdd = true)]
        public Int32? CategoryId
        {
            get => Fields.CategoryId[this]; 
            set => Fields.CategoryId[this] = value; 
        }

        [Origin("cat"), DisplayName("Type"), LookupFiltering("Store.WaresCategory")]
        public Int16? Type
        {
            get => Fields.Type[this]; 
            set => Fields.Type[this] = value; 
        }

        [Origin("cat"), DisplayName("Category Name")]
        public String CategoryCategoryName
        {
            get => Fields.CategoryCategoryName[this]; 
            set => Fields.CategoryCategoryName[this] = value; 
        }

        [Origin("cat")]
        public String CategoryDescription
        {
            get => Fields.CategoryDescription[this]; 
            set => Fields.CategoryDescription[this] = value; 
        }

        #endregion Category

        #region Measure

        [DisplayName("Measure Id"), ForeignKey(typeof(MeasuresRow)), LeftJoin("meas"), LookupInclude]
        [LookupEditor(typeof(MeasuresRow), InplaceAdd = true)]
        public Int32? MeasureId
        {
            get => Fields.MeasureId[this]; 
            set => Fields.MeasureId[this] = value; 
        }

        [Origin("meas")]
        public String MeasureName
        {
            get => Fields.MeasureName[this]; 
            set => Fields.MeasureName[this] = value; 
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

        public WaresRow( )
        {
        }

        public WaresRow(RowFields Fields)
            : base(Fields)
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
            //public Int32Field SupplierId;
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
            public StringField CounterpartyCity;
            public StringField CounterpartyRegion;
            public StringField CounterpartyCountry;
            public StringField CounterpartyPhone;

            public Int16Field Type;
            //public StringField CategoryCategoryCode;
            public StringField CategoryCategoryName;
            public StringField CategoryDescription;
            //public StreamField CategoryPicture;

            public StringField MeasureName;
        }
    }
}
