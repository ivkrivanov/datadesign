using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.Address")]
[BasedOnRow(typeof(AddressRow), CheckNames = true)]
public class AddressForm
{
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string City { get; set; }
    public string CountryId { get; set; }
    public int ProvinceId { get; set; }
    public string PostalCode { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}