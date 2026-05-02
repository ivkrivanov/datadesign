namespace Company.Company.Columns;

[ColumnsScript("Company.Country")]
[BasedOnRow(typeof(CountryRow), CheckNames = true)]
public class CountryColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CountryId { get; set; }
    [EditLink, HalfWidth]
    public string CountryCode { get; set; }
    [HalfWidth]  
    public string CountryName { get; set; }
}