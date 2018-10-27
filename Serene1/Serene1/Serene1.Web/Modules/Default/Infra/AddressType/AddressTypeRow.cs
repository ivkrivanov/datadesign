
namespace Serene1.Default.Infra.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), Module("Default"), TableName("[ldg].[AddressType]")]
    [DisplayName("Address Type"), InstanceName("AddressType")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript] //("Default.Infra.AddressType")] //, LookupType = typeof(MultiTenantRowLookupScript<>))]
    public sealed class AddressTypeRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {

        [DisplayName("Enum Value"), PrimaryKey, LookupInclude]
        //[DisplayName("Enum Value"), NotNull, ForeignKey("[ldg].[AddressTypeString]", "EnumValue"), LeftJoin("jAddrTypeString")]
        public Int32? EnumValue
        {
            get { return Fields.EnumValue[this]; }
            set { Fields.EnumValue[this] = value; }
        }

        [DisplayName("Enum Name"), Size(256), QuickSearch, LookupInclude]
        //[DisplayName("Type"), Expression("jAddrTypeString.[DisplayName]"), Size(256), QuickSearch, LookupInclude]
        public String EnumName
        {
            get { return Fields.EnumName[this]; }
            set { Fields.EnumName[this] = value; }
        }

        #region Active

        [NotNull, Insertable(false), Updatable(true)]
        public Int16? IsActive
        {
            get { return Fields.IsActive[this]; }
            set { Fields.IsActive[this] = value; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
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
            get { return Fields.EnumValue; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EnumName; }
        }


        #endregion Fields

        public static readonly RowFields Fields = new RowFields().Init();

        public AddressTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EnumValue;
            public StringField EnumName;

            public readonly Int32Field TenantId;
            public Int16Field IsActive;
		}
    }
}
