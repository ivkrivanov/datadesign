
namespace CoreStore.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.CategoriesType")]
    [BasedOnRow(typeof(Entities.CategoriesTypeRow), CheckNames = true)]
    public class CategoriesTypeForm
    {
        public Int16 Type { get; set; }
        public String CategoryType { get; set; }
    }
}