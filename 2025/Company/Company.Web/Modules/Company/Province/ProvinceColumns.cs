namespace Company.Company.Columns;

[ColumnsScript("Company.Province")]
[BasedOnRow(typeof(ProvinceRow), CheckNames = true)]
public class ProvinceColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int ProvinceId { get; set; }
    [EditLink]
    public string ProvinceCode { get; set; }
    [Width(130)]
    [AsyncLookupEditor(typeof(CountryLookup)), QuickFilter]
    public int CountryId { get; set; }
    //public string CountryName { get; set; }
    public string ProvinceName { get; set; }
}