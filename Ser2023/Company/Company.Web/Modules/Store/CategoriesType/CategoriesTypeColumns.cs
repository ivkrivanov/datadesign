using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Store.Columns;

[ColumnsScript("Store.CategoriesType")]
[BasedOnRow(typeof(CategoriesTypeRow), CheckNames = true)]
public class CategoriesTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public Int32 CategoryTypeId { get; set; }
    public Int16 Type { get; set; }
    [EditLink]
    public String CategoryType { get; set; }
}
