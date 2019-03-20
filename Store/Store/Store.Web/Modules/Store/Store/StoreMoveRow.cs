namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Store]")]
    [DisplayName("Store move")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class StoreMoveRow : Row, INameRow
    {
        [DisplayName("Shop ID"), Column("ShopID"), PrimaryKey]
        public Int32? ShopID
        {
            get { return Fields.ShopID[this]; }
            set { Fields.ShopID[this] = value; }
        }

        [DisplayName("Wares ID"), Column("WaresID"), PrimaryKey]
        public Int32? WaresID
        {
            get { return Fields.WaresID[this]; }
            set { Fields.WaresID[this] = value; }
        }

        [DisplayName("Key"), Size(15), QuickSearch]
        public String Key
        {
            get { return Fields.Key[this]; }
            set { Fields.Key[this] = value; }
        }

        [DisplayName("Date"), PrimaryKey]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Income Quantity"), Size(15), Scale(4)]
        public Decimal? IncomeQuantity
        {
            get { return Fields.IncomeQuantity[this]; }
            set { Fields.IncomeQuantity[this] = value; }
        }

        [DisplayName("Income Single Price"), Size(15), Scale(4)]
        public Decimal? IncomeSinglePrice
        {
            get { return Fields.IncomeSinglePrice[this]; }
            set { Fields.IncomeSinglePrice[this] = value; }
        }

        [DisplayName("Income Value"), Size(15), Scale(4)]
        public Decimal? IncomeValue
        {
            get { return Fields.IncomeValue[this]; }
            set { Fields.IncomeValue[this] = value; }
        }

        [DisplayName("Expence Quantity"), Size(15), Scale(4)]
        public Decimal? ExpenceQuantity
        {
            get { return Fields.ExpenceQuantity[this]; }
            set { Fields.ExpenceQuantity[this] = value; }
        }

        [DisplayName("Expence Single Price"), Size(15), Scale(4)]
        public Decimal? ExpenceSinglePrice
        {
            get { return Fields.ExpenceSinglePrice[this]; }
            set { Fields.ExpenceSinglePrice[this] = value; }
        }

        [DisplayName("Expence Value"), Size(15), Scale(4)]
        public Decimal? ExpenceValue
        {
            get { return Fields.ExpenceValue[this]; }
            set { Fields.ExpenceValue[this] = value; }
        }

        [DisplayName("Rest Quantity"), Size(15), Scale(4)]
        public Decimal? RestQuantity
        {
            get { return Fields.RestQuantity[this]; }
            set { Fields.RestQuantity[this] = value; }
        }

        [DisplayName("Rest Single Price"), Size(15), Scale(4)]
        public Decimal? RestSinglePrice
        {
            get { return Fields.RestSinglePrice[this]; }
            set { Fields.RestSinglePrice[this] = value; }
        }

        [DisplayName("Rest Value"), Size(15), Scale(4)]
        public Decimal? RestValue
        {
            get { return Fields.RestValue[this]; }
            set { Fields.RestValue[this] = value; }
        }

        [DisplayName("Re Cost"), Size(15), Scale(4)]
        public Decimal? ReCost
        {
            get { return Fields.ReCost[this]; }
            set { Fields.ReCost[this] = value; }
        }

        [DisplayName("Mistake")]
        public Boolean? Mistake
        {
            get { return Fields.Mistake[this]; }
            set { Fields.Mistake[this] = value; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Key; }
        }

        public static readonly RowFields Fields = new RowFields().Init();
        public StoreMoveRow()
        : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShopID;
            public Int32Field WaresID;
            public StringField Key;
            public DateTimeField Date;

            public DecimalField IncomeQuantity;
            public DecimalField IncomeSinglePrice;
            public DecimalField IncomeValue;

            public DecimalField ExpenceQuantity;
            public DecimalField ExpenceSinglePrice;
            public DecimalField ExpenceValue;

            public DecimalField RestQuantity;
            public DecimalField RestSinglePrice;
            public DecimalField RestValue;

            public DecimalField ReCost;
            public BooleanField Mistake;
        }
    }
}