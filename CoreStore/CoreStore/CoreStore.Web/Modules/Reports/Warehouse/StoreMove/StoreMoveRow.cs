namespace CoreStore.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[usp_StoreMove]")]
    [DisplayName("Store move")]
    [ReadPermission(PermissionKeys.Wares.View)]
    [ModifyPermission(PermissionKeys.Wares.Modify)]
    public sealed class StoreMoveRow : Row, INameRow
    {
        [DisplayName("Shop ID"), Column("ShopID"), PrimaryKey]
        public Int32? ShopId
        {
            get { return Fields.ShopId[this]; }
            set { Fields.ShopId[this] = value; }
        }

        //[DisplayName("Shop"), Expression("shops.ShopName")]
        [DisplayName("Shop"), ForeignKey(typeof(ShopsRow)), LeftJoin("ShopId"), LookupInclude]
        [LookupEditor(typeof(ShopsRow))]
        public String ShopName
        {
            get { return Fields.ShopName[this]; }
            set { Fields.ShopName[this] = value; }
        }

        [DisplayName("Wares ID"), Column("WaresID"), PrimaryKey]
        public Int32? WaresID
        {
            get { return Fields.WaresID[this]; }
            set { Fields.WaresID[this] = value; }
        }

        [DisplayName("Key"), QuickSearch]
        public String WaresCode
        {
            get { return Fields.WaresCode[this]; }
            set { Fields.WaresCode[this] = value; }
        }

        [DisplayName("Name"), QuickSearch]
        public String WaresName
        {
            get { return Fields.WaresName[this]; }
            set { Fields.WaresName[this] = value; }
        }

        [DisplayName("Date"), PrimaryKey]
        public DateTime? Date
        {
            get { return Fields.Date[this]; }
            set { Fields.Date[this] = value; }
        }

        [DisplayName("Init Q-ty"), Size(15), Scale(4)]
        [AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        public Decimal? InitialQuantity
        {
            get { return Fields.InitialQuantity[this]; }
            set { Fields.InitialQuantity[this] = value; }
        }

        [DisplayName("Init Price"), Size(15), Scale(4)]
        public Decimal? InitialSinglePrice
        {
            get { return Fields.InitialSinglePrice[this]; }
            set { Fields.InitialSinglePrice[this] = value; }
        }

        [DisplayName("Init Value"), Size(15), Scale(4)]
        public Decimal? InitialValue
        {
            get { return Fields.InitialValue[this]; }
            set { Fields.InitialValue[this] = value; }
        }

        [DisplayName("Income Q-ty"), Size(15), Scale(4)]
        public Decimal? IncomeQuantity
        {
            get { return Fields.IncomeQuantity[this]; }
            set { Fields.IncomeQuantity[this] = value; }
        }

        [DisplayName("Income Price"), Size(15), Scale(4)]
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

        [DisplayName("Exp. Q-ty"), Size(15), Scale(4)]
        public Decimal? ExpenceQuantity
        {
            get { return Fields.ExpenceQuantity[this]; }
            set { Fields.ExpenceQuantity[this] = value; }
        }

        [DisplayName("Exp. Price"), Size(15), Scale(4)]
        public Decimal? ExpenceSinglePrice
        {
            get { return Fields.ExpenceSinglePrice[this]; }
            set { Fields.ExpenceSinglePrice[this] = value; }
        }

        [DisplayName("Exp. Value"), Size(15), Scale(4)]
        public Decimal? ExpenceValue
        {
            get { return Fields.ExpenceValue[this]; }
            set { Fields.ExpenceValue[this] = value; }
        }

        [DisplayName("Rest Q-ty"), Size(15), Scale(4)]
        public Decimal? RestQuantity
        {
            get { return Fields.RestQuantity[this]; }
            set { Fields.RestQuantity[this] = value; }
        }

        [DisplayName("Rest Price"), Size(15), Scale(4)]
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
            get { return Fields.WaresCode; }
        }

        public static readonly RowFields Fields = new RowFields().Init();
        public StoreMoveRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShopId;

            public Int32Field WaresID;
            public StringField WaresCode;
            public StringField WaresName;
            public DateTimeField Date;

            public DecimalField InitialQuantity;
            public DecimalField InitialSinglePrice;
            public DecimalField InitialValue;

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
            //public Int32Field TenantID;

            public StringField ShopName;
        }
    }
}