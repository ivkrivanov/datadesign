namespace Company.Company.Columns;

[ColumnsScript("Company.BusinessEntityContact")]
[BasedOnRow(typeof(BusinessEntityContactRow), CheckNames = true)]
public class BusinessEntityContactColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int BusinessEntityId { get; set; }
    public string PersonType { get; set; }
    public string ContactTypeName { get; set; }
}