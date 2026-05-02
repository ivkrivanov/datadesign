
namespace Store.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductLog]")]
    public sealed class ProductsLogRow : Row<ProductsLogRow.RowFields>, ICaptureLogRow
    {
        [Identity, IdProperty]
        public Int64? ProductLogId
        {
            get => Fields.ProductLogId[this]; 
            set => Fields.ProductLogId[this] = value; 
        }

        public CaptureOperationType? OperationType
        {
            get => Fields.OperationType[this]; 
            set => Fields.OperationType[this] = value; 
        }

        public Int32? ChangingUserId
        {
            get => Fields.ChangingUserId[this]; 
            set => Fields.ChangingUserId[this] = value; 
        }

        public DateTime? ValidFrom
        {
            get => Fields.ValidFrom[this]; 
            set => Fields.ValidFrom[this] = value; 
        }

        public DateTime? ValidUntil
        {
            get => Fields.ValidUntil[this]; 
            set => Fields.ValidUntil[this] = value; 
        }

        [NotNull]
        public Int32? ProductId
        {
            get => Fields.ProductId[this]; 
            set => Fields.ProductId[this] = value; 
        }

        [Size(40)]
        public String ProductName
        {
            get => Fields.ProductName[this]; 
            set => Fields.ProductName[this] = value; 
        }

        [Size(100)]
        public String ProductImage
        {
            get => Fields.ProductImage[this]; 
            set => Fields.ProductImage[this] = value; 
        }

        public Boolean? Discontinued
        {
            get => Fields.Discontinued[this]; 
            set => Fields.Discontinued[this] = value; 
        }

        public Int32? CategoryId
        {
            get => Fields.CategoryId[this]; 
            set => Fields.CategoryId[this] = value; 
        }

        public String QuantityPerUnit
        {
            get => Fields.QuantityPerUnit[this]; 
            set => Fields.QuantityPerUnit[this] = value; 
        }

        public Decimal? UnitPrice
        {
            get => Fields.UnitPrice[this]; 
            set => Fields.UnitPrice[this] = value;        }

        public Int16? UnitsInStock
        {
            get => Fields.UnitsInStock[this]; 
            set => Fields.UnitsInStock[this] = value; 
        }

        public Int16? UnitsOnOrder
        {
            get => Fields.UnitsOnOrder[this];
            set => Fields.UnitsOnOrder[this] = value; 
        }

        public Int16? ReorderLevel
        {
            get => Fields.ReorderLevel[this]; 
            set => Fields.ReorderLevel[this] = value;
        }

        EnumField<CaptureOperationType> ICaptureLogRow.OperationTypeField
        {
            get => Fields.OperationType;
        }

        Field ICaptureLogRow.ChangingUserIdField
        {
            get { return Fields.ChangingUserId; }
        }

        DateTimeField ICaptureLogRow.ValidFromField
        {
            get { return Fields.ValidFrom; }
        }

        DateTimeField ICaptureLogRow.ValidUntilField
        {
            get { return Fields.ValidUntil; }
        }

        public ProductsLogRow()
        {
        }

        public ProductsLogRow(RowFields Fields)
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field ProductLogId;
            public EnumField<CaptureOperationType> OperationType;
            public Int32Field ChangingUserId;
            public DateTimeField ValidFrom;
            public DateTimeField ValidUntil;

            public Int32Field ProductId;
            public StringField ProductName;
            public StringField ProductImage;
            public BooleanField Discontinued;
            public Int32Field CategoryId;
            public StringField QuantityPerUnit;
            public DecimalField UnitPrice;
            public Int16Field UnitsInStock;
            public Int16Field UnitsOnOrder;
            public Int16Field ReorderLevel;
        }
    }
}
