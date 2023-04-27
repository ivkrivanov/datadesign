using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.Country")]
[BasedOnRow(typeof(CountryRow), CheckNames = true)]
public class CountryForm
{
    public string Name { get; set; }
}