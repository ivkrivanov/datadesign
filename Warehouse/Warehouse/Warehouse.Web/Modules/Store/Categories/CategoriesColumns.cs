
namespace Warehouse.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ColumnsScript("Store.Categories")]
    [BasedOnRow(typeof(Entities.CategoriesRow), CheckNames = true)]
    public class CategoriesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryId { get; set; }
        [EditLink, Width(250)]
        public String CategoryName { get; set; }
        [Width(450)]
        public String Description { get; set; }
        //public Stream Picture { get; set; }
    }
}