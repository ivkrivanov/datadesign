
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.ItemCategory")]
    [BasedOnRow(typeof(Entities.ItemCategoryRow), CheckNames = true)]
    public class ItemCategoryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ItemCategoryID { get; set; }
        [EditLink, Width(100)]
        public String ItemCategoryCode { get; set; }
        [EditLink, Width(250)]
        public String ItemCategoryName { get; set; }
        [Width(450)]
        public String ItemCategoryDescription { get; set; }
        //public String ItemCategoryImage { get; set; }

    }
}