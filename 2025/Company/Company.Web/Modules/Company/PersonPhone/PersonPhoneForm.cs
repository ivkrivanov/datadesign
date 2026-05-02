using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.PersonPhone")]
[BasedOnRow(typeof(PersonPhoneRow), CheckNames = true)]
public class PersonPhoneForm
{
    public string PhoneNumber { get; set; }
    public int PhoneNumberTypeId { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}