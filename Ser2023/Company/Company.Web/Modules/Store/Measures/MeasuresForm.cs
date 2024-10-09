using Serenity.ComponentModel;
using Serenity.Web;

namespace Company.Store.Forms;

[FormScript("Store.Measures")]
[BasedOnRow(typeof(MeasuresRow), CheckNames = true)]
public class MeasuresForm
{
    public string MeasureName { get; set; }
}