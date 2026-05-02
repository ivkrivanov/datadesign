
namespace Address.Address.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Address.AddressType")]
    [BasedOnRow(typeof(AddressTypeRow), CheckNames = true)]
    public class AddressTypeForm
    {
        public string Name { get; set; }
        public Guid Rowguid { get; set; }
    }
}