
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;

namespace Company.Store;

[ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Notes]")]
[DisplayName("Notes"), InstanceName("Notes")]
[ReadPermission(PermissionKeys.General)]
[ModifyPermission(PermissionKeys.General)]
public sealed class NotesRow : Row<NotesRow.RowFields>, IIdRow, INameRow, IInsertLogRow
{
    [DisplayName("Note Id"), Column("NoteID"), Identity, IdProperty]
    public long? NoteId { get => fields.NoteId[this]; set => fields.NoteId[this] = value; }

    [DisplayName("Entity Type"), Size(100), NotNull, QuickSearch, NameProperty]
    public string EntityType { get => fields.EntityType[this]; set => fields.EntityType[this] = value; }

    [DisplayName("Entity Id"), Column("EntityID"), Size(100), NotNull, Updatable(false)]
    public long? EntityId { get => fields.EntityId[this]; set => fields.EntityId[this] = value; }

    [DisplayName("Text"), NotNull, QuickSearch]
    public string Text { get => fields.Text[this]; set => fields.Text[this] = value; }

    [DisplayName("Insert User Id"), NotNull, Insertable(false), Updatable(false)]
    public int? InsertUserId { get => fields.InsertUserId[this]; set => fields.InsertUserId[this] = value; }

    [DisplayName("Insert User"), NotMapped]
    public String InsertUserDisplayName { get => Fields.InsertUserDisplayName[this]; set => Fields.InsertUserDisplayName[this] = value; }

    [DisplayName("Insert Date"), NotNull, Insertable(false), Updatable(false)]
    public DateTime? InsertDate { get => fields.InsertDate[this]; set => fields.InsertDate[this] = value; }

    Field IInsertLogRow.InsertUserIdField => Fields.InsertUserId;

    public DateTimeField InsertDateField { get => Fields.InsertDate; }

    //public NotesRow()
    //    : base()
    //{
    //}

    //public NotesRow(RowFields fields)
    //    : base(fields)
    //{
    //}

    public class RowFields : RowFieldsBase
    {
        public Int64Field NoteId;
        public StringField EntityType;
        public Int64Field EntityId;
        public StringField Text;
        public Int32Field InsertUserId;
        public DateTimeField InsertDate;
        public StringField InsertUserDisplayName;
    }
}
