
namespace Ledger.Infra.Columns
{
    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [ColumnsScript("Infra.SupportType")]
    [BasedOnRow(typeof(Entities.SupportTypeRow))]
    public class SupportTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumValue { get; set; }
        [EditLink, Width(250)]
        public String DisplayName { get; set; }
    }
}