
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.WaresExcelImport")]
    public class WaresExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}