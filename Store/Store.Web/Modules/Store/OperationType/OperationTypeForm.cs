
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.OperationType")]
    [BasedOnRow(typeof(Entities.OperationTypeRow), CheckNames = true)]
    public class OperationTypeForm
    {
        public Int16 OpCode { get; set; }
        public String Operation { get; set; }
    }
}