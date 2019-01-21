
namespace Ledger.HR.Entities
{
    using Serenity.Data;
    using Ledger.Administration.Entities;
    using Ledger.Infra.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Address Type"), InstanceName("EmplAddressType"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class EmplAddressTypeRow : LoggingRow, IIdRow, INameRow, IIsActiveRow, IMultiTenantRow
    {
        #region EmployeeAddressType

        [DisplayName("Address Type"), Identity(), DefaultValue(1)]      //; , Identity, ForeignKey("[ldg].[EmployeesAddresses]", "EmployeeAddressId"), LeftJoin("jEmplAddressType"), TextualField("EmplAddressTypeAddressType")]
        public Int32? EmplAddressTypeId
        {
            get { return Fields.EmplAddressTypeId[this]; }
            set { Fields.EmplAddressTypeId[this] = value; }
        }

        [DisplayName("Empl Address Type"), Size(50), NotNull, QuickSearch]
        public String EmplAddressType
        {
            get { return Fields.EmplAddressType[this]; }
            set { Fields.EmplAddressType[this] = value; }
        }

        #endregion EmployeeAddressType

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


        IIdField IIdRow.IdField
        {
            get { return Fields.EmplAddressTypeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmplAddressType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmplAddressTypeRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EmplAddressTypeId;
            public StringField EmplAddressType;

            public Int32Field TenantId;
            public Int16Field IsActive;

            public RowFields()
                : base("[ldg].[EmplAddressType]")
            {
                LocalTextPrefix = "HR.EmplAddressType";
            }
        }
    }
}
