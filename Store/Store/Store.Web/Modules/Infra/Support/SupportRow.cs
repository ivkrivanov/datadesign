
namespace Store.Infra.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), TableName("[infra].[Support]"), DisplayName("Support"), InstanceName("Support"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SupportRow : Row, IIdRow, INameRow
    {
        [DisplayName("Support Id"), Identity]
        public Int32? SupportId
        {
            get { return Fields.SupportId[this]; }
            set { Fields.SupportId[this] = value; }
        }

        [DisplayName("Support Guid"), NotNull]
        public Guid? SupportGuid
        {
            get { return Fields.SupportGuid[this]; }
            set { Fields.SupportGuid[this] = value; }
        }

        [DisplayName("Support Type"), Column("SupportTypeID"), NotNull, ForeignKey("[infra].[SupportTypeString]", "EnumLocaleId"), LeftJoin("jSupportType"), TextualField("SupportTypeDisplayName")]
        public Int32? SupportTypeId
        {
            get { return Fields.SupportTypeId[this]; }
            set { Fields.SupportTypeId[this] = value; }
        }

        [DisplayName("Support Code"), Size(6), QuickSearch]
        public String SupportCode
        {
            get { return Fields.SupportCode[this]; }
            set { Fields.SupportCode[this] = value; }
        }

        [DisplayName("Support Name"), Size(128), NotNull]
        public String SupportName
        {
            get { return Fields.SupportName[this]; }
            set { Fields.SupportName[this] = value; }
        }

        [DisplayName("Support Description"), Size(256), NotNull]
        public String SupportDescription
        {
            get { return Fields.SupportDescription[this]; }
            set { Fields.SupportDescription[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull]
        public Int32? InsertUserId
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        [DisplayName("Update User Id")]
        public Int32? UpdateUserId
        {
            get { return Fields.UpdateUserId[this]; }
            set { Fields.UpdateUserId[this] = value; }
        }

        [DisplayName("Update Date")]
        public DateTime? UpdateDate
        {
            get { return Fields.UpdateDate[this]; }
            set { Fields.UpdateDate[this] = value; }
        }

        [DisplayName("Tenant Id"), NotNull]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        [DisplayName("Is Active"), NotNull]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        [DisplayName("Support Type Enum Value"), Expression("jSupportType.[EnumValue]")]
        public Int32? SupportTypeEnumValue
        {
            get { return Fields.SupportTypeEnumValue[this]; }
            set { Fields.SupportTypeEnumValue[this] = value; }
        }

        [DisplayName("Support Type Display Name"), Expression("jSupportType.[DisplayName]")]
        public String SupportTypeDisplayName
        {
            get { return Fields.SupportTypeDisplayName[this]; }
            set { Fields.SupportTypeDisplayName[this] = value; }
        }

        [DisplayName("Support Type Language Id"), Expression("jSupportType.[LanguageId]")]
        public Int32? SupportTypeLanguageId
        {
            get { return Fields.SupportTypeLanguageId[this]; }
            set { Fields.SupportTypeLanguageId[this] = value; }
        }

        [DisplayName("Support Type Insert User Id"), Expression("jSupportType.[InsertUserId]")]
        public Int32? SupportTypeInsertUserId
        {
            get { return Fields.SupportTypeInsertUserId[this]; }
            set { Fields.SupportTypeInsertUserId[this] = value; }
        }

        [DisplayName("Support Type Insert Date"), Expression("jSupportType.[InsertDate]")]
        public DateTime? SupportTypeInsertDate
        {
            get { return Fields.SupportTypeInsertDate[this]; }
            set { Fields.SupportTypeInsertDate[this] = value; }
        }

        [DisplayName("Support Type Update User Id"), Expression("jSupportType.[UpdateUserId]")]
        public Int32? SupportTypeUpdateUserId
        {
            get { return Fields.SupportTypeUpdateUserId[this]; }
            set { Fields.SupportTypeUpdateUserId[this] = value; }
        }

        [DisplayName("Support Type Update Date"), Expression("jSupportType.[UpdateDate]")]
        public DateTime? SupportTypeUpdateDate
        {
            get { return Fields.SupportTypeUpdateDate[this]; }
            set { Fields.SupportTypeUpdateDate[this] = value; }
        }

        [DisplayName("Support Type Tenant Id"), Expression("jSupportType.[TenantId]")]
        public Int32? SupportTypeTenantId
        {
            get { return Fields.SupportTypeTenantId[this]; }
            set { Fields.SupportTypeTenantId[this] = value; }
        }

        [DisplayName("Support Type Is Active"), Expression("jSupportType.[IsActive]")]
        public Int16? SupportTypeIsActive
        {
            get { return Fields.SupportTypeIsActive[this]; }
            set { Fields.SupportTypeIsActive[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SupportId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SupportCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SupportRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SupportId;
            public GuidField SupportGuid;
            public Int32Field SupportTypeId;
            public StringField SupportCode;
            public StringField SupportName;
            public StringField SupportDescription;
            public Int32Field InsertUserId;
            public DateTimeField InsertDate;
            public Int32Field UpdateUserId;
            public DateTimeField UpdateDate;
            public Int32Field TenantId;
            public Int16Field IsActive;

            public Int32Field SupportTypeEnumValue;
            public StringField SupportTypeDisplayName;
            public Int32Field SupportTypeLanguageId;
            public Int32Field SupportTypeInsertUserId;
            public DateTimeField SupportTypeInsertDate;
            public Int32Field SupportTypeUpdateUserId;
            public DateTimeField SupportTypeUpdateDate;
            public Int32Field SupportTypeTenantId;
            public Int16Field SupportTypeIsActive;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Infra.Support";
            }
        }
    }
}
