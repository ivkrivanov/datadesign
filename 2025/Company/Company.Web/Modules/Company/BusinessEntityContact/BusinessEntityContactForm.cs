namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityContact")]
[BasedOnRow(typeof(BusinessEntityContactRow), CheckNames = true)]
public class BusinessEntityContactForm
{
    public int PersonId { get; set; }
    public int ContactTypeId { get; set; }
}