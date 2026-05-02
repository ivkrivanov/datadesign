namespace Company.Sales;

[FormScript("Sales.DocumentType")]
[BasedOnRow(typeof(DocumentTypeRow), CheckNames = true)]
public class DocumentTypeForm
{
    public string DocumentName { get; set; }
}