namespace Company.Sales.Columns;

[ColumnsScript("Sales.CurrencyRate")]
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
}