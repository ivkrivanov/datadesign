
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

    [ConnectionKey("Store"), TableName("[infra].[SupportType]"), DisplayName("Support Type"), InstanceName("Support Type"), TwoLevelCached]
    [ReadPermission((PermissionKeys.Tenants), (InfraPermissionKeys.PermissionKeys.General))]
    [ModifyPermission(PermissionKeys.Tenants, InfraPermissionKeys.PermissionKeys.General)]
    [LookupScript("Infra.SupportType")]
    public sealed class SupportTypeRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Enum Value"), PrimaryKey]
        public Int32? EnumValue
        {
            get { return Fields.EnumValue[this]; }
            set { Fields.EnumValue[this] = value; }
        }

        [DisplayName("Enum Name"), Size(256), QuickSearch]
        public String EnumName
        {
            get { return Fields.EnumName[this]; }
            set { Fields.EnumName[this] = value; }
        }

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
            get { return Fields.EnumValue; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EnumName; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        #endregion Special Fields

        public static readonly RowFields Fields = new RowFields().Init();

        public SupportTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EnumValue;
            public StringField EnumName;

            public Int32Field TenantId;
            public Int16Field IsActive;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Infra.SupportType";
            }
        }
    }
}
