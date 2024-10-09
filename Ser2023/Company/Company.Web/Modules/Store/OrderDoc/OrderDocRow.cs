using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("OrderDoc")]
[DisplayName("Order Doc"), InstanceName("Order Doc")]
[ReadPermission(PermissionKeys.Order.View)]
[ModifyPermission(PermissionKeys.Order.Modify)]
[DeletePermission(PermissionKeys.Order.Delete)]
public sealed class OrderDocRow : Row<OrderDocRow.RowFields>, IIdRow, INameRow
{
    const string jDocumentType = nameof(jDocumentType);

    [DisplayName("Order Id"), Column("OrderID"), PrimaryKey, NotNull, IdProperty]
    public int? OrderId { get => fields.OrderId[this]; set => fields.OrderId[this] = value; }

    [DisplayName("Document Type"), Column("DocumentTypeID"), ForeignKey("DocumentType", "DocumentTypeID"), LeftJoin(jDocumentType), TextualField(nameof(DocumentTypeDocumentName))]
    public int? DocumentTypeId { get => fields.DocumentTypeId[this]; set => fields.DocumentTypeId[this] = value; }

    [DisplayName("Document Number"), Size(10), QuickSearch, NameProperty]
    public string DocumentNumber { get => fields.DocumentNumber[this]; set => fields.DocumentNumber[this] = value; }

    [DisplayName("Document Date")]
    public DateTime? DocumentDate { get => fields.DocumentDate[this]; set => fields.DocumentDate[this] = value; }

    [DisplayName("Document Type Document Name"), Expression($"{jDocumentType}.[DocumentName]")]
    public string DocumentTypeDocumentName { get => fields.DocumentTypeDocumentName[this]; set => fields.DocumentTypeDocumentName[this] = value;}

    public class RowFields : RowFieldsBase
    {
        public Int32Field OrderId;
        public Int32Field DocumentTypeId;
        public StringField DocumentNumber;
        public DateTimeField DocumentDate;

        public StringField DocumentTypeDocumentName;
    }
}