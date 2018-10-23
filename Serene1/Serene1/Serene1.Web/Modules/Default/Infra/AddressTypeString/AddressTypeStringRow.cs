
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
    public sealed class AddressTypeStringRow : LoggingRow, IIdRow, INameRow, IIsActiveRow
    {

        [DisplayName("Enum Locale Id"), Column("EnumLocaleID"), Identity]
        public Int32? EnumLocaleId
        {
            get { return Fields.EnumLocaleId[this]; }
            set { Fields.EnumLocaleId[this] = value; }
        }

        //[DisplayName("Enum Value")]
        [DisplayName("Enum Value"), ForeignKey("[ldg].[AddressType]", "EnumValue"), LeftJoin("jEnumValue"), TextualField("EnumValueEnumName")]
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

        [DisplayName("Language")]
        public Int32? Language
        {
            get { return Fields.Language[this]; }
            set { Fields.Language[this] = value; }
        }

        [DisplayName("Enum Value Enum Name"), Expression("jEnumValue.[EnumName]")]
        public String EnumValueEnumName
        {
            get { return Fields.EnumValueEnumName[this]; }
            set { Fields.EnumValueEnumName[this] = value; }
        }

        [DisplayName("Enum Value Tenant Id"), Expression("jEnumValue.[TenantId]")]
        public Int32? EnumValueTenantId
        {
            get { return Fields.EnumValueTenantId[this]; }
            set { Fields.EnumValueTenantId[this] = value; }
        }

        [DisplayName("Enum Value Is Active"), Expression("jEnumValue.[IsActive]")]
        public Int16? EnumValueIsActive
        {
            get { return Fields.EnumValueIsActive[this]; }
            set { Fields.EnumValueIsActive[this] = value; }
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

            public Int32Field TenantId;
            public Int16Field IsActive;

            public StringField EnumValueEnumName;

            public Int32Field EnumValueTenantId;
            public Int16Field EnumValueIsActive;
        }
    }
}
