
namespace Company.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.CategoriesExcelImport")]
    public class CategoriesExcelImportForm
    {
        [FileUploadEditor, Required]
        public string FileName { get; set; }
    }
}