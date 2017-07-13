
namespace Store.Infra.Entities
{
    using Administration;
    using Administration.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), TableName("[infra].[SupportTypeString]"), DisplayName("Support Type String"), InstanceName("Support Type String"), TwoLevelCached]
    [ReadPermission(PermissionKeys.Tenants, InfraPermissionKeys.General)]
    [ModifyPermission(PermissionKeys.Tenants, InfraPermissionKeys.General)]
    [LookupScript("Infra.SupportTypeString")]
    public sealed class SupportTypeStringRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Enum Locale Id"), Identity]
        public Int32? EnumLocaleId
        {
            get { return Fields.EnumLocaleId[this]; }
            set { Fields.EnumLocaleId[this] = value; }
        }

        [DisplayName("Enum Value"), ForeignKey("[infra].[SupportType]", "EnumValue"), LeftJoin("jEnumValue"), TextualField("EnumValueEnumName"), LookupInclude]
        [LookupEditor(typeof(SupportTypeRow), InplaceAdd = true)]
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

        [DisplayName("Language Id"), ForeignKey("Languages", "Id"), LeftJoin("l"), LookupInclude]
        [LookupEditor(typeof(LanguageRow), InplaceAdd = true)]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [Expression("l.[LanguageName]")]
        public string LanguageName
        {
            get { return Fields.LanguageName[this]; }
            set { Fields.LanguageName[this] = value; }
        }

        [DisplayName("Enum Value Enum Name"), Expression("jEnumValue.[EnumName]")]
        public String EnumValueEnumName
        {
            get { return Fields.EnumValueEnumName[this]; }
            set { Fields.EnumValueEnumName[this] = value; }
        }

        //[DisplayName("Enum Value Insert User Id"), Expression("jEnumValue.[InsertUserId]")]
        //public Int32? EnumValueInsertUserId
        //{
        //    get { return Fields.EnumValueInsertUserId[this]; }
        //    set { Fields.EnumValueInsertUserId[this] = value; }
        //}

        //[DisplayName("Enum Value Insert Date"), Expression("jEnumValue.[InsertDate]")]
        //public DateTime? EnumValueInsertDate
        //{
        //    get { return Fields.EnumValueInsertDate[this]; }
        //    set { Fields.EnumValueInsertDate[this] = value; }
        //}

        //[DisplayName("Enum Value Update User Id"), Expression("jEnumValue.[UpdateUserId]")]
        //public Int32? EnumValueUpdateUserId
        //{
        //    get { return Fields.EnumValueUpdateUserId[this]; }
        //    set { Fields.EnumValueUpdateUserId[this] = value; }
        //}

        //[DisplayName("Enum Value Update Date"), Expression("jEnumValue.[UpdateDate]")]
        //public DateTime? EnumValueUpdateDate
        //{
        //    get { return Fields.EnumValueUpdateDate[this]; }
        //    set { Fields.EnumValueUpdateDate[this] = value; }
        //}

        //[DisplayName("Enum Value Tenant Id"), Expression("jEnumValue.[TenantId]")]
        //public Int32? EnumValueTenantId
        //{
        //    get { return Fields.EnumValueTenantId[this]; }
        //    set { Fields.EnumValueTenantId[this] = value; }
        //}

        //[DisplayName("Enum Value Is Active"), Expression("jEnumValue.[IsActive]")]
        //public Int16? EnumValueIsActive
        //{
        //    get { return Fields.EnumValueIsActive[this]; }
        //    set { Fields.EnumValueIsActive[this] = value; }
        //}

        #region Special fields
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

        #endregion Special Fields

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
            public StringField LanguageName;

            public Int32Field TenantId;
            public Int16Field IsActive;

            public StringField EnumValueEnumName;
            //public Int32Field EnumValueInsertUserId;
            //public DateTimeField EnumValueInsertDate;
            //public Int32Field EnumValueUpdateUserId;
            //public DateTimeField EnumValueUpdateDate;
            //public Int32Field EnumValueTenantId;
            //public Int16Field EnumValueIsActive;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Infra.SupportTypeString";
            }
        }
    }
}
