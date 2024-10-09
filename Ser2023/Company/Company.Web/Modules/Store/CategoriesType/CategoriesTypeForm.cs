using Serenity.ComponentModel;
using System;

namespace Company.Store.Forms;

[FormScript("Store.CategoriesType")]
[BasedOnRow(typeof(CategoriesTypeRow), CheckNames = true)]
public class CategoriesTypeForm
{
    public Int16 Type { get; set; }
    public String CategoryType { get; set; }
}
