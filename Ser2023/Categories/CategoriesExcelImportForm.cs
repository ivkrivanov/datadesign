
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.CategoriesExcelImport")]
    public class CategoriesExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}