
namespace Warehouse.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.ItemCategoriesLang")]
    [BasedOnRow(typeof(Entities.ItemCategoriesLangRow), CheckNames = true)]
    public class ItemCategoriesLangColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 ItemCategoryId { get; set; }
        public Int32 LanguageId { get; set; }
        [EditLink]
        public String ItemCategoryName { get; set; }
    }
}