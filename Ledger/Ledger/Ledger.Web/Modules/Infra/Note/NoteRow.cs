namespace Ledger.Infra.Entities
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using Ledger.Administration.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using Infra.Entities;

    [ConnectionKey("Default"), DisplayName("Notes"), InstanceName("Note"), TwoLevelCached]
    [ReadPermission(Infra.PermissionKeys.General)]
    [ModifyPermission(Infra.PermissionKeys.General)]
    public sealed class NoteRow : LoggingRow, IIdRow, INameRow, IMultiTenantRow, IInsertLogRow, IIsActiveRow
    {
        [DisplayName("Note Id"), Identity]
        public Int64? NoteID
        {
            get { return Fields.NoteID[this]; }
            set { Fields.NoteID[this] = value; }
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

        [DisplayName("Insert User"), NotMapped]
        public String InsertUserDisplayName
        {
            get { return Fields.InsertUserDisplayName[this]; }
            set { Fields.InsertUserDisplayName[this] = value; }
        }

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
            get { return Fields.NoteID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.EntityType; }
        }

        Int16Field IIsActiveRow.IsActiveField
        {
            get { return Fields.IsActive; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public NoteRow()
            : base(Fields)
        {
        }

        public class RowFields : LoggingRowFields
        {
            public Int64Field NoteID;
            public StringField EntityType;
            public Int64Field EntityId;
            public StringField Text;

            public StringField InsertUserDisplayName;

            public Int16Field IsActive;
            public readonly Int32Field TenantId;

            public RowFields()
                : base("[ldg].[Notes]")
            {
                LocalTextPrefix = "Infra.Note";
            }
        }
    }
}