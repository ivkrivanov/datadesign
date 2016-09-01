namespace Ledger.Infra.Entities
{
    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;

    [ConnectionKey("Default"), DisplayName("Notes"), InstanceName("Note"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class NoteRow : Row, IIdRow, INameRow, IMultiTenantRow, IInsertLogRow //, IIsActiveRow
    {
        [DisplayName("Note Id"), Identity]
        public Int64? NoteId
        {
            get { return Fields.NoteId[this]; }
            set { Fields.NoteId[this] = value; }
        }

        [DisplayName("Entity Type"), Size(100), NotNull, QuickSearch, Updatable(false)]
        public String EntityType
        {
            get { return Fields.EntityType[this]; }
            set { Fields.EntityType[this] = value; }
        }

        [DisplayName("Entity Id"), Column("EntityID"), Size(100), NotNull, Updatable(false)]
        public Int64? EntityId
        {
            get { return Fields.EntityId[this]; }
            set { Fields.EntityId[this] = value; }
        }

        [DisplayName("Text"), NotNull]
        public String Text
        {
            get { return Fields.Text[this]; }
            set { Fields.Text[this] = value; }
        }

        [DisplayName("Insert User Id"), NotNull, Insertable(false), Updatable(false)]
        public Int32? InsertUserId 
        {
            get { return Fields.InsertUserId[this]; }
            set { Fields.InsertUserId[this] = value; }
        }

        [DisplayName("Insert User"), ClientSide]
        public String InsertUserDisplayName
        {
            get { return Fields.InsertUserDisplayName[this]; }
            set { Fields.InsertUserDisplayName[this] = value; }
        }

        [DisplayName("Insert Date"), NotNull, Insertable(false), Updatable(false)]
        public DateTime? InsertDate
        {
            get { return Fields.InsertDate[this]; }
            set { Fields.InsertDate[this] = value; }
        }

        //[NotNull, Insertable(false), Updatable(true)]
        //public Int16? IsActive
        //{
        //    get { return Fields.IsActive[this]; }
        //    set { Fields.IsActive[this] = value; }
        //}

        [Insertable(false), Updatable(false)]
        public Int32? TenantId
        {
            get { return Fields.TenantId[this]; }
            set { Fields.TenantId[this] = value; }
        }

        public Int32Field TenantIdField
        {
            get { return Fields.TenantId; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.NoteId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EntityType; }
        }

        //Int16Field IIsActiveRow.IsActiveField
        //{
        //    get { return Fields.IsActive; }
        //}

        public IIdField InsertUserIdField
        {
            get
            {
                return Fields.InsertUserId;
            }
        }

        public DateTimeField InsertDateField
        {
            get
            {
                return Fields.InsertDate;
            }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NoteRow()
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
            
            //public Int16Field IsActive;
            public Int32Field TenantId;

            public RowFields()
                : base("[ldg].[Notes]")
            {
                LocalTextPrefix = "Infra.Note";
            }
        }
    }
}