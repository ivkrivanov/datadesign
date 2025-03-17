namespace Company.Company.Columns;

[ColumnsScript("Company.Currency")]
[BasedOnRow(typeof(CurrencyRow), CheckNames = true)]
public class CurrencyColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CurrencyId { get; set; }
    [EditLink]
    public string CurrencyCode { get; set; }
    public string Name { get; set; }
}