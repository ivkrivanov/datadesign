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
    public string FromCurrencyCode { get; set; }
    public string ToCurrencyCode { get; set; }
    public decimal AverageRate { get; set; }
    public decimal EndOfDayRate { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}