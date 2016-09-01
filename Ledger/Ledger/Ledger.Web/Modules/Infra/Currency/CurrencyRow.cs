namespace Ledger.Infra.Entities
{
    using Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Default"), DisplayName("Currencies"), InstanceName("Currencies"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class CurrencyRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IIsActiveRow
    {
        [DisplayName("Currency Id"), Identity]
        public Int32? CurrencyId
        {
            get { return Fields.CurrencyId[this]; }
            set { Fields.CurrencyId[this] = value; }
        }

        [DisplayName("Code"), Size(4), NotNull, QuickSearch]
        public String Code
        {
            get { return Fields.Code[this]; }
            set { Fields.Code[this] = value; }
        }

        [DisplayName("Description"), Size(100)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
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
            get { return Fields.CurrencyId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Code; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CurrencyRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int32Field CurrencyId;
            public StringField Code;
            public StringField Description;

            public Int16Field IsActive;
            public Int32Field TenantId;

            public RowFields()
                : base("[ldg].[Currencies]")
            {
                LocalTextPrefix = "Infra.Currency";
            }
        }
    }
}