using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.EmailAddress")]
[BasedOnRow(typeof(EmailAddressRow), CheckNames = true)]
public class EmailAddressForm
{
    public int BusinessEntityId { get; set; }
    public string EmailAddress { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}