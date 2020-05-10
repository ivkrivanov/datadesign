﻿
namespace CoreStore.Store.Entities
{
    using CoreStore.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Products]")]
    [DisplayName("Product"), InstanceName("Product")]
    [ReadPermission(PermissionKeys.Product.View)]
    [ModifyPermission(PermissionKeys.Product.Modify)]
    [DeletePermission(PermissionKeys.Product.Delete)]
    [LookupScript("Store.Product", LookupType = typeof(Scripts.MultiTenantRowLookupScript<>))]
    [CaptureLog(typeof(ProductsLogRow))]
    [LocalizationRow(typeof(ProductLangRow))]
    public sealed class ProductsRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Product Id"), Column("ProductID"), Identity]
        public Int32? ProductId
        {
            get { return Fields.ProductId[this]; }
            set { Fields.ProductId[this] = value; }
        }

        [DisplayName("Product Code"), Size(15), NotNull, QuickSearch]
        public String ProductCode
        {
            get { return Fields.ProductCode[this]; }
            set { Fields.ProductCode[this] = value; }
        }

        [DisplayName("Product Barcode"), Size(15)]
        public String ProductBarcode
        {
            get { return Fields.ProductBarcode[this]; }
            set { Fields.ProductBarcode[this] = value; }
        }

        [DisplayName("Product Label"), Size(20)]
        public String ProductLabel
        {
            get { return Fields.ProductLabel[this]; }
            set { Fields.ProductLabel[this] = value; }
        }

        [DisplayName("Product Name"), Size(60), NotNull]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Product Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "ProductImage/~", CopyToHistory = true)]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        //#region Supplier

        //[DisplayName("Supplier"), ForeignKey(typeof(SupplierRow)), LeftJoin("sup")]
        //[LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        //public Int32? SupplierID
        //{
        //    get { return Fields.SupplierID[this]; }
        //    set { Fields.SupplierID[this] = value; }
        //}

        //[Origin("sup"), DisplayName("STAT"), LookupInclude]
        //public String SupplierSupplierStat
        //{
        //    get { return Fields.SupplierSupplierStat[this]; }
        //    set { Fields.SupplierSupplierStat[this] = value; }
        //}

        //[Origin("sup"), DisplayName("Supplier"), LookupInclude]
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

        #region Counterparty

        [DisplayName("Counterparty ID"), NotNull, ForeignKey(typeof(CounterpartiesRow), "CounterpartyID"), LeftJoin("c")]
        [QuickSearch, CounterpartiesEditor, LookupInclude]
        public String CounterpartyId
        {
            get { return Fields.CounterpartyId[this]; }
            set { Fields.CounterpartyId[this] = value; }
        }

        [Origin("c")]
        public String CounterpartyContactName
        {
            get { return Fields.CounterpartyContactName[this]; }
            set { Fields.CounterpartyContactName[this] = value; }
        }

        [Origin("c"), DisplayName("Counterparty")]
        [LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String CounterpartyCompanyName
        {
            get { return Fields.CounterpartyCompanyName[this]; }
            set { Fields.CounterpartyCompanyName[this] = value; }
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

        #region Category

        [DisplayName("Category"), ForeignKey(typeof(CategoriesRow)), LeftJoin("cat"), LookupInclude]
        [LookupEditor(typeof(CategoriesRow), FilterField = "Type", FilterValue = 200, InplaceAdd = true)]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [Origin("cat"), DisplayName("Category")]
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
        //public Stream CategoryPicture
        //{
        //    get { return Fields.CategoryPicture[this]; }
        //    set { Fields.CategoryPicture[this] = value; }
        //}

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
        public String MeasureMeasureName
        {
            get { return Fields.MeasureMeasureName[this]; }
            set { Fields.MeasureMeasureName[this] = value; }
        }

        #endregion Measure

        [DisplayName("Quantity Per Unit"), Size(20)]
        public String QuantityPerUnit
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

        [DisplayName("Units In Stock")]
        public Int16? UnitsInStock
        {
            get { return Fields.UnitsInStock[this]; }
            set { Fields.UnitsInStock[this] = value; }
        }

        [DisplayName("Units On Order")]
        public Int16? UnitsOnOrder
        {
            get { return Fields.UnitsOnOrder[this]; }
            set { Fields.UnitsOnOrder[this] = value; }
        }

        [DisplayName("Reorder Level")]
        public Int16? ReorderLevel
        {
            get { return Fields.ReorderLevel[this]; }
            set { Fields.ReorderLevel[this] = value; }
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "ProductID"), NotMapped]
        public List<ProductDetailsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

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
            get { return Fields.ProductId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductsRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field ProductId;
            public StringField ProductCode;
            public StringField ProductBarcode;
            public StringField ProductLabel;
            public StringField ProductName;
            public StringField ProductImage;
            public StringField CounterpartyId;
            //public Int32Field SupplierId;
            public Int32Field CategoryId;
            public Int32Field MeasureId;
            public StringField QuantityPerUnit;
            public DecimalField UnitPrice;
            public Int16Field UnitsInStock;
            public Int16Field UnitsOnOrder;
            public Int16Field ReorderLevel;
            public BooleanField Discontinued;

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

            public StringField CounterpartyCompanyName;
            public StringField CounterpartyContactName;
            public StringField CounterpartyContactTitle;
            public StringField CounterpartyCity;
            public StringField CounterpartyRegion;
            public StringField CounterpartyCountry;
            public StringField CounterpartyPhone;

            public StringField CategoryCategoryName;
            public StringField CategoryDescription;
            //public StreamField CategoryPicture;



            public RowListField<ProductDetailsRow> DetailList;
            public StringField MeasureMeasureName;
        }
    }
}