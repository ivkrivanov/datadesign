
namespace Ledger.Infra.Columns
{
    using System;
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [ColumnsScript("Infra.Email")]
    [BasedOnRow(typeof(Entities.EmailRow))]
    public class EmailColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmailId { get; set; }
        [EditLink]
        public String EmailAddress { get; set; }
    }
}