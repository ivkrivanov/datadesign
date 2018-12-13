
namespace Warehouse.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.ProductLang")]
    [BasedOnRow(typeof(Entities.ProductLangRow), CheckNames = true)]
    public class ProductLangForm
    {
        public Int32 ProductId { get; set; }
        public Int32 LanguageId { get; set; }
        public String ProductName { get; set; }
    }
}