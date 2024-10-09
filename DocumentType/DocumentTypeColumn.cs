using Serenity.ComponentModel;
using System;

namespace Company.Store.Columns;

[ColumnsScript("Store.DocumentType")]
[BasedOnRow(typeof(DocumentTypeRow), CheckNames = true)]
public class DocumentTypeColumns
{
    [Width(250), EditLink]
    public String DocumentName { get; set; }
}
