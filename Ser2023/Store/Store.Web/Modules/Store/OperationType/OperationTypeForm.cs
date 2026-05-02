
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;

    [FormScript("Store.OperationType")]
    [BasedOnRow(typeof(Entities.OperationTypeRow), CheckNames = true)]
    public class OperationTypeForm
    {
        public short OpCode { get; set; }
        public string Operation { get; set; }
    }
}