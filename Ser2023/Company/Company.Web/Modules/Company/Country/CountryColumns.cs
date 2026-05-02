using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.Country")]
[BasedOnRow(typeof(CountryRow), CheckNames = true)]
public class CountryColumns
{
    [EditLink, Width(80), DisplayName("Db.Shared.RecordId"), AlignRight]
    public string CountryCode { get; set; }
    [Width(200)]
    public string CountryName { get; set; }
}