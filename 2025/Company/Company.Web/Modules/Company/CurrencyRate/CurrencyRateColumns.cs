namespace Company.Company.Columns;

[ColumnsScript("Company.CurrencyRate")]
[BasedOnRow(typeof(CurrencyRateRow), CheckNames = true)]
public class CurrencyRateColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CurrencyRateId { get; set; }
    public DateTime CurrencyRateDate { get; set; }
    [EditLink, Width(100), AsyncLookupEditor(typeof(CurrencyLookup)), QuickFilter(CssClass = "hidden-xs")]
    public string FromCurrencyCode { get; set; }
    [EditLink, Width(100), AsyncLookupEditor(typeof(CurrencyLookup)), QuickFilter(CssClass = "hidden-xs")]
    public string ToCurrencyCode { get; set; }
    public decimal AverageRate { get; set; }
    public decimal EndOfDayRate { get; set; }
}