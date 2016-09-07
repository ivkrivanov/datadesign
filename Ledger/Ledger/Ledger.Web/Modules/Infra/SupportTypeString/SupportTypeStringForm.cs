
namespace Ledger.Infra.Forms
{
    using System;
    using Serenity.ComponentModel;

    [FormScript("Infra.SupportTypeString")]
    [BasedOnRow(typeof(Entities.SupportTypeStringRow))]
    public class SupportTypeStringForm
    {
        public Int32 EnumValue { get; set; }
        public String DisplayName { get; set; }
        public Int32 Locale { get; set; }
    }
}