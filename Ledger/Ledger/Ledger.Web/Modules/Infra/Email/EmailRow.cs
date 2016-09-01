namespace Ledger.Infra.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Emails"), InstanceName("Emails"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class EmailRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Email Id"), Identity]
        public Int32? EmailId
        {
            get { return Fields.EmailId[this]; }
            set { Fields.EmailId[this] = value; }
        }

        [DisplayName("Email Address"), Size(128), QuickSearch]
        public String EmailAddress
        {
            get { return Fields.EmailAddress[this]; }
            set { Fields.EmailAddress[this] = value; }
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
            get { return Fields.EmailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EmailAddress; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }
        public static readonly RowFields Fields = new RowFields().Init();

        public EmailRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field EmailId;
            public StringField EmailAddress;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public RowFields()
                : base("[ldg].[Emails]")
            {
                LocalTextPrefix = "Infra.Email";
            }
        }
    }
}