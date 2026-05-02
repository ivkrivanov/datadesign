namespace Company.Company.Forms;

[FormScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityForm
{
    [Category("Person")]
    //public int BusinessEntityId { get; set; }
    [OneThirdWidth]
    public string PersonType { get; set; }
    [OneThirdWidth]
    public string Title { get; set; }
    [OneThirdWidth]
    public string Suffix { get; set; }
    [OneThirdWidth]
    public string FirstName { get; set; }
    [OneThirdWidth]
    public string MiddleName { get; set; }
    [OneThirdWidth]
    public string LastName { get; set; }

    [Category("Addresses")]
    public List<BusinessEntityRow> AddressList { get; set; }

    [HalfWidth]
    public bool IsActive { get; set; }

}