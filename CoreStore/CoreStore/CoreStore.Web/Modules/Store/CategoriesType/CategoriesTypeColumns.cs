
namespace CoreStore.Store.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Store.CategoriesType")]
    [BasedOnRow(typeof(Entities.CategoriesTypeRow), CheckNames = true)]
    public class CategoriesTypeColumns
    {
        [EditLink, Width(100), SortOrder(1)]
        public Int16 Type { get; set; }
        [EditLink, Width(250)]
        public String CategoryType { get; set; }
    }
}