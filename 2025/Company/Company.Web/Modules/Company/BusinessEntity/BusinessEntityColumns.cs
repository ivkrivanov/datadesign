namespace Company.Company.Columns;

[ColumnsScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int BusinessEntityId { get; set; }
}