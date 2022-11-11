
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.DocumentType")]
    [BasedOnRow(typeof(Entities.DocumentTypeRow), CheckNames = true)]
    public class DocumentTypeColumns
    {
        [Width(250), EditLink]
        public String DocumentName { get; set; }
    }
}