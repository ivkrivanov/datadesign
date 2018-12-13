
namespace Warehouse.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.Note")]
    [BasedOnRow(typeof(Entities.NoteRow), CheckNames = true)]
    public class NoteForm
    {
        public String EntityType { get; set; }
        public Int64 EntityId { get; set; }
        public String Text { get; set; }
        public Int32 InsertUserId { get; set; }
        public DateTime InsertDate { get; set; }
    }
}