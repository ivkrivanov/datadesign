using Serenity.ComponentModel;
using Serenity.Web;
using System.IO;

namespace Company.Store.Forms;

[FormScript("Store.Categories")]
[BasedOnRow(typeof(CategoriesRow), CheckNames = true)]
public class CategoriesForm
{
    public int CategoryTypeId { get; set; }
    public string CategoryCode { get; set; }
    public string CategoryName { get; set; }
    public string Description { get; set; }
    public Stream Picture { get; set; }
}