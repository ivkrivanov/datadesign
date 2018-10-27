
namespace Serene1.Default.Infra.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[ldg].[AddressTypeString]")]
    [DisplayName("Address Type String"), InstanceName("Address Type String")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AddressTypeStringRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {

        [DisplayName("Enum Locale Id"), Column("EnumLocaleID"), Identity]
        public Int32? EnumLocaleId
        {
            get { return Fields.EnumLocaleId[this]; }
            set { Fields.EnumLocaleId[this] = value; }
        }

        [DisplayName("Enum Value"), NotNull, ForeignKey("[ldg].[AddressType]", "EnumValue"), LeftJoin("jAddrType")]
        public Int32? EnumValue
        {
            get { return Fields.EnumValue[this]; }
            set { Fields.EnumValue[this] = value; }
        }

        [DisplayName("Display Name"), Size(256), QuickSearch]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Language"), NotNull, ForeignKey("Languages", "Id"), LeftJoin("jLang")]
        public Int32? Language
        {
            get { return Fields.Language[this]; }
            set { Fields.Language[this] = value; }
        }
        [DisplayName("Language"), Expression("jLang.[LanguageName]"), QuickSearch, LookupInclude]
        public String LanguageName
        {
            get { return Fields.LanguageName[this]; }
            set { Fields.LanguageName[this] = value; }
        }

        #region Active

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        #endregion Active

        #region Tenant

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        #endregion Tenant

        #region Fields

        IIdField IIdRow.IdField
        {
            get { return Fields.EnumLocaleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisplayName; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Fields

        public static readonly RowFields Fields = new RowFields().Init();

        public AddressTypeStringRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {

            public Int32Field EnumLocaleId;
            public Int32Field EnumValue;
            public StringField DisplayName;
            public Int32Field Language;

            public StringField LanguageName;


            public Int32Field TenantId;
            public Int16Field IsActive;


		}
    }
}
