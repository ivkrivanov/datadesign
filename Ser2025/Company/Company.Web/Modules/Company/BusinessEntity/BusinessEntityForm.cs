using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityForm
{
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}