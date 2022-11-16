
namespace Store.Store.Entities
{
    using Administration.Entities;
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
    [LookupScript("Store.Product", LookupType = typeof(MultiTenantRowLookupScript<>))]
    [CaptureLog(typeof(ProductsLogRow))]
    [LocalizationRow(typeof(ProductLangRow))]
    public sealed class ProductsRow : LoggingRow<ProductsRow.RowFields>, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        [DisplayName("Product Id"), Column("ProductID"), Identity, IdProperty]
        public Int32? ProductId
        {
            get => Fields.ProductId[this]; 
            set =>Fields.ProductId[this] = value; 
        }

        [DisplayName("Product Code"), Size(15), NotNull, QuickSearch]
        public String ProductCode
        {
            get => Fields.ProductCode[this]; 
            set =>Fields.ProductCode[this] = value; 
        }

        [DisplayName("Product Barcode"), Size(15)]
        public String ProductBarcode
        {
            get => Fields.ProductBarcode[this]; 
            set =>Fields.ProductBarcode[this] = value; 
        }

        [DisplayName("Product Label"), Size(20)]
        public String ProductLabel
        {
            get => Fields.ProductLabel[this]; 
            set =>Fields.ProductLabel[this] = value; 
        }

        [DisplayName("Product Name"), Size(60), NotNull, NameProperty]
        public String ProductName
        {
            get => Fields.ProductName[this]; 
            set =>Fields.ProductName[this] = value; 
        }

        [DisplayName("Product Image"), Size(100)]
        [ImageUploadEditor(FilenameFormat = "ProductImage/~", CopyToHistory = true)]
        public String ProductImage
        {
            get => Fields.ProductImage[this]; 
            set =>Fields.ProductImage[this] = value; 
        }

        [DisplayName("Discontinued"), NotNull]
        public Boolean? Discontinued
        {
            get => Fields.Discontinued[this]; 
            set =>Fields.Discontinued[this] = value; 
        }

        #region Counterparty

        [DisplayName("Counterparty ID"), NotNull, ForeignKey(typeof(CounterpartiesRow), "CounterpartyID"), LeftJoin("c")]
        [QuickSearch, CounterpartiesEditor, LookupInclude]
        public String CounterpartyId
        {
            get => Fields.CounterpartyId[this]; 
            set =>Fields.CounterpartyId[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyContactName
        {
            get => Fields.CounterpartyContactName[this]; 
            set =>Fields.CounterpartyContactName[this] = value; 
        }

        [Origin("c"), DisplayName("Counterparty")]
        [LookupInclude, MinSelectLevel(SelectLevel.List)]
        public String CounterpartyCompanyName
        {
            get => Fields.CounterpartyCompanyName[this]; 
            set =>Fields.CounterpartyCompanyName[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyContactTitle
        {
            get => Fields.CounterpartyContactTitle[this]; 
            set =>Fields.CounterpartyContactTitle[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyCity
        {
            get => Fields.CounterpartyCity[this]; 
            set =>Fields.CounterpartyCity[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyRegion
        {
            get => Fields.CounterpartyRegion[this]; 
            set =>Fields.CounterpartyRegion[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyCountry
        {
            get => Fields.CounterpartyCountry[this]; 
            set =>Fields.CounterpartyCountry[this] = value; 
        }

        [Origin("c")]
        public String CounterpartyPhone
        {
            get => Fields.CounterpartyPhone[this]; 
            set =>Fields.CounterpartyPhone[this] = value; 
        }

        #endregion Counterparty

        #region Category

        [DisplayName("Category"), ForeignKey(typeof(CategoriesRow)), LeftJoin("cat"), LookupInclude]
        [LookupEditor(typeof(CategoriesRow), FilterField = "Type", FilterValue = 200, InplaceAdd = true)]
        public Int32? CategoryId
        {
            get => Fields.CategoryId[this]; 
            set =>Fields.CategoryId[this] = value; 
        }

        [Origin("cat"), DisplayName("Category")]
        public String CategoryCategoryName
        {
            get => Fields.CategoryCategoryName[this]; 
            set =>Fields.CategoryCategoryName[this] = value; 
        }

        [Origin("cat")]
        public String CategoryDescription
        {
            get => Fields.CategoryDescription[this]; 
            set =>Fields.CategoryDescription[this] = value; 
        }

        //[Origin("cat")]
        //public Stream CategoryPicture
        //{
        //    get => Fields.CategoryPicture[this]; }
        //    set =>Fields.CategoryPicture[this] = value; }
        //}

        #endregion Category

        #region Measure

        [DisplayName("Measure Id"), ForeignKey(typeof(MeasuresRow)), LeftJoin("meas"), LookupInclude]
        [LookupEditor(typeof(MeasuresRow), InplaceAdd = true)]
        public Int32? MeasureId
        {
            get => Fields.MeasureId[this]; 
            set =>Fields.MeasureId[this] = value; 
        }

        [Origin("meas")]
        public String MeasureMeasureName
        {
            get => Fields.MeasureMeasureName[this]; 
            set =>Fields.MeasureMeasureName[this] = value; 
        }

        #endregion Measure

        [DisplayName("Quantity Per Unit"), Size(20)]
        public String QuantityPerUnit
        {
            get => Fields.QuantityPerUnit[this]; 
            set =>Fields.QuantityPerUnit[this] = value; 
        }

        [DisplayName("Unit Price"), Size(19), Scale(4)]
        public Decimal? UnitPrice
        {
            get => Fields.UnitPrice[this]; 
            set =>Fields.UnitPrice[this] = value; 
        }

        [DisplayName("Units In Stock")]
        public Int16? UnitsInStock
        {
            get => Fields.UnitsInStock[this]; 
            set =>Fields.UnitsInStock[this] = value; 
        }

        [DisplayName("Units On Order")]
        public Int16? UnitsOnOrder
        {
            get => Fields.UnitsOnOrder[this]; 
            set =>Fields.UnitsOnOrder[this] = value; 
        }

        [DisplayName("Reorder Level")]
        public Int16? ReorderLevel
        {
            get => Fields.ReorderLevel[this]; 
            set =>Fields.ReorderLevel[this] = value; 
        }
        [DisplayName("Details"), MasterDetailRelation(foreignKey: "ProductID"), NotMapped]
        public List<ProductDetailsRow> DetailList
        {
            get => Fields.DetailList[this]; 
            set =>Fields.DetailList[this] = value; 
        }

        #region Tenant & Activ

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get => Fields.TenantId[this]; 
            set =>Fields.TenantId[this] = value; 
        }

        public Int32Field TenantIdField
        {
            get => Fields.TenantId; 
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get => Fields.IsActive[this]; 
            set =>Fields.IsActive[this] = value; 
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get => Fields.IsActive; 
        }

        #endregion Tenant & Activ

        public ProductsRow()
        {
        }

        public ProductsRow(RowFields Fields)
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
