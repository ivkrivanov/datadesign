
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesForm
    {
        public String CategoryName { get; set; }
        public String Description { get; set; }
    }
}