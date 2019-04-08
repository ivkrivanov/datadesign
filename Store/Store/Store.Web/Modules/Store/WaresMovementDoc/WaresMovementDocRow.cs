
namespace Store.Store.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresMovement Doc]")]
    [DisplayName("Wares Movement Doc"), InstanceName("Wares Movement Doc")]
    [ReadPermission(StorePermissionKeys.Wares.View)]
    [ModifyPermission(StorePermissionKeys.Wares.Modify)]
    public sealed class WaresMovementDocRow : Row, IIdRow, INameRow
    {
        [DisplayName("Wares Move Id"), Column("WaresMoveID"), PrimaryKey]
        public Int32? WaresMoveID
        {
            get { return Fields.WaresMoveID[this]; }
            set { Fields.WaresMoveID[this] = value; }
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

        //[DisplayName("Document Type Is Active"), Expression("jDocumentType.[IsActive]")]
        //public Int32? DocumentTypeIsActive
        //{
        //    get { return Fields.DocumentTypeIsActive[this]; }
        //    set { Fields.DocumentTypeIsActive[this] = value; }
        //}

        //[DisplayName("Document Type Tenant Id"), Expression("jDocumentType.[TenantId]")]
        //public Int32? DocumentTypeTenantId
        //{
        //    get { return Fields.DocumentTypeTenantId[this]; }
        //    set { Fields.DocumentTypeTenantId[this] = value; }
        //}

        IIdField IIdRow.IdField
        {
            get { return Fields.WaresMoveID; }
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
            public Int32Field WaresMoveID;
            public Int32Field DocumentTypeID;
            public StringField DocumentNumber;
            public DateTimeField DocumentDate;

            public StringField DocumentTypeDocumentName;
            //public Int32Field DocumentTypeIsActive;
            //public Int32Field DocumentTypeTenantId;
        }
    }
}
