using Serenity.ComponentModel;
using Serenity.Web;

namespace Company.Store.Forms;

[FormScript("Store.Shippers")]
[BasedOnRow(typeof(ShippersRow), CheckNames = true)]
public class ShippersForm
{
    public string CompanyName { get; set; }
    public string Phone { get; set; }
}