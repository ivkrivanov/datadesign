using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.Currency")]
[BasedOnRow(typeof(CurrencyRow), CheckNames = true)]
public class CurrencyForm
{
    [OneThirdWidth]
    public string CurrencyCode { get; set; }
    [TwoThirdWidth]
    public string Name { get; set; }
}