
namespace Ledger.Infra.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Infra.Support")]
    [BasedOnRow(typeof(Entities.SupportRow))]
    public class SupportColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SupportId { get; set; }
        [Width(250)]
        public Guid Guid { get; set; }

        //public Int32 SupportTypeId { get; set; }
        public String SupportTypeDisplayName { get; set; }
        [EditLink, Width(80)]
        public String SupportCode { get; set; }
        [Width(200)]
        public String Name { get; set; }
        [Width(200)]
        public String Description { get; set; }
    }
}