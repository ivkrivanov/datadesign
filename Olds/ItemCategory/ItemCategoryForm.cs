
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ItemCategory")]
    [BasedOnRow(typeof(Entities.ItemCategoryRow), CheckNames = true)]
    public class ItemCategoryForm
    {
        public String ItemCategoryCode { get; set; }
        public String ItemCategoryName { get; set; }
        public String ItemCategoryDescription { get; set; }
        public String ItemCategoryImage { get; set; }
    }
}