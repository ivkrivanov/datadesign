using Serenity.ComponentModel;
using System;

namespace Company.Store.Forms;

[FormScript("Store.DocumentType")]
[BasedOnRow(typeof(DocumentTypeRow), CheckNames = true)]
public class DocumentTypeForm
{
    public String DocumentName { get; set; }
}
