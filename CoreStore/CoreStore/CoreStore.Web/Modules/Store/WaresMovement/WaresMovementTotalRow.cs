﻿
namespace CoreStore.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresMovementTotal]")]
    [DisplayName("Total"), InstanceName("Wares Movement Total")]
    [ReadPermission(PermissionKeys.Wares.View)]
    [ModifyPermission(PermissionKeys.Wares.Modify)]
    [DeletePermission(PermissionKeys.Wares.Delete)]
    public class WaresMovementTotalRow : Row, IIdRow
    {
        [DisplayName("Wares Move ID"), Column("WaresMoveID"), PrimaryKey]
        public Int32? WaresMoveId
        {
            get => Fields.WaresMoveId[this]; 
            set => Fields.WaresMoveId[this] = value; 
        }

        [DisplayName("Value"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Value
        {
            get => Fields.Value[this]; 
            set => Fields.Value[this] = value; 
        }

        [DisplayName("VAT"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? VAT
        {
            get => Fields.VAT[this]; 
            set => Fields.VAT[this] = value; 
        }

        [DisplayName("Total"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Total
        {
            get => Fields.Total[this]; 
            set => Fields.Total[this] = value; 
        }

        IIdField IIdRow.IdField
        {
            get => Fields.WaresMoveId; 
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresMovementTotalRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WaresMoveId;
            public DecimalField Value;
            public DecimalField VAT;
            public DecimalField Total;
        }
    }
}