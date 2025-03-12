using Serenity.ComponentModel;
using System.ComponentModel;

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
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}