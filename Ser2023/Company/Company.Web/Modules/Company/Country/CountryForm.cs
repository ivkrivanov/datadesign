using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.Country")]
[BasedOnRow(typeof(CountryRow), CheckNames = true)]
public class CountryForm
{
    [OneThirdWidth]
    public string CountryCode { get; set; }
    [TwoThirdWidth]
    public string CountryName { get; set; }
}