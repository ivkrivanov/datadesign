
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresLang]")]
    [DisplayName("Wares Lang"), InstanceName("WaresLang")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class WaresLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("ID"), Column("ID"), Identity]
        public Int32? ID
        {
            get { return Fields.ID[this]; }
            set { Fields.ID[this] = value; }
        }

        [DisplayName("Wares ID"), Column("WaresID"), NotNull]
        public Int32? WaresID
        {
            get { return Fields.WaresID[this]; }
            set { Fields.WaresID[this] = value; }
        }

        [DisplayName("Language ID"), Column("LanguageID"), NotNull]
        public Int32? LanguageID
        {
            get { return Fields.LanguageID[this]; }
            set { Fields.LanguageID[this] = value; }
        }

        [DisplayName("Wares Name"), Size(60), QuickSearch]
        public String WaresName
        {
            get { return Fields.WaresName[this]; }
            set { Fields.WaresName[this] = value; }
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
            get { return Fields.WaresName; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ID;
            public Int32Field WaresID;
            public Int32Field LanguageID;
            public StringField WaresName;
            public StringField Description;
        }
    }
}
