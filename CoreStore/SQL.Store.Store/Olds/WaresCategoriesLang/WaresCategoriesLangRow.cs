
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresCategoriesLang]")]
    [DisplayName("Wares Categories Lang"), InstanceName("Wares Categories Lang")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class WaresCategoriesLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? ID
        {
            get { return Fields.ID[this]; }
            set { Fields.ID[this] = value; }
        }

        [DisplayName("Wares Category Id"), Column("WaresCategoryID"), NotNull]
        public Int32? WaresCategoryID
        {
            get { return Fields.WaresCategoryID[this]; }
            set { Fields.WaresCategoryID[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageID
        {
            get { return Fields.LanguageID[this]; }
            set { Fields.LanguageID[this] = value; }
        }

        [DisplayName("Wares Category Name"), Size(40), QuickSearch]
        public String WaresCategoryName
        {
            get { return Fields.WaresCategoryName[this]; }
            set { Fields.WaresCategoryName[this] = value; }
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
            get { return Fields.WaresCategoryName; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageID; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public WaresCategoriesLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public Int32Field WaresCategoryID;
            public Int32Field LanguageID;
            public StringField WaresCategoryName;
            public StringField Description;
        }
    }
}
