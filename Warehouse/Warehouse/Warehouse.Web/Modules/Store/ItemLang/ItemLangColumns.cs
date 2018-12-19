
namespace Warehouse.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.ItemLang")]
    [BasedOnRow(typeof(Entities.ItemLangRow), CheckNames = true)]
    public class ItemLangColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 ItemId { get; set; }
        public Int32 LanguageId { get; set; }
        [EditLink]
        public String ItemName { get; set; }
    }
}