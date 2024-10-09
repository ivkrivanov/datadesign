using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.Address")]
[BasedOnRow(typeof(AddressRow), CheckNames = true)]
public class AddressForm
{
    [Category("Address")]
    [Width(100)]
    public string AddressLine1 { get; set; }
    [Width(100)]
    public string AddressLine2 { get; set; }
    [Category("Country, Province, City")]
    [TwoThirdWidth]
    public string CountryCode {  get; set; }
    [OneThirdWidth]
    public int StateProvinceId { get; set; }
    [TwoThirdWidth]
    public string City { get; set; }
    [OneThirdWidth]
    public string PostalCode { get; set; }
    //public Guid Rowguid { get; set; }
}