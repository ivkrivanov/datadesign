
namespace Warehouse.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.Note")]
    [BasedOnRow(typeof(Entities.NoteRow), CheckNames = true)]
    public class NoteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 NoteId { get; set; }
        [EditLink]
        public String EntityType { get; set; }
        public Int64 EntityId { get; set; }
        public String Text { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}