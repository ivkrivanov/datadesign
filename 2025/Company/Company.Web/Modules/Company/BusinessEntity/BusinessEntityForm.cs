namespace Company.Company.Forms;

[FormScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityForm
{
    public int BusinessEntityId { get; set; }
}