using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.CurrencyRate")]
[BasedOnRow(typeof(CurrencyRateRow), CheckNames = true)]
public class CurrencyRateForm
{
    public DateTime CurrencyRateDate { get; set; }
    public string FromCurrencyCode { get; set; }
    public string ToCurrencyCode { get; set; }
    public decimal AverageRate { get; set; }
    public decimal EndOfDayRate { get; set; }
}