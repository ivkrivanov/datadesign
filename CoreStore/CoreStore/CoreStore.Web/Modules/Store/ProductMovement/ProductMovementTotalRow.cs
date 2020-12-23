
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

        [DisplayName("Value"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Value
        {
            get { return Fields.Value[this]; }
            set { Fields.Value[this] = value; }
        }

        [DisplayName("VAT"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? VAT
        {
            get { return Fields.VAT[this]; }
            set { Fields.VAT[this] = value; }
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
            get { return Fields.ProductMoveId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductMovementTotalRow() : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductMoveId;
            public DecimalField Value;
            public DecimalField VAT;
            public DecimalField Total;
        }
    }
}