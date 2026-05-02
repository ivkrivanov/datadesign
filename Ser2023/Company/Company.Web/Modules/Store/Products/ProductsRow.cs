using Company.Administration.Entities;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Products]")]
[DisplayName("Products"), InstanceName("Products")]
[ReadPermission(PermissionKeys.Product.View)]
[ModifyPermission(PermissionKeys.Product.Modify)]
[DeletePermission(PermissionKeys.Product.Delete)]
[LookupScript("Store.Product", LookupType = typeof(MultiTenantRowLookupScript<>))]
[CaptureLog(typeof(ProductsLogRow))]
[LocalizationRow(typeof(ProductLangRow))]

public sealed class ProductsRow : LoggingRow<ProductsRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
{
    const string jCategory = nameof(jCategory);
    const string jMeasure = nameof(jMeasure);


    [DisplayName("Product Id"), Column("ProductID"), Identity, LookupInclude, IdProperty]
    public int? ProductId { get => fields.ProductId[this]; set => fields.ProductId[this] = value; }

    [DisplayName("Product Code"), Size(15), NotNull, QuickSearch, LookupInclude]
    public string ProductCode { get => fields.ProductCode[this]; set => fields.ProductCode[this] = value; }

    [DisplayName("Product Barcode"), Size(15)]
    public string ProductBarcode { get => fields.ProductBarcode[this]; set => fields.ProductBarcode[this] = value; }

    [DisplayName("Product Label"), Size(20)]
    public string ProductLabel { get => fields.ProductLabel[this]; set => fields.ProductLabel[this] = value; }

    [DisplayName("Product Name"), Size(60), NotNull, LookupInclude, NameProperty]
    public string ProductName { get => fields.ProductName[this]; set => fields.ProductName[this] = value; }

    [DisplayName("Product Image"), Size(100)]
    [ImageUploadEditor(FilenameFormat = "ProductImage/~", CopyToHistory = true)]
    public string ProductImage { get => fields.ProductImage[this]; set => fields.ProductImage[this] = value; }

    [DisplayName("Discontinued"), NotNull, DefaultValue(false)]
    public Boolean? Discontinued { get => Fields.Discontinued[this]; set => Fields.Discontinued[this] = value; }

    //#region Counterparty

    //[DisplayName("Counterparty"), NotNull, ForeignKey(typeof(CounterpartiesRow), "CounterpartyID"), LeftJoin("jCounterparty")]
    ////[QuickSearch, CounterpartiesEditor, LookupInclude]
    //[QuickSearch, LookupInclude]
    //public string CounterpartyId
    //{
    //    get => fields.CounterpartyId[this];
    //    set => fields.CounterpartyId[this] = value;
    //}

    //[DisplayName("Counterparty Company Name"), Expression("jCounterparty.[CompanyName]")]
    //[LookupInclude, MinSelectLevel(SelectLevel.List)]
    //public string CounterpartyCompanyName
    //{
    //    get => fields.CounterpartyCompanyName[this];
    //    set => fields.CounterpartyCompanyName[this] = value;
    //}

    //[DisplayName("Counterparty Contact Name"), Expression("jCounterparty.[ContactName]")]
    //public string CounterpartyContactName
    //{
    //    get => fields.CounterpartyContactName[this];
    //    set => fields.CounterpartyContactName[this] = value;
    //}

    //[DisplayName("Counterparty Contact Title"), Expression("jCounterparty.[ContactTitle]")]
    //public string CounterpartyContactTitle
    //{
    //    get => fields.CounterpartyContactTitle[this];
    //    set => fields.CounterpartyContactTitle[this] = value;
    //}

    //[DisplayName("Counterparty Address"), Expression("jCounterparty.[Address]")]
    //public string CounterpartyAddress
    //{
    //    get => fields.CounterpartyAddress[this];
    //    set => fields.CounterpartyAddress[this] = value;
    //}

    //[DisplayName("Counterparty City"), Expression("jCounterparty.[City]")]
    //public string CounterpartyCity
    //{
    //    get => fields.CounterpartyCity[this];
    //    set => fields.CounterpartyCity[this] = value;
    //}

    //[DisplayName("Counterparty Region"), Expression("jCounterparty.[Region]")]
    //public string CounterpartyRegion
    //{
    //    get => fields.CounterpartyRegion[this];
    //    set => fields.CounterpartyRegion[this] = value;
    //}

    //[DisplayName("Counterparty Postal Code"), Expression("jCounterparty.[PostalCode]")]
    //public string CounterpartyPostalCode
    //{
    //    get => fields.CounterpartyPostalCode[this];
    //    set => fields.CounterpartyPostalCode[this] = value;
    //}

    //[DisplayName("Counterparty Country"), Expression("jCounterparty.[Country]")]
    //public string CounterpartyCountry
    //{
    //    get => fields.CounterpartyCountry[this];
    //    set => fields.CounterpartyCountry[this] = value;
    //}

    //[DisplayName("Counterparty Phone"), Expression("jCounterparty.[Phone]")]
    //public string CounterpartyPhone
    //{
    //    get => fields.CounterpartyPhone[this];
    //    set => fields.CounterpartyPhone[this] = value;
    //}

