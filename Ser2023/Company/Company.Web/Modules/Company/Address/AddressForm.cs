using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.Address")]
[BasedOnRow(typeof(AddressRow), CheckNames = true)]
public class AddressForm
{
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string City { get; set; }
    public int StateProvinceId { get; set; }
    public string PostalCode { get; set; }
    //public Guid Rowguid { get; set; }
}