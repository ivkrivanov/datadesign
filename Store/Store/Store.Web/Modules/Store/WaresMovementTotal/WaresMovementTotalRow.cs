﻿namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[usp_WaresMovementTotal]")]
    [DisplayName("Total")]
    [ReadPermission(StorePermissionKeys.General)]
    [ModifyPermission(StorePermissionKeys.General)]
    public sealed class WaresMovementTotalRow : Row, IIdRow
    {
        [DisplayName("Wares Move"), PrimaryKey, ForeignKey(typeof(WaresMovementRow)), LeftJoin("wm"), Updatable(false)]
        public Int32? WaresMoveID
        {
            get { return Fields.WaresMoveID[this]; }
            set { Fields.WaresMoveID[this] = value; }
        }

        [DisplayName("Total"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }
        IIdField IIdRow.IdField
        {
            get { return Fields.WaresMoveID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresMovementTotalRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WaresMoveID;
            public DecimalField Total;
        }
    }
}