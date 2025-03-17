namespace Company.Company.Forms;

[FormScript("Company.CurrencyRate")]
[BasedOnRow(typeof(CurrencyRateRow), CheckNames = true)]
public class CurrencyRateForm
{
    [Category("General")]
    [OneThirdWidth]
    public DateTime CurrencyRateDate { get; set; }
    [OneThirdWidth]
    [LookupEditor(typeof(CurrencyRow))]
    public string FromCurrencyCode { get; set; }
    [OneThirdWidth]
    [LookupEditor(typeof(CurrencyRow))]
    public string ToCurrencyCode { get; set; }
    [HalfWidth]
    public decimal AverageRate { get; set; }
    [HalfWidth]
    public decimal EndOfDayRate { get; set; }
}