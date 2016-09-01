
namespace Ledger.Infra.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Infra.Category")]
    [BasedOnRow(typeof(Entities.CategoryRow))]
    public class CategoryForm
    {
        public String CategoryCode { get; set; }
        public Int16 CategoryType { get; set; }
        public String CategoryName { get; set; }
        public String Description { get; set; }
        public String Picture { get; set; }
        public Int16 IsActive { get; set; }
    }
}