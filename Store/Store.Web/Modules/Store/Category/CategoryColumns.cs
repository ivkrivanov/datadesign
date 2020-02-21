
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryColumns
    {
        //[EditLink(ItemType = "Store.CategoryType"), Width(100), AlignCenter]
        //[QuickFilter, QuickFilterOption("multiply", true)]
        //public Int16 Type { get; set; }
        [EditLink(ItemType = "Store.CategoryType"), Width(100), AlignCenter, SortOrder(1, descending: true)]
        [QuickFilter, QuickFilterOption("multiply", true)]
        public String CategoryType { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String CategoryCode { get; set; }
        [EditLink, Width(200)]
        public String CategoryName { get; set; }
        [Width(450)]
        public String Description { get; set; }

    }
}