namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductMovementTotal]")]
    [DisplayName("Total"), InstanceName("Product Movement Total")]
    [ReadPermission(StorePermissionKeys.Product.View)]
    [ModifyPermission(StorePermissionKeys.Product.Modify)]
    [DeletePermission(StorePermissionKeys.Product.Delete)]
    public class ProductMovementTotalRow:Row, IIdRow
    {
        [DisplayName("Wares Move ID"), Column("WaresMoveID"), PrimaryKey]
        public Int32? ProductMoveID
        {
            get { return Fields.ProductMoveID[this]; }
            set { Fields.ProductMoveID[this] = value; }
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
            get { return Fields.ProductMoveID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductMovementTotalRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductMoveID;
            public DecimalField Total;
        }
    }
}