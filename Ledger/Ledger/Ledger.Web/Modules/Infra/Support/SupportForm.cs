
namespace Ledger.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.Support")]
    [BasedOnRow(typeof(Entities.SupportRow))]
    public class SupportForm
    {
        //public Guid Guid { get; set; }
        public Int32 SupportTypeId { get; set; }
        public String SupportCode { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
    }
}