
namespace Ledger.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.SupportType")]
    [BasedOnRow(typeof(Entities.SupportTypeRow))]
    public class SupportTypeForm
    {
        public string EnumValue { get; set; }
        public String EnumName { get; set; }
    }
}