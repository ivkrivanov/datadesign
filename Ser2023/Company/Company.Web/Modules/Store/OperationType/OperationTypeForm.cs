using Serenity.ComponentModel;
using Serenity.Web;

namespace Company.Store.Forms;

[FormScript("Store.OperationType")]
[BasedOnRow(typeof(OperationTypeRow), CheckNames = true)]
public class OperationTypeForm
{
    public short OpCode { get; set; }
    public string Operation { get; set; }
}