
namespace CoreStore.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.DocumentType")]
    [BasedOnRow(typeof(Entities.DocumentTypeRow), CheckNames = true)]
    public class DocumentTypeColumns
    {
        [Width(250), EditLink]
        public String DocumentName { get; set; }
    }
}