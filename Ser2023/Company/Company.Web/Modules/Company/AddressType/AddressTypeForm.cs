using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.AddressType")]
[BasedOnRow(typeof(AddressTypeRow), CheckNames = true)]
public class AddressTypeForm
{
    public string Name { get; set; }
    public Guid Rowguid { get; set; }
}