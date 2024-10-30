using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityAddress")]
[BasedOnRow(typeof(BusinessEntityAddressRow), CheckNames = true)]
public class BusinessEntityAddressForm
{
    public int AddressId { get; set; }
    public int AddressTypeId { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}