
namespace Warehouse.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ItemLang]")]
    [DisplayName("Item Lang"), InstanceName("Item Lang")]
    [ReadPermission("Store:General")]
    [ModifyPermission("Store:General")]
    public sealed class ItemLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Item Id"), Column("ItemID"), NotNull]
        public Int32? ItemId
        {
            get { return Fields.ItemId[this]; }
            set { Fields.ItemId[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Item Name"), Size(40), QuickSearch]
        public String ItemName
        {
            get { return Fields.ItemName[this]; }
            set { Fields.ItemName[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ItemName; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ItemLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ItemId;
            public Int32Field LanguageId;
            public StringField ItemName;
            public StringField Description;
        }
    }
}
