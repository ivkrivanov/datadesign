
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Wares]")]
    [DisplayName("Wares"), InstanceName("Wares")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript("Store.Wares", LookupType = typeof(MultiTenantRowLookupScript<>))]
    //[CaptureLog(typeof(ItemLogRow))]
    [LocalizationRow(typeof(WaresLangRow))]
    public sealed class WaresRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Wares Id"), Identity, LookupInclude]
        public Int32? WaresID
        {
            get { return Fields.WaresID[this]; }
            set { Fields.WaresID[this] = value; }
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

        [DisplayName("Supplier"), ForeignKey(typeof(SupplierRow)), LeftJoin("sup"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierID
        {
            get { return Fields.SupplierID[this]; }
            set { Fields.SupplierID[this] = value; }
        }

        [DisplayName("Quantity Per Unit")]
        public Int32? QuantityPerUnit
        {
            get { return Fields.QuantityPerUnit[this]; }
            set { Fields.QuantityPerUnit[this] = value; }
        }

        [DisplayName("Unit Price"), Scale(4), LookupInclude]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Unit In Stock"), Scale(4), LookupInclude]
        public Decimal? UnitsInStock
        {
            get { return Fields.UnitsInStock[this]; }
            set { Fields.UnitsInStock[this] = value; }
        }

        [DisplayName("Unit On Order"), Scale(4), LookupInclude]
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

        [DisplayName("Account Id"), NotNull, DefaultValue(1)]
        public Int32? AccountID
        {
            get { return Fields.AccountID[this]; }
            set { Fields.AccountID[this] = value; }
        }

        #region Counterparty

        [DisplayName("Counterparty ID"), NotNull, ForeignKey(typeof(CounterpartyRow)), LeftJoin("c"), CounterpartyEditor]
        public String CounterpartyID
        {
            get { return Fields.CounterpartyID[this]; }
            set { Fields.CounterpartyID[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyContactName
        {
            get { return Fields.CounterpartyContactName[this]; }
            set { Fields.CounterpartyContactName[this] = value; }
        }

        [Origin("c"), DisplayName("Counterparty"), LookupInclude]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyContactTitle
        {
            get { return Fields.CounterpartyContactTitle[this]; }
            set { Fields.CounterpartyContactTitle[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyCity
        {
            get { return Fields.CounterpartyCity[this]; }
            set { Fields.CounterpartyCity[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyRegion
        {
            get { return Fields.CounterpartyRegion[this]; }
            set { Fields.CounterpartyRegion[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyCountry
        {
            get { return Fields.CounterpartyCountry[this]; }
            set { Fields.CounterpartyCountry[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyPhone
        {
            get { return Fields.CounterpartyPhone[this]; }
            set { Fields.CounterpartyPhone[this] = value; }
        }

        #endregion Counterparty

        //#region Supplier

        //[Origin("sup"), DisplayName("Supplier"), LookupInclude]
        //public String SupplierSupplierStat
        //{
        //    get { return Fields.SupplierSupplierStat[this]; }
        //    set { Fields.SupplierSupplierStat[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierCompanyName
        //{
        //    get { return Fields.SupplierCompanyName[this]; }
        //    set { Fields.SupplierCompanyName[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierContactName
        //{
        //    get { return Fields.SupplierContactName[this]; }
        //    set { Fields.SupplierContactName[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierContactTitle
        //{
        //    get { return Fields.SupplierContactTitle[this]; }
        //    set { Fields.SupplierContactTitle[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierAddress
        //{
        //    get { return Fields.SupplierAddress[this]; }
        //    set { Fields.SupplierAddress[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierCity
        //{
        //    get { return Fields.SupplierCity[this]; }
        //    set { Fields.SupplierCity[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierRegion
        //{
        //    get { return Fields.SupplierRegion[this]; }
        //    set { Fields.SupplierRegion[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierPostalCode
        //{
        //    get { return Fields.SupplierPostalCode[this]; }
        //    set { Fields.SupplierPostalCode[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierCountry
        //{
        //    get { return Fields.SupplierCountry[this]; }
        //    set { Fields.SupplierCountry[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierPhone
        //{
        //    get { return Fields.SupplierPhone[this]; }
        //    set { Fields.SupplierPhone[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierFax
        //{
        //    get { return Fields.SupplierFax[this]; }
        //    set { Fields.SupplierFax[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierEmail
        //{
        //    get { return Fields.SupplierEmail[this]; }
        //    set { Fields.SupplierEmail[this] = value; }
        //}

        //[Origin("sup")]
        //public String SupplierHomePage
        //{
        //    get { return Fields.SupplierHomePage[this]; }
        //    set { Fields.SupplierHomePage[this] = value; }
        //}

        //#endregion Supplier

        #region Category

        //[Origin("cat"), DisplayName("Category Code")]
        //public String CategoryCode
        //{
        //    get { return Fields.CategoryCode[this]; }
        //    set { Fields.CategoryCode[this] = value; }
        //}

        [DisplayName("Category ID"), ForeignKey(typeof(CategoryRow)), LeftJoin("cat"), LookupInclude]
        [LookupEditor(typeof(CategoryRow), FilterField = "Type", FilterValue = 100, InplaceAdd = true)]
        public Int32? CategoryID
        {
            get { return Fields.CategoryID[this]; }
            set { Fields.CategoryID[this] = value; }
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

        //[Origin("cat")]
        //public String CategoryPicture
        //{
        //    get { return Fields.CategoryPicture[this]; }
        //    set { Fields.CategoryPicture[this] = value; }
        //}

        #endregion Category

        #region Measure

        [DisplayName("Measure Id"), ForeignKey(typeof(MeasureRow)), LeftJoin("meas"), LookupInclude]
        [LookupEditor(typeof(MeasureRow), InplaceAdd = true)]
        public Int32? MeasureID
        {
            get { return Fields.MeasureID[this]; }
            set { Fields.MeasureID[this] = value; }
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
            get { return Fields.WaresID; }
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
            public Int32Field WaresID;
            public StringField WaresCode;
            public StringField WaresBarcode;
            public StringField WaresLabel;
            public StringField WaresName;
            public StringField WaresImage;
            public StringField CounterpartyID;
            public Int32Field SupplierID;
            public Int32Field CategoryID;
            public Int32Field MeasureID;
            public Int32Field QuantityPerUnit;
            public DecimalField UnitPrice;
            public DecimalField UnitsInStock;
            public DecimalField UnitsOnOrder;
            public BooleanField Discontinued;
            public Int32Field AccountID;

            public Int16Field IsActive;
            public Int32Field TenantId;

            //public StringField SupplierSupplierStat;
            //public StringField SupplierCompanyName;
            //public StringField SupplierContactName;
            //public StringField SupplierContactTitle;
            //public StringField SupplierAddress;
            //public StringField SupplierCity;
            //public StringField SupplierRegion;
            //public StringField SupplierPostalCode;
            //public StringField SupplierCountry;
            //public StringField SupplierPhone;
            //public StringField SupplierFax;
            //public StringField SupplierEmail;
            //public StringField SupplierHomePage;
            public StringField CompanyName;
            public StringField CounterpartyContactName;
            public StringField CounterpartyContactTitle;
            public StringField CounterpartyCity;
            public StringField CounterpartyRegion;
            public StringField CounterpartyCountry;
            public StringField CounterpartyPhone;

            public Int16Field Type;
            //public StringField CategoryCode;
            //public StringField CategoryName;
            //public StringField Description;
            //public StringField Picture;

            public StringField CategoryCategoryName;
            public StringField CategoryDescription;
            //public StreamField CategoryPicture;

            public StringField MeasureName;
        }
    }
}
