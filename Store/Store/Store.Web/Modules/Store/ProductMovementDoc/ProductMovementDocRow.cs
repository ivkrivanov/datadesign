
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[ProductMovement Doc]")]
    [DisplayName("Product Movement Doc"), InstanceName("Product Movement Doc")]
    [ReadPermission(StorePermissionKeys.Product.View)]
    [ModifyPermission(StorePermissionKeys.Product.Modify)]
    [DeletePermission(StorePermissionKeys.Product.Delete)]
    public sealed class ProductMovementDocRow : Row, IIdRow, INameRow
    {
        [DisplayName("Product Move Id"), Column("ProductMoveID"), PrimaryKey]
        public Int32? ProductMoveID
        {
            get { return Fields.ProductMoveID[this]; }
            set { Fields.ProductMoveID[this] = value; }
        }

        [DisplayName("Document Type"), Column("DocumentTypeID"), ForeignKey("[dbo].[DocumentType]", "DocumentTypeID"), LeftJoin("jDocumentType"), TextualField("DocumentTypeDocumentName")]
        public Int32? DocumentTypeID
        {
            get { return Fields.DocumentTypeID[this]; }
            set { Fields.DocumentTypeID[this] = value; }
        }

        [DisplayName("Document Number"), Size(10), QuickSearch]
        public String DocumentNumber
        {
            get { return Fields.DocumentNumber[this]; }
            set { Fields.DocumentNumber[this] = value; }
        }

        [DisplayName("Document Date")]
        public DateTime? DocumentDate
        {
            get { return Fields.DocumentDate[this]; }
            set { Fields.DocumentDate[this] = value; }
        }

        [DisplayName("Document Type Document Name"), Expression("jDocumentType.[DocumentName]")]
        public String DocumentTypeDocumentName
        {
            get { return Fields.DocumentTypeDocumentName[this]; }
            set { Fields.DocumentTypeDocumentName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProductMoveID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DocumentNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductMovementDocRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProductMoveID;
            public Int32Field DocumentTypeID;
            public StringField DocumentNumber;
            public DateTimeField DocumentDate;

            public StringField DocumentTypeDocumentName;
        }
    }
}
