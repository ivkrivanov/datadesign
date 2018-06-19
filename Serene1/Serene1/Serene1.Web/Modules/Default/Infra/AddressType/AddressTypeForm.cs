
namespace Serene1.Default.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Serene1.Default.Infra.Entities;

    [FormScript("Default.Infra.AddressType")]
    [BasedOnRow(typeof(Entities.AddressTypeRow), CheckNames = true)]
    public class AddressTypeForm
    {
        public Int32 EnumValue { get; set; }
        public String EnumName { get; set; }
    }
}