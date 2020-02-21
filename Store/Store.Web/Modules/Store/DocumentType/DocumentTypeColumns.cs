
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.DocumentType")]
    [BasedOnRow(typeof(Entities.DocumentTypeRow), CheckNames = true)]
    public class DocumentTypeColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        //public Int32 DocumentTypeId { get; set; }
        [Width(250), EditLink]
        public String DocumentName { get; set; }
    }
}