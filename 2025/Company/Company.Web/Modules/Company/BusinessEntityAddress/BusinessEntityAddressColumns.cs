namespace Company.Company.Columns;

[ColumnsScript("Company.BusinessEntityAddress")]
[BasedOnRow(typeof(BusinessEntityAddressRow), CheckNames = true)]
public class BusinessEntityAddressColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int BusinessEntityId { get; set; }
    public string AddressLine1 { get; set; }
    public string AddressTypeName { get; set; }
}