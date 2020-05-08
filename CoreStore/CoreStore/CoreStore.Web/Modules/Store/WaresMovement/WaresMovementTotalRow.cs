
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
            get { return Fields.WaresMoveId[this]; }
            set { Fields.WaresMoveId[this] = value; }
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
            get { return Fields.WaresMoveId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresMovementTotalRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WaresMoveId;
            public DecimalField Total;
        }
    }
}
