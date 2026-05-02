namespace Company.Company.Columns;

[ColumnsScript("Company.Address")]
[BasedOnRow(typeof(AddressRow), CheckNames = true)]
public class AddressColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int AddressId { get; set; }
    [EditLink, Width(200)]
    public string AddressLine1 { get; set; }
    [Width(200)]
    public string AddressLine2 { get; set; }
    [Width(100)]
    public string City { get; set; }
    [Width(100)]
    //public string CountryId { get; set; }
    public string CountryName {  get; set; }
    [Width(100)]
    //public int ProvinceId { get; set; }
    public int ProvinceName { get; set; }
    [Width(100)]
    public string PostalCode { get; set; }
}