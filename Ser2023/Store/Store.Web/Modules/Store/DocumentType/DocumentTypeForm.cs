using Serenity.ComponentModel;
using Serenity.Web;

namespace Store.Store.Forms
{
    [FormScript("Store.DocumentType")]
    [BasedOnRow(typeof(Entities.DocumentTypeRow), CheckNames = true)]
    public class DocumentTypeForm
    {
        public string DocumentName { get; set; }
    }
}