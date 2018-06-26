
namespace Serene1.Default.Infra.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Infra.AddressTypeString")]
    [BasedOnRow(typeof(Entities.AddressTypeStringRow), CheckNames = true)]
    public class AddressTypeStringForm
    {
        //[LookupEditor(typeof(Serene1.Default.Infra.Entities.AddressTypeRow))]
        //public Int32 EnumValue { get; set; }

        //public String DisplayName { get; set; }

        //[LookupEditor(typeof(Serene1.Administration.Entities.LanguageRow))]
        //public Int32 Language { get; set; }





        public Int32 EnumValue { get; set; }
        public String DisplayName { get; set; }
        public Int32 Language { get; set; }
    }
}