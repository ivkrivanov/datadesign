
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.ItemCategoriesLang")]
    [BasedOnRow(typeof(Entities.ItemCategoriesLangRow), CheckNames = true)]
    public class ItemCategoriesLangForm
    {
        public String ItemCategoryName { get; set; }
        public String Description { get; set; }
    }
}