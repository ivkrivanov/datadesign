using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.Currency")]
[BasedOnRow(typeof(CurrencyRow), CheckNames = true)]
public class CurrencyForm
{
    public string CurrencyCode { get; set; }
    public string Name { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}