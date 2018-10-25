
namespace Serene1.Default.Infra.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.AddressTypeLang")]
    [BasedOnRow(typeof(Entities.AddressTypeLangRow), CheckNames = true)]
    public class AddressTypeLangForm
    {
        public Int32 EnumValue { get; set; }
        public Int32 LanguageId { get; set; }
        public String EnumName { get; set; }
    }
}