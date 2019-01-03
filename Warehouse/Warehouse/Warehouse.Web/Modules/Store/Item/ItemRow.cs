
namespace Warehouse.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;

    using System.ComponentModel;
    using System.IO;
    using Warehouse.Administration.Entities;
    using Warehouse.Store.Scripts;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Items]")]
    [DisplayName("Item"), InstanceName("Item")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript("Store.Item", LookupType = typeof(MultiTenantRowLookupScript<>))]
    //[CaptureLog(typeof(ItemLogRow))]
    [LocalizationRow(typeof(ItemLangRow))]
    public sealed class ItemRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Item Id"), Identity, LookupInclude]
        public Int32? ItemID
        {
            get { return Fields.ItemID[this]; }
            set { Fields.ItemID[this] = value; }
        }

        [DisplayName("Item Code"), Size(15), NotNull, QuickSearch, LookupInclude]
        public String ItemCode
        {
            get { return Fields.ItemCode[this]; }
            set { Fields.ItemCode[this] = value; }
        }

        [DisplayName("Item Barcode"), Size(15), QuickSearch, LookupInclude]
        public String ItemBarcode
        {
            get { return Fields.ItemBarcode[this]; }
            set { Fields.ItemBarcode[this] = value; }
        }

        [DisplayName("Item Label"), Size(10)]
        public String ItemLabel
        {
            get { return Fields.ItemLabel[this]; }
            set { Fields.ItemLabel[this] = value; }
        }

        [DisplayName("Item Name"), Size(40), QuickSearch, LookupInclude]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Item Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "ItemImage/~", CopyToHistory = true)]

        public String ItemImage
        {
            get { return Fields.ItemImage[this]; }
            set { Fields.ItemImage[this] = value; }
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        [DisplayName("Supplier"), ForeignKey(typeof(SupplierRow)), LeftJoin("sup"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierID
        {
            get { return Fields.SupplierID[this]; }
            set { Fields.SupplierID[this] = value; }
        }

        //[DisplayName("Category Item ID"), Column("ItemCategoryID"), ForeignKey(typeof(ItemCategoryRow)), LeftJoin("cat"), LookupInclude]
        [DisplayName("Category Item ID"), ForeignKey(typeof(ItemCategoryRow)), LeftJoin("cat"), LookupInclude]
        [LookupEditor(typeof(ItemCategoryRow), InplaceAdd = true)]
        public Int32? ItemCategoryID
        {
            get { return Fields.ItemCategoryID[this]; }
            set { Fields.ItemCategoryID[this] = value; }
        }

        //[DisplayName("Measure Id"), Column("MeasureID"), ForeignKey(typeof(MeasureRow)), LeftJoin("meas"), LookupInclude]
        [DisplayName("Measure Id"), ForeignKey(typeof(MeasureRow)), LeftJoin("meas"), LookupInclude]
        [LookupEditor(typeof(MeasureRow), InplaceAdd = true)]
        public Int32? MeasureID
        {
            get { return Fields.MeasureID[this]; }
            set { Fields.MeasureID[this] = value; }
        }

        [DisplayName("Quantity Per Unit")]
        public Int32? QuantityPerUnit
        {
            get { return Fields.QuantityPerUnit[this]; }
            set { Fields.QuantityPerUnit[this] = value; }
        }

        [DisplayName("Unit Price"), Size(19), Scale(4)]
        public Decimal? UnitPrice
        {
            get { return Fields.UnitPrice[this]; }
            set { Fields.UnitPrice[this] = value; }
        }

        [DisplayName("Account Id"), Column("AccountID")]
        public Int32? AccountID
        {
            get { return Fields.AccountID[this]; }
            set { Fields.AccountID[this] = value; }
        }
        #region Supplier
        [Origin("sup"), DisplayName("Supplier"), LookupInclude]
        public String SupplierCompanyName
        {
            get { return Fields.SupplierCompanyName[this]; }
            set { Fields.SupplierCompanyName[this] = value; }
        }

        [Origin("sup")]
        public String SupplierContactName
        {
            get { return Fields.SupplierContactName[this]; }
            set { Fields.SupplierContactName[this] = value; }
        }

        [Origin("sup")]
        public String SupplierContactTitle
        {
            get { return Fields.SupplierContactTitle[this]; }
            set { Fields.SupplierContactTitle[this] = value; }
        }

        [Origin("sup")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [Origin("sup")]
        public String SupplierCity
        {
            get { return Fields.SupplierCity[this]; }
            set { Fields.SupplierCity[this] = value; }
        }

        [Origin("sup")]
        public String SupplierRegion
        {
            get { return Fields.SupplierRegion[this]; }
            set { Fields.SupplierRegion[this] = value; }
        }

        [Origin("sup")]
        public String SupplierPostalCode
        {
            get { return Fields.SupplierPostalCode[this]; }
            set { Fields.SupplierPostalCode[this] = value; }
        }

        [Origin("sup")]
        public String SupplierCountry
        {
            get { return Fields.SupplierCountry[this]; }
            set { Fields.SupplierCountry[this] = value; }
        }

        [Origin("sup")]
        public String SupplierPhone
        {
            get { return Fields.SupplierPhone[this]; }
            set { Fields.SupplierPhone[this] = value; }
        }

        [Origin("sup")]
        public String SupplierFax
        {
            get { return Fields.SupplierFax[this]; }
            set { Fields.SupplierFax[this] = value; }
        }

        [Origin("sup")]
        public String SupplierHomePage
        {
            get { return Fields.SupplierHomePage[this]; }
            set { Fields.SupplierHomePage[this] = value; }
        }

        //[DisplayName("Supplier Supplier Stat"), Expression("jSupplier.[SupplierSTAT]")]
        //[Origin("sup")]
        //public String SupplierSupplierStat
        //{
        //    get { return Fields.SupplierSupplierStat[this]; }
        //    set { Fields.SupplierSupplierStat[this] = value; }
        //}
        #endregion Supplier

        #region Category

        [Origin("cat"), DisplayName("Category Name")]
        public String ItemCategoryName
        {
            get { return Fields.ItemCategoryName[this]; }
            set { Fields.ItemCategoryName[this] = value; }
        }

        [Origin("cat"), DisplayName("Category Code")]
        public String ItemCategoryCode
        {
            get { return Fields.ItemCategoryCode[this]; }
            set { Fields.ItemCategoryCode[this] = value; }
        }

        [Origin("cat")]
        public String ItemCategoryDescription
        {
            get { return Fields.ItemCategoryDescription[this]; }
            set { Fields.ItemCategoryDescription[this] = value; }
        }

        [Origin("cat")]
        public String ItemCategoryImage
        {
            get { return Fields.ItemCategoryImage[this]; }
            set { Fields.ItemCategoryImage[this] = value; }
        }
        #endregion Category

        #region Measure
        [Origin("meas")]
        public String MeasureName
        {
            get { return Fields.MeasureName[this]; }
            set { Fields.MeasureName[this] = value; }
        }

        #endregion Measure

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantID
        {
            get { return Fields.TenantID[this]; }
            set { Fields.TenantID[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantID; }
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
            get { return Fields.ItemID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ItemRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ItemID;
            public StringField ItemCode;
            public StringField ItemBarcode;
            public StringField ItemLabel;
            public StringField ItemName;
            public StringField ItemImage;
            public BooleanField Discontinued;
            public Int32Field SupplierID;
            public Int32Field ItemCategoryID;
            public Int32Field MeasureID;
            public Int32Field QuantityPerUnit;
            public DecimalField UnitPrice;
            public Int32Field AccountID;

            public Int16Field IsActive;
            public Int32Field TenantID;

            public StringField SupplierCompanyName;
            public StringField SupplierContactName;
            public StringField SupplierContactTitle;
            public StringField SupplierAddress;
            public StringField SupplierCity;
            public StringField SupplierRegion;
            public StringField SupplierPostalCode;
            public StringField SupplierCountry;
            public StringField SupplierPhone;
            public StringField SupplierFax;
            public StringField SupplierHomePage;

            //public StringField SupplierSupplierStat;

            public StringField ItemCategoryCode;
            public StringField ItemCategoryName;
            public StringField ItemCategoryDescription;
            public StringField ItemCategoryImage;

            public StringField MeasureName;
        }
    }
}
