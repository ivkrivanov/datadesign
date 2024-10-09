using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[WaresOrderDoc]")]
[DisplayName("Wares Order Doc"), InstanceName("Wares Order Doc")]
[ReadPermission(PermissionKeys.Wares.View)]
[ModifyPermission(PermissionKeys.Wares.Modify)]
[DeletePermission(PermissionKeys.Wares.Delete)]
public sealed class WaresOrderDocRow : Row<WaresOrderDocRow.RowFields>, IIdRow, INameRow
{
    const string jDocumentType = nameof(jDocumentType);

    [DisplayName("Wares Move Id"), Column("WaresMoveId"), PrimaryKey, IdProperty]
    public Int32? WaresOrderId { get => Fields.WaresOrderId[this]; set => Fields.WaresOrderId[this] = value; }

    [DisplayName("Document Type"), ForeignKey(typeof(DocumentTypeRow), nameof(DocumentTypeRow.DocumentTypeId)), LeftJoin(jDocumentType)]
    public Int32? DocumentTypeId { get => Fields.DocumentTypeId[this];  set =>  Fields.DocumentTypeId[this] = value; }

    [DisplayName("Document Number"), Size(10), QuickSearch, NameProperty]
    public String DocumentNumber { get => Fields.DocumentNumber[this]; set => Fields.DocumentNumber[this] = value; }

    [DisplayName("Document Date")]
    public DateTime? DocumentDate { get => Fields.DocumentDate[this]; set => Fields.DocumentDate[this] = value; }

    [DisplayName("Document Type Document Name"), Expression("jDocumentType.[DocumentName]")]
    public String DocumentTypeDocumentName { get => Fields.DocumentTypeDocumentName[this]; set => Fields.DocumentTypeDocumentName[this] = value; }

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


    public class RowFields : RowFieldsBase
    {
        public Int32Field WaresOrderId;
        public Int32Field DocumentTypeId;
        public StringField DocumentNumber;
        public DateTimeField DocumentDate;

        public StringField DocumentTypeDocumentName;
        //public Int32Field DocumentTypeIsActive;
        //public Int32Field DocumentTypeTenantId;
    }
}

