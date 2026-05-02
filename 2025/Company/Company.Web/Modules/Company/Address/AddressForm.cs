namespace Company.Company.Forms;

[FormScript("Company.Address")]
[BasedOnRow(typeof(AddressRow), CheckNames = true)]
public class AddressForm
{
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string City { get; set; }
    [OneThirdWidth]
    public string CountryId { get; set; }
    [OneThirdWidth]
    public int ProvinceId { get; set; }
    [OneThirdWidth]
    public string PostalCode { get; set; }
}