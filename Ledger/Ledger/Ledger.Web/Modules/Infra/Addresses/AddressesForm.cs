
namespace Ledger.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.Addresses")]
    [BasedOnRow(typeof(Entities.AddressesRow))]
    public class AddressesForm
    {
        public String Address { get; set; }
        public String ZipCode { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String Country { get; set; }
    }
}