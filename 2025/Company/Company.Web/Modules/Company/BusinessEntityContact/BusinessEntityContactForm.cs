using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityContact")]
[BasedOnRow(typeof(BusinessEntityContactRow), CheckNames = true)]
public class BusinessEntityContactForm
{
    public int PersonId { get; set; }
    public int ContactTypeId { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}