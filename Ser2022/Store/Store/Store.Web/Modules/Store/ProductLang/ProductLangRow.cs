
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductLang]")]
    [DisplayName("Product Lang"), InstanceName("Product Lang")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ProductLangRow : Row<ProductLangRow.RowFields>, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("Id"), Column("ID"), Identity,IdProperty]
        public Int32? Id
        {
            get =>Fields.Id[this]; 
            set => Fields.Id[this] = value; 
        }

        [DisplayName("Product Id"), Column("ProductID"), NotNull]
        public Int32? ProductId
        {
            get =>Fields.ProductId[this]; 
            set => Fields.ProductId[this] = value; 
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get =>Fields.LanguageId[this]; 
            set => Fields.LanguageId[this] = value; 
        }

        [DisplayName("Product Name"), Size(40), QuickSearch, NameProperty]
        public String ProductName
        {
            get =>Fields.ProductName[this]; 
            set => Fields.ProductName[this] = value; 
        }

        public Field CultureIdField
        {
            get =>Fields.LanguageId; 
        }

        public ProductLangRow()
            : base(Fields)
        {
        }

        public ProductLangRow(RowFields Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductId;
            public Int32Field LanguageId;
            public StringField ProductName;
        }
    }
}
