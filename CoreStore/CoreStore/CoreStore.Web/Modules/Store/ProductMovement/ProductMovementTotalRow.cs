
namespace CoreStore.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductMovementTotal]")]
    [DisplayName("Product Movement Total"), InstanceName("Product Movement Total")]
    [ReadPermission(PermissionKeys.Product.View)]
    [ModifyPermission(PermissionKeys.Product.Modify)]
    [DeletePermission(PermissionKeys.Product.Delete)]
    public sealed class ProductMovementTotalRow : Row, IIdRow
    {
        [DisplayName("Product Move Id"), Column("ProductMoveID"), PrimaryKey]
        public Int32? ProductMoveId
        {
            get { return Fields.ProductMoveId[this]; }
            set { Fields.ProductMoveId[this] = value; }
        }

        [DisplayName("Total")]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Double? Total
        {
            get { return Fields.Total[this]; }
            set { Fields.Total[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductMoveId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductMovementTotalRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductMoveId;
            public DoubleField Total;
        }
    }
}
