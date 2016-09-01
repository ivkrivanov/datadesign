
namespace Ledger.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.Phone")]
    [BasedOnRow(typeof(Entities.PhoneRow))]
    public class PhoneForm
    {
        public String PhoneNumber { get; set; }
        //public Int16 IsActive { get; set; }
    }
}