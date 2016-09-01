
namespace Ledger.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.Currency")]
    [BasedOnRow(typeof(Entities.CurrencyRow))]
    public class CurrencyForm
    {
        public String Code { get; set; }
        public String Description { get; set; }
        public Int16 IsActive { get; set; }
    }
}