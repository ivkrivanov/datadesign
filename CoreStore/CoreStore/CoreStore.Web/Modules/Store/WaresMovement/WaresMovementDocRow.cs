
namespace CoreStore.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresMovement Doc]")]
    [DisplayName("Wares Movement Doc"), InstanceName("Wares Movement Doc")]
    [ReadPermission(PermissionKeys.Wares.View)]
    [ModifyPermission(PermissionKeys.Wares.Modify)]
    [DeletePermission(PermissionKeys.Wares.Delete)]
    public class WaresMovementDocRow : Row, IIdRow, INameRow
    {
        [DisplayName("Wares Move Id"), Column("WaresMoveID"), PrimaryKey]
        public Int32? WaresMoveId
        {
            get { return Fields.WaresMoveId[this]; }
            set { Fields.WaresMoveId[this] = value; }
        }

        [DisplayName("Document Type"), Column("DocumentTypeID"), ForeignKey("[dbo].[DocumentType]", "DocumentTypeID"), LeftJoin("jDocumentType"), TextualField("DocumentTypeDocumentName")]
        public Int32? DocumentTypeId
        {
            get { return Fields.DocumentTypeId[this]; }
            set { Fields.DocumentTypeId[this] = value; }
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
            get { return Fields.WaresMoveId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DocumentNumber; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public WaresMovementDocRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field WaresMoveId;
            public Int32Field DocumentTypeId;
            public StringField DocumentNumber;
            public DateTimeField DocumentDate;

            public StringField DocumentTypeDocumentName;
            //public Int32Field DocumentTypeIsActive;
            //public Int32Field DocumentTypeTenantId;
        }
    }
}
