﻿
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

        [DisplayName("Item Image"), Size(2147483647)]
        public Stream ItemImage
        {
            get { return Fields.ItemImage[this]; }
            set { Fields.ItemImage[this] = value; }
        }

        [DisplayName("Supplier"), Column("SupplierID"), ForeignKey(typeof(SupplierRow)), LeftJoin("sup"), TextualField("SupplierCompanyName")]
        public Int32? SupplierID
        {
            get { return Fields.SupplierID[this]; }
            set { Fields.SupplierID[this] = value; }
        }

        [DisplayName("Category ID"), ForeignKey(typeof(CategoriesRow)), LeftJoin("cat"), LookupInclude]
        public Int32? CategoryID
        {
            get { return Fields.CategoryID[this]; }
            set { Fields.CategoryID[this] = value; }
        }

        [DisplayName("Measure Id"), NotNull]
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
 
        //[DisplayName("Supplier Company Name"), Expression("jSupplier.[CompanyName]")]
        [Origin("sup"), DisplayName("Supplier"), LookupInclude]
        public String SupplierCompanyName
        {
            get { return Fields.SupplierCompanyName[this]; }
            set { Fields.SupplierCompanyName[this] = value; }
        }

        //[DisplayName("Supplier Contact Name"), Expression("jSupplier.[ContactName]")]
        [Origin("sup")]
        public String SupplierContactName
        {
            get { return Fields.SupplierContactName[this]; }
            set { Fields.SupplierContactName[this] = value; }
        }

        //[DisplayName("Supplier Contact Title"), Expression("jSupplier.[ContactTitle]")]
        [Origin("sup")]
        public String SupplierContactTitle
        {
            get { return Fields.SupplierContactTitle[this]; }
            set { Fields.SupplierContactTitle[this] = value; }
        }

        //[DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        [Origin("sup")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        //[DisplayName("Supplier City"), Expression("jSupplier.[City]")]
        [Origin("sup")]
        public String SupplierCity
        {
            get { return Fields.SupplierCity[this]; }
            set { Fields.SupplierCity[this] = value; }
        }

        //[DisplayName("Supplier Region"), Expression("jSupplier.[Region]")]
        [Origin("sup")]
        public String SupplierRegion
        {
            get { return Fields.SupplierRegion[this]; }
            set { Fields.SupplierRegion[this] = value; }
        }

        //[DisplayName("Supplier Postal Code"), Expression("jSupplier.[PostalCode]")]
        [Origin("sup")]
        public String SupplierPostalCode
        {
            get { return Fields.SupplierPostalCode[this]; }
            set { Fields.SupplierPostalCode[this] = value; }
        }

        //[DisplayName("Supplier Country"), Expression("jSupplier.[Country]")]
        [Origin("sup")]
        public String SupplierCountry
        {
            get { return Fields.SupplierCountry[this]; }
            set { Fields.SupplierCountry[this] = value; }
        }

        //[DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        [Origin("sup")]
        public String SupplierPhone
        {
            get { return Fields.SupplierPhone[this]; }
            set { Fields.SupplierPhone[this] = value; }
        }

        //[DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        [Origin("sup")]
        public String SupplierFax
        {
            get { return Fields.SupplierFax[this]; }
            set { Fields.SupplierFax[this] = value; }
        }

        //[DisplayName("Supplier Home Page"), Expression("jSupplier.[HomePage]")]
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

        [Origin("cat"), DisplayName("Category")]
        public String CategoryName
        {
            get { return Fields.CategoryName[this]; }
            set { Fields.CategoryName[this] = value; }
        }

        [Origin("cat")]
        public String CategoryDescription
        {
            get { return Fields.CategoryDescription[this]; }
            set { Fields.CategoryDescription[this] = value; }
        }

        [Origin("cat")]
        public Stream CategoryPicture
        {
            get { return Fields.CategoryPicture[this]; }
            set { Fields.CategoryPicture[this] = value; }
        }

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
            public StreamField ItemImage;
            public Int32Field SupplierID;
            public Int32Field CategoryID;
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

            public StringField CategoryName;
            public StringField CategoryDescription;
            public StreamField CategoryPicture;
        }
    }
}
