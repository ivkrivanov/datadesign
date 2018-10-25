
namespace Serene1.Default.Infra.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Infra.AddressType")]
    [BasedOnRow(typeof(Entities.AddressTypeRow), CheckNames = true)]
    public class AddressTypeForm
    {
        public String EnumName { get; set; }
    }
}