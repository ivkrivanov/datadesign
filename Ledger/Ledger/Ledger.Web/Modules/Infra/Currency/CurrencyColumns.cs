
namespace Ledger.Infra.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Infra.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow))]
    public class CurrencyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CurrencyId { get; set; }
        [EditLink]
        public String Code { get; set; }
        public String Description { get; set; }
        public Int16 IsActive { get; set; }
    }
}