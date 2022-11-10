
namespace Store.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.CategoriesType")]
    [BasedOnRow(typeof(Entities.CategoriesTypeRow), CheckNames = true)]
    public class CategoriesTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CategoryTypeId { get; set; }
        public Int16 Type { get; set; }
        [EditLink]
        public String CategoryType { get; set; }
    }
}