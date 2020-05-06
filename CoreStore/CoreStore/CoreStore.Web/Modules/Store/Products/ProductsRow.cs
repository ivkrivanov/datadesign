
namespace CoreStore.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Products]")]
    [DisplayName("Products"), InstanceName("Products")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ProductsRow : CoreStore.Administration.LoggingRow, IIdRow, INameRow
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

        [DisplayName("Product Image"), Size(255)]
        public String ProductImage
        {
            get { return Fields.ProductImage[this]; }
            set { Fields.ProductImage[this] = value; }
        }

        [DisplayName("Supplier"), Column("SupplierID"), ForeignKey("[dbo].[Suppliers]", "SupplierID"), LeftJoin("jSupplier"), TextualField("SupplierSupplierStat")]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Counterparty"), Column("CounterpartyID"), Size(14), ForeignKey("[dbo].[Counterparties]", "CounterpartyID"), LeftJoin("jCounterparty"), TextualField("CounterpartyCompanyName")]
        public String CounterpartyId
        {
            get { return Fields.CounterpartyId[this]; }
            set { Fields.CounterpartyId[this] = value; }
        }

        [DisplayName("Category"), Column("CategoryID"), ForeignKey("[dbo].[Categories]", "CategoryID"), LeftJoin("jCategory"), TextualField("CategoryCategoryCode")]
        public Int32? CategoryId
        {
            get { return Fields.CategoryId[this]; }
            set { Fields.CategoryId[this] = value; }
        }

        [DisplayName("Measure"), Column("MeasureID"), NotNull, ForeignKey("[dbo].[Measures]", "MeasureID"), LeftJoin("jMeasure"), TextualField("MeasureMeasureName")]
        public Int32? MeasureId
        {
            get { return Fields.MeasureId[this]; }
            set { Fields.MeasureId[this] = value; }
        }

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

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get { return Fields.Discontinued[this]; }
            set { Fields.Discontinued[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int32? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Supplier Supplier Stat"), Expression("jSupplier.[SupplierSTAT]")]
        public String SupplierSupplierStat
        {
            get { return Fields.SupplierSupplierStat[this]; }
            set { Fields.SupplierSupplierStat[this] = value; }
        }

        [DisplayName("Supplier Company Name"), Expression("jSupplier.[CompanyName]")]
        public String SupplierCompanyName
        {
            get { return Fields.SupplierCompanyName[this]; }
            set { Fields.SupplierCompanyName[this] = value; }
        }

        [DisplayName("Supplier Contact Name"), Expression("jSupplier.[ContactName]")]
        public String SupplierContactName
        {
            get { return Fields.SupplierContactName[this]; }
            set { Fields.SupplierContactName[this] = value; }
        }

        [DisplayName("Supplier Contact Title"), Expression("jSupplier.[ContactTitle]")]
        public String SupplierContactTitle
        {
            get { return Fields.SupplierContactTitle[this]; }
            set { Fields.SupplierContactTitle[this] = value; }
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [DisplayName("Supplier City"), Expression("jSupplier.[City]")]
        public String SupplierCity
        {
            get { return Fields.SupplierCity[this]; }
            set { Fields.SupplierCity[this] = value; }
        }

        [DisplayName("Supplier Region"), Expression("jSupplier.[Region]")]
        public String SupplierRegion
        {
            get { return Fields.SupplierRegion[this]; }
            set { Fields.SupplierRegion[this] = value; }
        }

        [DisplayName("Supplier Postal Code"), Expression("jSupplier.[PostalCode]")]
        public String SupplierPostalCode
        {
            get { return Fields.SupplierPostalCode[this]; }
            set { Fields.SupplierPostalCode[this] = value; }
        }

        [DisplayName("Supplier Country"), Expression("jSupplier.[Country]")]
        public String SupplierCountry
        {
            get { return Fields.SupplierCountry[this]; }
            set { Fields.SupplierCountry[this] = value; }
        }

        [DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        public String SupplierPhone
        {
            get { return Fields.SupplierPhone[this]; }
            set { Fields.SupplierPhone[this] = value; }
        }

        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public String SupplierFax
        {
            get { return Fields.SupplierFax[this]; }
            set { Fields.SupplierFax[this] = value; }
        }

        [DisplayName("Supplier Email"), Expression("jSupplier.[Email]")]
        public String SupplierEmail
        {
            get { return Fields.SupplierEmail[this]; }
            set { Fields.SupplierEmail[this] = value; }
        }

        [DisplayName("Supplier Home Page"), Expression("jSupplier.[HomePage]")]
        public String SupplierHomePage
        {
            get { return Fields.SupplierHomePage[this]; }
            set { Fields.SupplierHomePage[this] = value; }
        }

        [DisplayName("Supplier Is Active"), Expression("jSupplier.[IsActive]")]
        public Int32? SupplierIsActive
        {
            get { return Fields.SupplierIsActive[this]; }
            set { Fields.SupplierIsActive[this] = value; }
        }

        [DisplayName("Supplier Tenant Id"), Expression("jSupplier.[TenantId]")]
        public Int32? SupplierTenantId
        {
            get { return Fields.SupplierTenantId[this]; }
            set { Fields.SupplierTenantId[this] = value; }
        }

        [DisplayName("Counterparty Id"), Expression("jCounterparty.[ID]")]
        public Int32? CounterpartyId1
        {
            get { return Fields.CounterpartyId1[this]; }
            set { Fields.CounterpartyId1[this] = value; }
        }

        [DisplayName("Counterparty Company Name"), Expression("jCounterparty.[CompanyName]")]
        public String CounterpartyCompanyName
        {
            get { return Fields.CounterpartyCompanyName[this]; }
            set { Fields.CounterpartyCompanyName[this] = value; }
        }

        [DisplayName("Counterparty Contact Name"), Expression("jCounterparty.[ContactName]")]
        public String CounterpartyContactName
        {
            get { return Fields.CounterpartyContactName[this]; }
            set { Fields.CounterpartyContactName[this] = value; }
        }

        [DisplayName("Counterparty Contact Title"), Expression("jCounterparty.[ContactTitle]")]
        public String CounterpartyContactTitle
        {
            get { return Fields.CounterpartyContactTitle[this]; }
            set { Fields.CounterpartyContactTitle[this] = value; }
        }

        [DisplayName("Counterparty Address"), Expression("jCounterparty.[Address]")]
        public String CounterpartyAddress
        {
            get { return Fields.CounterpartyAddress[this]; }
            set { Fields.CounterpartyAddress[this] = value; }
        }

        [DisplayName("Counterparty City"), Expression("jCounterparty.[City]")]
        public String CounterpartyCity
        {
            get { return Fields.CounterpartyCity[this]; }
            set { Fields.CounterpartyCity[this] = value; }
        }

        [DisplayName("Counterparty Region"), Expression("jCounterparty.[Region]")]
        public String CounterpartyRegion
        {
            get { return Fields.CounterpartyRegion[this]; }
            set { Fields.CounterpartyRegion[this] = value; }
        }

        [DisplayName("Counterparty Postal Code"), Expression("jCounterparty.[PostalCode]")]
        public String CounterpartyPostalCode
        {
            get { return Fields.CounterpartyPostalCode[this]; }
            set { Fields.CounterpartyPostalCode[this] = value; }
        }

        [DisplayName("Counterparty Country"), Expression("jCounterparty.[Country]")]
        public String CounterpartyCountry
        {
            get { return Fields.CounterpartyCountry[this]; }
            set { Fields.CounterpartyCountry[this] = value; }
        }

        [DisplayName("Counterparty Phone"), Expression("jCounterparty.[Phone]")]
        public String CounterpartyPhone
        {
            get { return Fields.CounterpartyPhone[this]; }
            set { Fields.CounterpartyPhone[this] = value; }
        }

        [DisplayName("Counterparty Is Active"), Expression("jCounterparty.[IsActive]")]
        public Int32? CounterpartyIsActive
        {
            get { return Fields.CounterpartyIsActive[this]; }
            set { Fields.CounterpartyIsActive[this] = value; }
        }

        [DisplayName("Counterparty Tenant Id"), Expression("jCounterparty.[TenantId]")]
        public Int32? CounterpartyTenantId
        {
            get { return Fields.CounterpartyTenantId[this]; }
            set { Fields.CounterpartyTenantId[this] = value; }
        }

        [DisplayName("Category Category Type Id"), Expression("jCategory.[CategoryTypeID]")]
        public Int32? CategoryCategoryTypeId
        {
            get { return Fields.CategoryCategoryTypeId[this]; }
            set { Fields.CategoryCategoryTypeId[this] = value; }
        }

        [DisplayName("Category Category Code"), Expression("jCategory.[CategoryCode]")]
        public String CategoryCategoryCode
        {
            get { return Fields.CategoryCategoryCode[this]; }
            set { Fields.CategoryCategoryCode[this] = value; }
        }

        [DisplayName("Category Category Name"), Expression("jCategory.[CategoryName]")]
        public String CategoryCategoryName
        {
            get { return Fields.CategoryCategoryName[this]; }
            set { Fields.CategoryCategoryName[this] = value; }
        }

        [DisplayName("Category Description"), Expression("jCategory.[Description]")]
        public String CategoryDescription
        {
            get { return Fields.CategoryDescription[this]; }
            set { Fields.CategoryDescription[this] = value; }
        }

        [DisplayName("Category Picture"), Expression("jCategory.[Picture]")]
        public Stream CategoryPicture
        {
            get { return Fields.CategoryPicture[this]; }
            set { Fields.CategoryPicture[this] = value; }
        }

        [DisplayName("Category Is Active"), Expression("jCategory.[IsActive]")]
        public Int32? CategoryIsActive
        {
            get { return Fields.CategoryIsActive[this]; }
            set { Fields.CategoryIsActive[this] = value; }
        }

        [DisplayName("Category Tenant Id"), Expression("jCategory.[TenantId]")]
        public Int32? CategoryTenantId
        {
            get { return Fields.CategoryTenantId[this]; }
            set { Fields.CategoryTenantId[this] = value; }
        }

        [DisplayName("Measure Measure Name"), Expression("jMeasure.[MeasureName]")]
        public String MeasureMeasureName
        {
            get { return Fields.MeasureMeasureName[this]; }
            set { Fields.MeasureMeasureName[this] = value; }
        }

        [DisplayName("Measure Is Active"), Expression("jMeasure.[IsActive]")]
        public Int32? MeasureIsActive
        {
            get { return Fields.MeasureIsActive[this]; }
            set { Fields.MeasureIsActive[this] = value; }
        }

        [DisplayName("Measure Tenant Id"), Expression("jMeasure.[TenantId]")]
        public Int32? MeasureTenantId
        {
            get { return Fields.MeasureTenantId[this]; }
            set { Fields.MeasureTenantId[this] = value; }
        }

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

        public class RowFields : CoreStore.Administration.LoggingRowFields
        {
            public Int32Field ProductId;
            public StringField ProductCode;
            public StringField ProductBarcode;
            public StringField ProductLabel;
            public StringField ProductName;
            public StringField ProductImage;
            public Int32Field SupplierId;
            public StringField CounterpartyId;
            public Int32Field CategoryId;
            public Int32Field MeasureId;
            public StringField QuantityPerUnit;
            public DecimalField UnitPrice;
            public Int16Field UnitsInStock;
            public Int16Field UnitsOnOrder;
            public Int16Field ReorderLevel;
            public BooleanField Discontinued;
            public Int32Field IsActive;
            public Int32Field TenantId;

            public StringField SupplierSupplierStat;
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
            public StringField SupplierEmail;
            public StringField SupplierHomePage;
            public Int32Field SupplierIsActive;
            public Int32Field SupplierTenantId;

            public Int32Field CounterpartyId1;
            public StringField CounterpartyCompanyName;
            public StringField CounterpartyContactName;
            public StringField CounterpartyContactTitle;
            public StringField CounterpartyAddress;
            public StringField CounterpartyCity;
            public StringField CounterpartyRegion;
            public StringField CounterpartyPostalCode;
            public StringField CounterpartyCountry;
            public StringField CounterpartyPhone;
            public Int32Field CounterpartyIsActive;
            public Int32Field CounterpartyTenantId;

            public Int32Field CategoryCategoryTypeId;
            public StringField CategoryCategoryCode;
            public StringField CategoryCategoryName;
            public StringField CategoryDescription;
            public StreamField CategoryPicture;
            public Int32Field CategoryIsActive;
            public Int32Field CategoryTenantId;

            public StringField MeasureMeasureName;
            public Int32Field MeasureIsActive;
            public Int32Field MeasureTenantId;
        }
    }
}
