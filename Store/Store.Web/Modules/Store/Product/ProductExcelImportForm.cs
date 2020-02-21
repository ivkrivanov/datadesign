
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.ProductExcelImport")]
    public class ProductExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}