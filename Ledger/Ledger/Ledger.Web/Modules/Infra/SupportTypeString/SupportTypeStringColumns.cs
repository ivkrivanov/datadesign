
namespace Ledger.Infra.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Infra.SupportTypeString")]
    [BasedOnRow(typeof(Entities.SupportTypeStringRow))]
    public class SupportTypeStringColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumLocaleId { get; set; }
        public Int32 EnumValue { get; set; }
        [EditLink, Width(250)]
        public String DisplayName { get; set; }
        public Int32 Locale { get; set; }
    }
}