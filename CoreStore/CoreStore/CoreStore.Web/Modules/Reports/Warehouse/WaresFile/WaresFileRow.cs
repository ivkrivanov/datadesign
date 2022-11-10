namespace CoreStore.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[usp_WaresFile]")]
    [DisplayName("Wares File")]
    [ReadPermission(PermissionKeys.Wares.View)]
    [ModifyPermission(PermissionKeys.Wares.Modify)]
    [LookupScript]
    public sealed class WaresFileRow : Row, INameRow
    {
        [DisplayName("Shop ID"), Column("ShopID"), PrimaryKey]
        public Int32? ShopID
        {
            get =>Fields.ShopID[this]; 
            set => Fields.ShopID[this] = value; 
        }

        [DisplayName("Shop"), Expression("shop.ShopName")]
        [LookupEditor(typeof(ShopsRow))]
        public String ShopName
        {
            get =>Fields.ShopName[this]; 
            set => Fields.ShopName[this] = value; 
        }

        [DisplayName("Wares ID"), Column("WaresID"), PrimaryKey]
        public Int32? WaresID
        {
            get =>Fields.WaresID[this]; 
            set => Fields.WaresID[this] = value; 
        }

        [DisplayName("Key"), QuickSearch, LookupInclude]
        public String WaresCode
        {
            get =>Fields.WaresCode[this]; 
            set => Fields.WaresCode[this] = value; 
        }

        [DisplayName("Name"), QuickSearch, LookupInclude]
        public String WaresName
        {
            get =>Fields.WaresName[this]; 
            set => Fields.WaresName[this] = value; 
        }

        [DisplayName("Date"), PrimaryKey]
        public DateTime? Date
        {
            get =>Fields.Date[this]; 
            set => Fields.Date[this] = value; 
        }

        [DisplayName("Document"), QuickSearch]
        public String DocumentType
        {
            get =>Fields.DocumentType[this]; 
            set => Fields.DocumentType[this] = value; 
        }

        [DisplayName("Number"), QuickSearch, LookupInclude]
        public String DocumentNumber
        {
            get =>Fields.DocumentNumber[this]; 
            set => Fields.DocumentNumber[this] = value; 
        }

        [DisplayName("Date"), PrimaryKey]
        public DateTime? DocumentDate
        {
            get =>Fields.DocumentDate[this]; 
            set => Fields.DocumentDate[this] = value; 
        }

        //[DisplayName("Init Q-ty"), Size(15), Scale(4)]
        //[AlignRight, DisplayFormat("#,##0.00"), MinSelectLevel(SelectLevel.List)]
        //public Decimal? InitialQuantity
        //{
        //    get =>Fields.InitialQuantity[this]; }
        //    set => Fields.InitialQuantity[this] = value; }
        //}

        //[DisplayName("Init Price"), Size(15), Scale(4)]
        //public Decimal? InitialSinglePrice
        //{
        //    get =>Fields.InitialSinglePrice[this]; }
        //    set => Fields.InitialSinglePrice[this] = value; }
        //}

        //[DisplayName("Init Value"), Size(15), Scale(4)]
        //public Decimal? InitialValue
        //{
        //    get =>Fields.InitialValue[this]; }
        //    set => Fields.InitialValue[this] = value; }
        //}

        [DisplayName("Income Q-ty"), Size(15), Scale(4)]
        public Decimal? IncomeQuantity
        {
            get =>Fields.IncomeQuantity[this]; 
            set => Fields.IncomeQuantity[this] = value; 
        }

        [DisplayName("Income Price"), Size(15), Scale(4)]
        public Decimal? IncomeSinglePrice
        {
            get =>Fields.IncomeSinglePrice[this]; 
            set => Fields.IncomeSinglePrice[this] = value; 
        }

        [DisplayName("Income Value"), Size(15), Scale(4)]
        public Decimal? IncomeValue
        {
            get =>Fields.IncomeValue[this]; 
            set => Fields.IncomeValue[this] = value; 
        }

        [DisplayName("Exp. Q-ty"), Size(15), Scale(4)]
        public Decimal? ExpenceQuantity
        {
            get =>Fields.ExpenceQuantity[this]; 
            set => Fields.ExpenceQuantity[this] = value; 
        }

        [DisplayName("Exp. Price"), Size(15), Scale(4)]
        public Decimal? ExpenceSinglePrice
        {
            get =>Fields.ExpenceSinglePrice[this]; 
            set => Fields.ExpenceSinglePrice[this] = value; 
        }

        [DisplayName("Exp. Value"), Size(15), Scale(4)]
        public Decimal? ExpenceValue
        {
            get =>Fields.ExpenceValue[this]; 
            set => Fields.ExpenceValue[this] = value; 
        }

        [DisplayName("Rest Q-ty"), Size(15), Scale(4)]
        public Decimal? RestQuantity
        {
            get =>Fields.RestQuantity[this]; 
            set => Fields.RestQuantity[this] = value; 
        }

        [DisplayName("Rest Price"), Size(15), Scale(4)]
        public Decimal? RestSinglePrice
        {
            get =>Fields.RestSinglePrice[this]; 
            set => Fields.RestSinglePrice[this] = value; 
        }

        [DisplayName("Rest Value"), Size(15), Scale(4)]
        public Decimal? RestValue
        {
            get =>Fields.RestValue[this]; 
            set => Fields.RestValue[this] = value; 
        }

        [DisplayName("Re Cost"), Size(15), Scale(4)]
        public Decimal? ReCost
        {
            get =>Fields.ReCost[this]; 
            set => Fields.ReCost[this] = value; 
        }

        [DisplayName("Mistake")]
        public Boolean? Mistake
        {
            get =>Fields.Mistake[this]; 
            set => Fields.Mistake[this] = value; 
        }


        StringField INameRow.NameField
        {
            get =>Fields.WaresCode; 
        }

        public static readonly RowFields Fields = new RowFields().Init();
        public WaresFileRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ShopID;

            public Int32Field WaresID;
            public StringField WaresCode;
            public StringField WaresName;
            public DateTimeField Date;

            public StringField DocumentType;
            public StringField DocumentNumber;
            public DateTimeField DocumentDate;

            //public DecimalField InitialQuantity;
            //public DecimalField InitialSinglePrice;
            //public DecimalField InitialValue;

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