
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.Wares.WaresExcelImports")]
    public class WaresExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}