
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using CoreStore.Scripts;
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
    public sealed class WaresRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Wares Id"), Identity, LookupInclude]
        public Int32? WaresId
        {
            get { return Fields.WaresId[this]; }
            set { Fields.WaresId[this] = value; }
        }

        [DisplayName("Wares Code"), Size(15), NotNull, QuickSearch, LookupInclude]
        public String WaresCode
        {
            get { return Fields.WaresCode[this]; }
            set { Fields.WaresCode[this] = value; }
        }

        [DisplayName("Wares Barcode"), Size(15), QuickSearch, LookupInclude]
        public String WaresBarcode
        {
            get { return Fields.WaresBarcode[this]; }
            set { Fields.WaresBarcode[this] = value; }
        }

        [DisplayName("Wares Label"), Size(20)]
        public String WaresLabel
        {
            get { return Fields.WaresLabel[this]; }
            set { Fields.WaresLabel[this] = value; }
        }

        [DisplayName("Wares Name"), Size(60), QuickSearch, LookupInclude]
        public String WaresName
        {
            get { return Fields.WaresName[this]; }
            set { Fields.WaresName[this] = value; }
        }

        [DisplayName("Wares Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "WaresImage/~", CopyToHistory = true)]
        public String WaresImage
        {
            get { return Fields.WaresImage[this]; }
            set { Fields.WaresImage[this] = value; }
        }

        [DisplayName("Quantity Per Unit"), Size(15), Scale(4), DefaultValue(1)]
        public Decimal? QuantityPerUnit
        {
            get { return Fields.QuantityPerUnit[this]; }
            set { Fields.QuantityPerUnit[this] = value; }
        }

        [DisplayName("Unit Price"), Size(15), Scale(4), LookupInclude]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Units In Stock"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
        public Decimal? UnitsInStock
        {
            get { return Fields.UnitsInStock[this]; }
            set { Fields.UnitsInStock[this] = value; }
        }

        [DisplayName("Units On Order"), Size(15), Scale(4), DefaultValue(0), LookupInclude]
        public Decimal? UnitsOnOrder
        {
            get { return Fields.UnitsOnOrder[this]; }
            set { Fields.UnitsOnOrder[this] = value; }
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        [DisplayName("Account Id"), Column("AccountID")]
        public Int32? AccountId
        {
            get { return Fields.AccountId[this]; }
            set { Fields.AccountId[this] = value; }
        }

        #region Counterparty
        [DisplayName("Counterparty ID"), NotNull, ForeignKey(typeof(CounterpartiesRow), "CounterpartyID"), LeftJoin("c")]
        [QuickSearch, CounterpartiesEditor, LookupInclude]
        public String CounterpartyId
        {
            get { return Fields.CounterpartyId[this]; }
            set { Fields.CounterpartyId[this] = value; }
        }

        [Origin("c")]
        //[DisplayName("Counterparty Contact Name"), Expression("c.[ContactName]")]
        public String CounterpartyContactName
        {
            get { return Fields.CounterpartyContactName[this]; }
            set { Fields.CounterpartyContactName[this] = value; }
        }

        [Origin("c"), DisplayName("Counterparty")]
        //[DisplayName("Counterparty Company Name"), Expression("c.[CompanyName]")]
        [LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String CounterpartyCompanyName
        {
            get { return Fields.CounterpartyCompanyName[this]; }
            set { Fields.CounterpartyCompanyName[this] = value; }
        }

        [Origin("c")]
        //[DisplayName("Counterparty Contact Title"), Expression("c.[ContactTitle]")]
        public String CounterpartyContactTitle
        {
            get { return Fields.CounterpartyContactTitle[this]; }
            set { Fields.CounterpartyContactTitle[this] = value; }
        }

        [Origin("c")]
        //[DisplayName("Counterparty City"), Expression("c.[City]")]
        public String CounterpartyCity
        {
            get { return Fields.CounterpartyCity[this]; }
            set { Fields.CounterpartyCity[this] = value; }
        }

        [Origin("c")]
        //[DisplayName("Counterparty Region"), Expression("c.[Region]")]
        public String CounterpartyRegion
        {
            get { return Fields.CounterpartyRegion[this]; }
            set { Fields.CounterpartyRegion[this] = value; }
        }

        [Origin("c")]
        //[DisplayName("Counterparty Country"), Expression("c.[Country]")]
        public String CounterpartyCountry
        {
            get { return Fields.CounterpartyCountry[this]; }
            set { Fields.CounterpartyCountry[this] = value; }
        }

        [Origin("c")]
        //[DisplayName("Counterparty Phone"), Expression("c.[Phone]")]
        public String CounterpartyPhone
        {
            get { return Fields.CounterpartyPhone[this]; }
            set { Fields.CounterpartyPhone[this] = value; }
        }

        #endregion Counterparty

        #region Category

        [DisplayName("Category ID"), ForeignKey(typeof(CategoriesRow)), LeftJoin("cat"), LookupInclude]
        [LookupEditor(typeof(CategoriesRow), FilterField = "Type", FilterValue = 100, InplaceAdd = true)]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [Origin("cat"), DisplayName("Type"), LookupFiltering("Store.WaresCategory")]
        public Int16? Type
        {
            get { return Fields.Type[this]; }
            set { Fields.Type[this] = value; }
        }

        [Origin("cat"), DisplayName("Category Name")]
        public String CategoryCategoryName
        {
            get { return Fields.CategoryCategoryName[this]; }
            set { Fields.CategoryCategoryName[this] = value; }
        }

        [Origin("cat")]
        public String CategoryDescription
        {
            get { return Fields.CategoryDescription[this]; }
            set { Fields.CategoryDescription[this] = value; }
        }

        #endregion Category

        #region Measure

        [DisplayName("Measure Id"), ForeignKey(typeof(MeasuresRow)), LeftJoin("meas"), LookupInclude]
        [LookupEditor(typeof(MeasuresRow), InplaceAdd = true)]
        public Int32? MeasureId
        {
            get { return Fields.MeasureId[this]; }
            set { Fields.MeasureId[this] = value; }
        }

        [Origin("meas")]
        public String MeasureName
        {
            get { return Fields.MeasureName[this]; }
            set { Fields.MeasureName[this] = value; }
        }

        #endregion Measure

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Tenant & Activ

        IIdField IIdRow.IdField
        {
            get { return Fields.WaresId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.WaresName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresRow()
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
