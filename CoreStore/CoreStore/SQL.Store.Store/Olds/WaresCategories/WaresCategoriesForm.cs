
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.WaresCategories")]
    [BasedOnRow(typeof(Entities.WaresCategoriesRow), CheckNames = true)]
    public class WaresCategoriesForm
    {
        public String WaresCategoryCode { get; set; }
        public String WaresCategoryName { get; set; }
        public String WaresCategoryDescription { get; set; }
        public String WaresCategoryImage { get; set; }
    }
}