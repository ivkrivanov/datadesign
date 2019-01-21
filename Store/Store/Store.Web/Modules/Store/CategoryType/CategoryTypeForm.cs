
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.CategoryType")]
    [BasedOnRow(typeof(Entities.CategoryTypeRow), CheckNames = true)]
    public class CategoryTypeForm
    {
        public Int16 Type { get; set; }
        public String CategoryType { get; set; }
    }
}