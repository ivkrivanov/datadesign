
namespace Serene1.Default.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Default.Infra.AddressTypeString")]
    [BasedOnRow(typeof(Entities.AddressTypeStringRow), CheckNames = true)]
    public class AddressTypeStringForm
    {
        public Int32 EnumValue { get; set; }
        public String DisplayName { get; set; }
        public Int32 LanguageId { get; set; }
        //public Int32 TenantId { get; set; }
        //public Int16 IsActive { get; set; }
    }
}