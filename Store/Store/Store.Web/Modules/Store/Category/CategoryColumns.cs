
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryColumns
    {
        [EditLink, Width(100), AlignCenter]
        public Int16 Type { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String CategoryType { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String CategoryCode { get; set; }
        [EditLink, Width(250)]
        public String CategoryName { get; set; }
        [Width(450)]
        public String Description { get; set; }

    }
}