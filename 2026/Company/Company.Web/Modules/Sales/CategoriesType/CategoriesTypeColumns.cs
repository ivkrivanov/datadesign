namespace Company.Sales.Columns;

[ColumnsScript("Sales.CategoriesType")]
[BasedOnRow(typeof(CategoriesTypeRow), CheckNames = true)]
public class CategoriesTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int CategoryTypeId { get; set; }
    public short Type { get; set; }
    [EditLink]
    public string CategoryType { get; set; }
}