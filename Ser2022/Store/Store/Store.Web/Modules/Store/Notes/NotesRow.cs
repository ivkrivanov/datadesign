
namespace Store.Store.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Store"), Module("Store"), TableName("[dbo].[Notes]")]
    [DisplayName("Notes"), InstanceName("Notes")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    public sealed class NotesRow : Row<NotesRow.RowFields>, IIdRow, INameRow, IInsertLogRow
    {
        [DisplayName("Note Id"), Column("NoteID"), Identity, IdProperty]
        public Int64? NoteId
        {
            get => Fields.NoteId[this]; 
            set =>Fields.NoteId[this] = value; 
        }

        [DisplayName("Entity Type"), Size(100), NotNull, Updatable(false), NameProperty]
        public String EntityType
        {
            get => Fields.EntityType[this]; 
            set =>Fields.EntityType[this] = value; 
        }

        [DisplayName("Entity Id"), Column("EntityID"), Size(100), NotNull, Updatable(false)]
        public Int64? EntityId
        {
            get => Fields.EntityId[this]; 
            set =>Fields.EntityId[this] = value; 
        }

        [DisplayName("Text"), NotNull, QuickSearch]
        public String Text
        {
            get => Fields.Text[this]; 
            set =>Fields.Text[this] = value; 
        }

        [DisplayName("Insert User Id"), NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId
        {
            get => Fields.InsertUserId[this]; 
            set =>Fields.InsertUserId[this] = value; 
        }

        [DisplayName("Insert User"), NotMapped]
        public String InsertUserDisplayName
        {
            get => Fields.InsertUserDisplayName[this]; 
            set =>Fields.InsertUserDisplayName[this] = value; 
        }

        [DisplayName("Insert Date"), NotNull, Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get => Fields.InsertDate[this]; 
            set =>Fields.InsertDate[this] = value; 
        }

        Field IInsertLogRow.InsertUserIdField => Fields.InsertUserId;

        public DateTimeField InsertDateField
        {
            get => Fields.InsertDate; 
        }

        public NotesRow()
        {
        }

        public NotesRow(RowFields Fields)
            : base(Fields)
        {
        }

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
}