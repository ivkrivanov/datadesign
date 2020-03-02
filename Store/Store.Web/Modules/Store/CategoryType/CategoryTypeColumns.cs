
namespace Store.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.CategoryType")]
    [BasedOnRow(typeof(Entities.CategoryTypeRow), CheckNames = true)]
    public class CategoryTypeColumns
    {
        [EditLink, Width(100), SortOrder(1)]
        public Int16 Type { get; set; }
        [EditLink, Width(250)]
        public String CategoryType { get; set; }
    }
}