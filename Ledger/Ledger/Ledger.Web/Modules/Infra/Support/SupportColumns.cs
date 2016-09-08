
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
        public Guid Guid { get; set; }
        public Int32 SupportTypeId { get; set; }
        [EditLink]
        public String SupportCode { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}