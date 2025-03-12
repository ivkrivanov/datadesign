namespace Company.Company.Forms;

[FormScript("Company.Country")]
[BasedOnRow(typeof(CountryRow), CheckNames = true)]
public class CountryForm
{
    public string CountryCode { get; set; }
    public string CountryName { get; set; }
}