﻿
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.CategoryExcelImport")]
    public class CategoryExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}