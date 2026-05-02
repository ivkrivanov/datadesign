
namespace Store.Store.Entities
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
    public sealed class ProductMovementTotalRow : Row<ProductMovementTotalRow.RowFields>, IIdRow
    {
        [DisplayName("Product Move Id"), Column("ProductMoveID"), PrimaryKey, IdProperty]
        public Int32? ProductMoveId
        {
            get =>Fields.ProductMoveId[this]; 
            set =>Fields.ProductMoveId[this] = value; 
        }

        [DisplayName("Value"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Value
        {
            get =>Fields.Value[this]; 
            set =>Fields.Value[this] = value; 
        }

        [DisplayName("VAT"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? VAT
        {
            get =>Fields.VAT[this]; 
            set =>Fields.VAT[this] = value; 
        }

        [DisplayName("Total"), NotNull]
        [AlignRight, DisplayFormat("#,##0.0000")]
        public Decimal? Total
        {
            get =>Fields.Total[this]; 
            set =>Fields.Total[this] = value; 
        }

        public ProductMovementTotalRow() 
        {
        }

        public ProductMovementTotalRow(RowFields Fields) 
            :base(Fields)
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