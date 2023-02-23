
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesColumns
    {
        [EditLink(ItemType = "Store.CategoriesType"), Width(100), AlignCenter, SortOrder(1, descending: true)]
        [QuickFilter, QuickFilterOption("multiply", true)]
        public string CategoryType { get; set; }
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String CategoryId { get; set; }
        [EditLink, Width(100), AlignCenter]
        public String CategoryCode { get; set; }
        [EditLink, Width(200)]
        public String CategoryName { get; set; }
        [Width(450)]
        public String Description { get; set; }
    }
}