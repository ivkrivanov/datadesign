
namespace Ledger.Infra.Columns
{
    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [ColumnsScript("Infra.Phone")]
    [BasedOnRow(typeof(Entities.PhoneRow))]
    public class PhoneColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PhoneId { get; set; }
        [EditLink]
        public String PhoneNumber { get; set; }
    }
}