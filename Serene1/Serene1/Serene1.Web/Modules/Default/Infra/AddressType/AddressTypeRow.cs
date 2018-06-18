
namespace Serene1.Default.Infra.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[ldg].[AddressType]")]
    [DisplayName("Address Type"), InstanceName("Address Type")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AddressTypeRow : LoggingRow, IIdRow, INameRow
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



        IIdField IIdRow.IdField
        {
            get { return Fields.EnumValue; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EnumName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AddressTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EnumValue;
            public StringField EnumName;
            public Int32Field TenantId;
            public Int16Field IsActive;
		}
    }
}
