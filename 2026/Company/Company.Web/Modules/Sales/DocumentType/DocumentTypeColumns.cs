namespace Company.Sales.Columns;

[ColumnsScript("Sales.DocumentType")]
[BasedOnRow(typeof(DocumentTypeRow), CheckNames = true)]
public class DocumentTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int DocumentTypeId { get; set; }
    [EditLink]
    public string DocumentName { get; set; }
}