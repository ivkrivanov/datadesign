
namespace Store.Store.Entities
{
    using global::Store.Administration.Entities;
    using global::Store.Store;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Wares]")]
    [DisplayName("ProductCosts"), InstanceName("ProductCost")]
    [ReadPermission(StorePermissionKeys.Wares.View)]
    [ModifyPermission(StorePermissionKeys.Wares.Modify)]
    [DeletePermission(StorePermissionKeys.Wares.Delete)]
    public sealed class ProductCostsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Wares Id"), Identity, LookupInclude]
        public Int32? WaresID
        {
            get { return Fields.WaresID[this]; }
            set { Fields.WaresID[this] = value; }
        }

        [DisplayName("Wares Code"), Size(15), NotNull, QuickSearch, LookupInclude]
        public String WaresCode
        {
            get { return Fields.WaresCode[this]; }
            set { Fields.WaresCode[this] = value; }
        }

        [DisplayName("Wares Name"), Size(60), QuickSearch, LookupInclude]
        public String WaresName
        {
            get { return Fields.WaresName[this]; }
            set { Fields.WaresName[this] = value; }
        }

        [DisplayName("Quantity"), Size(60)]
        public Decimal? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Price"),Size(60)]
        public Decimal? SinglePrice
        {
            get { return Fields.SinglePrice[this]; }
            set { Fields.SinglePrice[this] = value; }
        }

        [DisplayName("Value"), Size(60), Scale(4)]
        [Expression("(t0.[SinglePrice] * t0.[Quantity])")]
        [AlignRight, DisplayFormat("#,##0.0000"), MinSelectLevel(SelectLevel.List)]
        public Decimal? Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        #region Measure

        [DisplayName("Measure Id"), ForeignKey(typeof(MeasureRow)), LeftJoin("meas"), LookupInclude]
        [LookupEditor(typeof(MeasureRow), InplaceAdd = true)]
        public Int32? MeasureID
        {
            get { return Fields.MeasureID[this]; }
            set { Fields.MeasureID[this] = value; }
        }

        [Origin("meas")]
        public String MeasureName
        {
            get { return Fields.MeasureName[this]; }
            set { Fields.MeasureName[this] = value; }
        }

        #endregion Measure


        IIdField IIdRow.IdField
        {
            get { return Fields.WaresID; }
        }
        StringField INameRow.NameField
        {
            get { return Fields.WaresName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductCostsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WaresID;
            public StringField WaresCode;
            public StringField WaresName;
            public DecimalField Quantity;
            public DecimalField SinglePrice;
            public DecimalField Value;

            public Int32Field MeasureID;
            public StringField MeasureName;
        }
    }
}