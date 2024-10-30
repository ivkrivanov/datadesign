using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.CurrencyRate")]
[BasedOnRow(typeof(CurrencyRateRow), CheckNames = true)]
public class CurrencyRateColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CurrencyRateId { get; set; }
    public DateTime CurrencyRateDate { get; set; }
    [EditLink]
    public string FromCurrencyCodeName { get; set; }
    public string ToCurrencyCodeName { get; set; }
    public decimal AverageRate { get; set; }
    public decimal EndOfDayRate { get; set; }
}