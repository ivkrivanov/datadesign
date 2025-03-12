using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.ContactType")]
[BasedOnRow(typeof(ContactTypeRow), CheckNames = true)]
public class ContactTypeForm
{
    public string Name { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}