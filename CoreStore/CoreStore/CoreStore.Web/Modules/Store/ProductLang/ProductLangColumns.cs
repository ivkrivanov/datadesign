﻿
namespace CoreStore.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.ProductLang")]
    [BasedOnRow(typeof(Entities.ProductLangRow), CheckNames = true)]
    public class ProductLangColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        public Int32 ProductId { get; set; }
        public Int32 LanguageId { get; set; }
        [EditLink]
        public String ProductName { get; set; }
    }
}