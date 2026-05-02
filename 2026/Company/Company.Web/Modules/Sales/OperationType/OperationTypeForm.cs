namespace Company.Sales;

[FormScript("Sales.OperationType")]
[BasedOnRow(typeof(OperationTypeRow), CheckNames = true)]
public class OperationTypeForm
{
    public short OpCode { get; set; }
    public string Operation { get; set; }
}