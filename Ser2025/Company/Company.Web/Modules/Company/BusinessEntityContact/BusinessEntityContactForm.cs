using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityContact")]
[BasedOnRow(typeof(BusinessEntityContactRow), CheckNames = true)]
public class BusinessEntityContactForm
{
    public int BusinessEntityId {  get; set; }
    public int PersonId { get; set; }
    public int ContactTypeId { get; set; }
}