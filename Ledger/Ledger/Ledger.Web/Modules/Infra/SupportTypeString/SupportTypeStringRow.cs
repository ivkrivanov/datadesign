namespace Ledger.Infra.Entities
{
    using System;
    using System.ComponentModel;
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;

    [ConnectionKey("Default"), DisplayName("SupportTypeString"), InstanceName("SupportTypeString"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class SupportTypeStringRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Enum Locale Id"), Identity]
        public Int32? EnumLocaleId
        {
            get { return Fields.EnumLocaleId[this]; }
            set { Fields.EnumLocaleId[this] = value; }
        }

        [DisplayName("Enum Value"), PrimaryKey]
        public Int32? EnumValue
        {
            get { return Fields.EnumValue[this]; }
            set { Fields.EnumValue[this] = value; }
        }

        [DisplayName("Display Name"), Width(250), Size(256), QuickSearch]
        public String DisplayName
        {
            get { return Fields.DisplayName[this]; }
            set { Fields.DisplayName[this] = value; }
        }

        [DisplayName("Locale")]
        public Int32? Locale
        {
            get { return Fields.Locale[this]; }
            set { Fields.Locale[this] = value; }
        }

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

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

        public static readonly RowFields Fields = new RowFields().Init();

        public SupportTypeStringRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EnumLocaleId;
            public Int32Field EnumValue;
            public StringField DisplayName;
            public Int32Field Locale;

            public Int32Field TenantId;
            public Int16Field IsActive;

            public RowFields()
                : base("[ldg].[SupportTypeString]")
            {
                LocalTextPrefix = "Infra.SupportTypeString";
            }
        }
    }
}