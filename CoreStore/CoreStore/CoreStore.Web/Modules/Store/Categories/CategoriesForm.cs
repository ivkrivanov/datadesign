
namespace CoreStore.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesForm
    {
        public Int32 CategoryTypeId { get; set; }
        public String CategoryCode { get; set; }
        public String CategoryName { get; set; }
        public String Description { get; set; }
    }
}