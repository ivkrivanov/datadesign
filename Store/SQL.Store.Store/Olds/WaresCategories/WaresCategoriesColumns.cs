
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.WaresCategories")]
    [BasedOnRow(typeof(Entities.WaresCategoriesRow), CheckNames = true)]
    public class WaresCategoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 WaresCategoryID { get; set; }
        [EditLink, Width(100)]
        public String WaresCategoryCode { get; set; }
        [EditLink, Width(250)]
        public String WaresCategoryName { get; set; }
        [Width(450)]
        public String WaresCategoryDescription { get; set; }
    }
}