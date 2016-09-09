
namespace Ledger.Infra.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Support"), InstanceName("Support"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class SupportRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Support Id"), Column("SupportID"), Identity]
        public Int32? SupportId
        {
            get { return Fields.SupportId[this]; }
            set { Fields.SupportId[this] = value; }
        }

        [DisplayName("Guid"), NotNull]
        public Guid? Guid
        {
            get { return Fields.Guid[this]; }
            set { Fields.Guid[this] = value; }
        }

        [DisplayName("Support Type"), Column("SupportTypeID"), NotNull]
        [ForeignKey("[ldg].[SupportTypeString]", "EnumLocaleID"), LeftJoin("jSupportType"), TextualField("SupportTypeDisplayName")]
        //[ForeignKey("[SupportTypeEnumView]", "EnumLocaleID"), LeftJoin("jSupportType"), TextualField("SupportTypeDisplayName")]
        [LookupEditor("Infra.SupportTypeString", InplaceAdd = true)]
        public Int32? SupportTypeId
        {
            get { return Fields.SupportTypeId[this]; }
            set { Fields.SupportTypeId[this] = value; }
        }

        [DisplayName("Code"), Size(6), QuickSearch]
        [Width(80), AlignCenter]
        public String SupportCode
        {
            get { return Fields.SupportCode[this]; }
            set { Fields.SupportCode[this] = value; }
        }

        [DisplayName("Name"), Size(128), NotNull, Width(200)]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        [DisplayName("Description"), Size(256), NotNull, Width(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Support Type Enum Value"), Expression("jSupportType.[EnumValue]")]
        public Int32? SupportTypeEnumValue
        {
            get { return Fields.SupportTypeEnumValue[this]; }
            set { Fields.SupportTypeEnumValue[this] = value; }
        }

        [DisplayName("Support Type Name"), Expression("jSupportType.[DisplayName]"), Width(200)]
        public String SupportTypeDisplayName
        {
            get { return Fields.SupportTypeDisplayName[this]; }
            set { Fields.SupportTypeDisplayName[this] = value; }
        }

        [DisplayName("Support Type Locale"), Expression("jSupportType.[Locale]")]
        public Int32? SupportTypeLocale
        {
            get { return Fields.SupportTypeLocale[this]; }
            set { Fields.SupportTypeLocale[this] = value; }
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

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        //[DisplayName("Support Type Tenant Id"), Expression("jSupportType.[TenantId]")]
        //public Int32? SupportTypeTenantId
        //{
        //    get { return Fields.SupportTypeTenantId[this]; }
        //    set { Fields.SupportTypeTenantId[this] = value; }
        //}

        //[DisplayName("Support Type Is Active"), Expression("jSupportType.[IsActive]")]
        //public Int16? SupportTypeIsActive
        //{
        //    get { return Fields.SupportTypeIsActive[this]; }
        //    set { Fields.SupportTypeIsActive[this] = value; }
        //}

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

        public class RowFields : LoggingRowFields
        {
            public Int32Field SupportId;
            public GuidField Guid;
            public Int32Field SupportTypeId;
            public StringField SupportCode;
            public StringField Name;
            public StringField Description;

            public readonly Int32Field TenantId;
            public readonly Int16Field IsActive;

            public Int32Field SupportTypeEnumValue;
            public StringField SupportTypeDisplayName;
            public Int32Field SupportTypeLocale;

            public RowFields()
                : base("[ldg].[Support]")
            {
                LocalTextPrefix = "Infra.Support";
            }
        }
    }
}