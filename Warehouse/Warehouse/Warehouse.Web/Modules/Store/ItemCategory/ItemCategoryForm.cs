
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ItemCategory")]
    [BasedOnRow(typeof(Entities.ItemCategoryRow), CheckNames = true)]
    public class ItemCategoryForm
    {
        public String ItemCategoryCode { get; set; }
        public String ItemCategoryName { get; set; }
        public String ItemCatImage { get; set; }
        public String ItemCatDescription { get; set; }
    }
}