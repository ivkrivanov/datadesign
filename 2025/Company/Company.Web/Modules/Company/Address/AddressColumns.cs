namespace Company.Company.Columns;

[ColumnsScript("Company.Address")]
[BasedOnRow(typeof(AddressRow), CheckNames = true)]
public class AddressColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int AddressId { get; set; }
    [EditLink]
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string City { get; set; }
    public string CountryId { get; set; }
    public int ProvinceId { get; set; }
    public string PostalCode { get; set; }
}