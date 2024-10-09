using Serenity.ComponentModel;
using Serenity.Web;
using System.ComponentModel;
using System.IO;

namespace Company.Store.Forms;

[FormScript("Store.Categories")]
[BasedOnRow(typeof(CategoriesRow), CheckNames = true)]
public class CategoriesForm
{
    [Category("Details")]
    [EditLink, OneThirdWidth, SortOrder(4), AlignCenter]                                              
    public int CategoryTypeId { get; set; }
    [EditLink, OneThirdWidth, SortOrder(4), AlignCenter]
    public string CategoryCode { get; set; }
    [EditLink, OneThirdWidth, Width(60)]
    public string CategoryName { get; set; }
    [EditLink] //, Width(66)]
    public string Description { get; set; }
    [Category("Picture")]
    public Stream Picture { get; set; }
}