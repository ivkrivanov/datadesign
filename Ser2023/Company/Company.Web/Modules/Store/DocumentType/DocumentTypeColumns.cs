using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Store.Columns;

[ColumnsScript("Store.DocumentType")]
[BasedOnRow(typeof(DocumentTypeRow), CheckNames = true)]
public class DocumentTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int DocumentTypeId { get; set; }
    [EditLink]
    public string DocumentName { get; set; }

}