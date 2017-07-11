
namespace Store.Infra.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Infra.SupportType")]
    [BasedOnRow(typeof(Entities.SupportTypeRow))]
    public class SupportTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EnumValue { get; set; }
        [EditLink, Width(200)]
        public String EnumName { get; set; }
    }
}