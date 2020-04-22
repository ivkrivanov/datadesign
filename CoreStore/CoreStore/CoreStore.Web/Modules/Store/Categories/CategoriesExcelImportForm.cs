
namespace CoreStore.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.CategoriesExcelImport")]
    public class CategoryExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
