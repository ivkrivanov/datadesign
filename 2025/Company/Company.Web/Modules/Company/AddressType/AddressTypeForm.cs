using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.AddressType")]
[BasedOnRow(typeof(AddressTypeRow), CheckNames = true)]
public class AddressTypeForm
{
    public string AddressTypeName { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}