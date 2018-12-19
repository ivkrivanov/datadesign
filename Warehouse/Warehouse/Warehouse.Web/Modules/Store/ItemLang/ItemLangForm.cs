
namespace Warehouse.Store.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Store.ItemLang")]
    [BasedOnRow(typeof(Entities.ItemLangRow), CheckNames = true)]
    public class ItemLangForm
    {
        public Int32 ItemId { get; set; }
        public Int32 LanguageId { get; set; }
        public String ItemName { get; set; }
    }
}