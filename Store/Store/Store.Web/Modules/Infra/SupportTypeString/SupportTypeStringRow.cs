
namespace Store.Infra.Entities
{
    using Administration;
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), TableName("[dbo].[SupportTypeString]"), DisplayName("Support Type String"), InstanceName("Support Type String"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Tenants)]
    [ModifyPermission(PermissionKeys.Tenants)]
    public sealed class SupportTypeStringRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow, ILocalizationRow
    {
        [DisplayName("Enum Id"), Column("EnumLocaleID"), Identity, LookupInclude]
        public Int32? EnumLocaleId
        {
            get { return Fields.EnumLocaleId[this]; }
            set { Fields.EnumLocaleId[this] = value; }
        }

        [DisplayName("Enum Value"), Size(40), NotNull, QuickSearch, LookupInclude]
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

        [DisplayName("Language Id"), ForeignKey("Language", "LanguageId"), InnerJoin("lng")]
        //[LookupEditor(typeof(SupportTypeRow), InplaceAdd = true)]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }











#region Special area
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
            get { return Fields.EnumValue; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DisplayName; }
        }
        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }
#endregion Special area
        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
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
            public Int32Field LanguageId;

            public Int32Field TenantId;
            public Int16Field IsActive;

            //public Int32Field SupportTypeEnumValue;
            //public StringField SupportTypeEnumName;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Infra.SupportTypeString";
            }
        }
    }
}
