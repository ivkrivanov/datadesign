
namespace CoreStore.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[CategoriesLang]")]
    [DisplayName("Categories Lang"), InstanceName("Categories Lang")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class CategoriesLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get => Fields.Id[this]; 
            set => Fields.Id[this] = value; 
        }

        [DisplayName("Category Id"), Column("CategoryID"), NotNull]
        public Int32? CategoryId
        {
            get => Fields.CategoryId[this]; 
            set => Fields.CategoryId[this] = value; 
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get => Fields.LanguageId[this]; 
            set => Fields.LanguageId[this] = value; 
        }

        [DisplayName("Category Name"), Size(40), QuickSearch]
        public String CategoryName
        {
            get => Fields.CategoryName[this]; 
            set => Fields.CategoryName[this] = value; 
        }

        [DisplayName("Description")]
        public String Description
        {
            get => Fields.Description[this]; 
            set => Fields.Description[this] = value; 
        }

        IIdField IIdRow.IdField
        {
            get => Fields.Id; 
        }

        StringField INameRow.NameField
        {
            get => Fields.CategoryName; 
        }

        public Field CultureIdField
        {
            get => Fields.LanguageId; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CategoriesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field CategoryId;
            public Int32Field LanguageId;
            public StringField CategoryName;
            public StringField Description;
        }
    }
}