    //#endregion Counterparty

    #region Category

    [DisplayName("Category"), Column("CategoryID"), ForeignKey(typeof(CategoriesRow), "CategoryID"), LeftJoin(jCategory), TextualField("CategoryCode")]
    [LookupEditor(typeof(CategoriesRow), FilterField = "Type", FilterValue = 200, InplaceAdd = true)]
    public int? CategoryId { get => fields.CategoryId[this]; set => fields.CategoryId[this] = value; }

    [DisplayName("Category Category Name"), Origin(jCategory, nameof(CategoriesRow.CategoryName))] //Expression("jCategory.[CategoryName]")]
    public string CategoryName { get => fields.CategoryName[this]; set => fields.CategoryName[this] = value; }

    [DisplayName("Category Description"), Origin(jCategory, nameof(CategoriesRow.Description))] // Expression("jCategory.[Description]")]
    public string Description { get => fields.Description[this]; set => fields.Description[this] = value;}

    #endregion Category

    #region Measure

    [DisplayName("Measure"), Column("MeasureID"), NotNull, ForeignKey(typeof(MeasuresRow), "MeasureID"), LeftJoin(jMeasure), TextualField("MeasureMeasureName")]
    [LookupEditor(typeof(MeasuresRow), FilterField = "Type", InplaceAdd = true)]
    public int? MeasureId { get => fields.MeasureId[this]; set => fields.MeasureId[this] = value; }
    [DisplayName("Measure Measure Name"), Origin(jMeasure, nameof(MeasuresRow.MeasureName))] // Expression("jMeasure.[MeasureName]")]
    public string MeasureName { get => fields.MeasureName[this]; set => fields.MeasureName[this] = value; }

    #endregion Measure

    [DisplayName("Quantity Per Unit"), Size(20)]
    public string QuantityPerUnit { get => fields.QuantityPerUnit[this]; set => fields.QuantityPerUnit[this] = value; }

    [DisplayName("Unit Price"), Size(19), Scale(4)]
    public decimal? UnitPrice { get => fields.UnitPrice[this]; set => fields.UnitPrice[this] = value; }

    [DisplayName("Sale Price"), Size(19), Scale(4)]
    public decimal? SalePrice { get => fields.SalePrice[this]; set => fields.SalePrice[this] = value; }

    [DisplayName("Units In Stock")]
    public short? UnitsInStock { get => fields.UnitsInStock[this]; set => fields.UnitsInStock[this] = value; }

    [DisplayName("Units On Order")]
    public short? UnitsOnOrder { get => fields.UnitsOnOrder[this]; set => fields.UnitsOnOrder[this] = value; }

    [DisplayName("Reorder Level")]
    public short? ReorderLevel { get => fields.ReorderLevel[this]; set => fields.ReorderLevel[this] = value; }

    [DisplayName("Details"), MasterDetailRelation(foreignKey: "ProductID"), NotMapped]
    public List<ProductDetailsRow> DetailList { get => fields.DetailList[this]; set => fields.DetailList[this] = value; }

    #region Tenant & Activ

    [Insertable(false), Updatable(false)]
    public Int32? TenantId { get => Fields.TenantId[this]; set => Fields.TenantId[this] = value; }

    public Int32Field TenantIdField { get => Fields.TenantId; }

    [NotNull, Insertable(false), Updatable(true)]
    public Int16? IsActive { get => Fields.IsActive[this]; set => Fields.IsActive[this] = value; }

    Int16Field IIsActiveRow.IsActiveField { get => Fields.IsActive; }

    #endregion Tenant & Activ

    //public ProductsRow()
    //    : base()
    //{
    //}

    //public ProductsRow(RowFields fields)
    //    : base(fields)
    //{
    //}

    public class RowFields : LoggingRowFields
    {
        public Int32Field ProductId;
        public StringField ProductCode;
        public StringField ProductBarcode;
        public StringField ProductLabel;
        public StringField ProductName;
        public StringField ProductImage;
        //public StringField CounterpartyId;
        public Int32Field CategoryId;
        public Int32Field MeasureId;
        public StringField MeasureName;
        public StringField QuantityPerUnit;
        public DecimalField UnitPrice;
        public DecimalField SalePrice;
        public Int16Field UnitsInStock;
        public Int16Field UnitsOnOrder;
        public Int16Field ReorderLevel;
        public BooleanField Discontinued;

        public Int16Field IsActive;
        public Int32Field TenantId;

        //public StringField CounterpartyCompanyName;
        //public StringField CounterpartyContactName;
        //public StringField CounterpartyContactTitle;
        //public StringField CounterpartyAddress;
        //public StringField CounterpartyCity;
        //public StringField CounterpartyRegion;
        //public StringField CounterpartyPostalCode;
        //public StringField CounterpartyCountry;
        //public StringField CounterpartyPhone;

        public StringField CategoryName;
        public StringField Description;

        public RowListField<ProductDetailsRow> DetailList;

    }
}