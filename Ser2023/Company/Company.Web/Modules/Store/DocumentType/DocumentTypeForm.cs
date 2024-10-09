using Serenity.ComponentModel;

namespace Company.Store.Forms;

[FormScript("Store.DocumentType")]
[BasedOnRow(typeof(DocumentTypeRow), CheckNames = true)]
public class DocumentTypeForm
{
    public string DocumentName { get; set; }
}