namespace Company.Company.Columns;

[ColumnsScript("Company.CurrencyRate")]
[BasedOnRow(typeof(CurrencyRateRow), CheckNames = true)]
public class CurrencyRateColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CurrencyRateId { get; set; }
    public DateTime CurrencyRateDate { get; set; }
    [EditLink, Width(100)]
    public string FromCurrencyCode { get; set; }
    [EditLink, Width(100)]
    public string ToCurrencyCode { get; set; }
    [Scale(8), AlignRight, DisplayFormat("#,##0.00000")] 
    public decimal AverageRate { get; set; }
    [Scale(8), AlignRight, DisplayFormat("#,##0.00000")] 
    public decimal EndOfDayRate { get; set; }
}