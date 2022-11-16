
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.ProductsExcelImport")]
    public class ProductsExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}

