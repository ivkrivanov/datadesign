using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.StateProvince")]
[BasedOnRow(typeof(StateProvinceRow), CheckNames = true)]
public class StateProvinceColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int StateProvinceId { get; set; }
    [EditLink]
    public string StateProvinceCode { get; set; }
    public string CountryCodeCountryName { get; set; }
    public string StateProvinceName { get; set; }
}