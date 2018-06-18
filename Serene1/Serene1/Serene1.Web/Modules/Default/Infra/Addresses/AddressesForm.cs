
namespace Serene1.Default.Infra.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Default.Infra.Addresses")]
    [BasedOnRow(typeof(Entities.AddressesRow), CheckNames = true)]
    public class AddressesForm
    {
        public String Address { get; set; }
        public String ZipCode { get; set; }
        public String City { get; set; }
        public String State { get; set; }
        public String Country { get; set; }
    }
}