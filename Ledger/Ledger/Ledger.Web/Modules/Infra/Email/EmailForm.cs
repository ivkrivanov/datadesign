
namespace Ledger.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.Email")]
    [BasedOnRow(typeof(Entities.EmailRow))]
    public class EmailForm
    {
        public String EmailAddress { get; set; }
        //public Int16 IsActive { get; set; }
    }
}