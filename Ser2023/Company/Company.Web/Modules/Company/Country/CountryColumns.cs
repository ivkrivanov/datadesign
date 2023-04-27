using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.Country")]
[BasedOnRow(typeof(CountryRow), CheckNames = true)]
public class CountryColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public string CountryCode { get; set; }
    public string Name { get; set; }
}