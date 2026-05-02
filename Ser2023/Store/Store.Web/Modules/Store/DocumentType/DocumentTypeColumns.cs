
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;

    [ColumnsScript("Store.DocumentType")]
    [BasedOnRow(typeof(Entities.DocumentTypeRow), CheckNames = true)]
    public class DocumentTypeColumns
    {
        [Width(250), EditLink]
        public string DocumentName { get; set; }
    }
}