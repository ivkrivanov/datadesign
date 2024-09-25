using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.Currency")]
[BasedOnRow(typeof(CurrencyRow), CheckNames = true)]
public class CurrencyColumns
{
    [EditLink, Width(90), DisplayName("Db.Shared.RecordId"), AlignRight]
    public string CurrencyCode { get; set; }
    [Width(200)]
    public string Name { get; set; }
}