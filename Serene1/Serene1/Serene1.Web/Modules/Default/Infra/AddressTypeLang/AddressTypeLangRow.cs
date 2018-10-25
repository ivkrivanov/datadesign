
namespace Serene1.Default.Infra.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default.Infra"), Module("Default"), TableName("[dbo].[AddressTypeLang]")]
    [DisplayName("Address Type Lang"), InstanceName("Address Type Lang")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AddressTypeLangRow : Row, IIdRow, INameRow, ILocalizationRow
    {

        [DisplayName("Id")] //, Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Enum Value"), Column("EnumValue"), NotNull]
        public Int32? EnumValue
        {
            get { return Fields.EnumValue[this]; }
            set { Fields.EnumValue[this] = value; }
        }

        [DisplayName("Language Id"), Column("LanguageId"), NotNull]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Enum Name"), Size(50), QuickSearch]
        public String EnumName
        {
            get { return Fields.EnumName[this]; }
            set { Fields.EnumName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EnumName; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AddressTypeLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {

            public Int32Field Id;

            public Int32Field EnumValue;

            public Int32Field LanguageId;

            public StringField EnumName;


		}
    }
}
