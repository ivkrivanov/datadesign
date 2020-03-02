
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.IO;

    [FormScript("Store.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow), CheckNames = true)]
    public class CategoryForm
    {
        public String CategoryTypeID { get; set; }
        public String CategoryCode { get; set; }
        public String CategoryName { get; set; }
        public String Description { get; set; }
    }
}