
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ItemCategoriesLang]")]
    [DisplayName("Item Category Lang"), InstanceName("Item Category Lang")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class ItemCategoryLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("ID"), Column("ID"), Identity]
        public Int32? ID
        {
            get { return Fields.ID[this]; }
            set { Fields.ID[this] = value; }
        }

        [DisplayName("Item Category Id"), Column("ItemCategoryID"), NotNull]
        public Int32? ItemCategoryId
        {
            get { return Fields.ItemCategoryID[this]; }
            set { Fields.ItemCategoryID[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageID
        {
            get { return Fields.LanguageID[this]; }
            set { Fields.LanguageID[this] = value; }
        }

        [DisplayName("Item Category Name"), Size(40), QuickSearch]
        public String ItemCategoryName
        {
            get { return Fields.ItemCategoryName[this]; }
            set { Fields.ItemCategoryName[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemCategoryName; }
        }
        public Field CultureIdField
        {
            get { return Fields.LanguageID; }
        }


        public static readonly RowFields Fields = new RowFields().Init();

        public ItemCategoryLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        { 
            public Int32Field ID;
            public Int32Field ItemCategoryID;
            public Int32Field LanguageID;
            public StringField ItemCategoryName;
            public StringField Description;
        }
    }
}
