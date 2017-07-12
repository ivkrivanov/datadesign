
namespace Store.Infra.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Infra.SupportType")]
    [BasedOnRow(typeof(Entities.SupportTypeRow))]
    public class SupportTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumValue { get; set; }
        [EditLink]
        public String EnumName { get; set; }
    }
}