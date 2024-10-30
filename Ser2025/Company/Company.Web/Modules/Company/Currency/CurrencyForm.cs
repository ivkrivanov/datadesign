using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.Currency")]
[BasedOnRow(typeof(CurrencyRow), CheckNames = true)]
public class CurrencyForm
{
    public string Name { get; set; }
}