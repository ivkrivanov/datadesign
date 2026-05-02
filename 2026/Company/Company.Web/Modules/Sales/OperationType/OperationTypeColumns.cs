namespace Company.Sales.Columns;

[ColumnsScript("Sales.OperationType")]
[BasedOnRow(typeof(OperationTypeRow), CheckNames = true)]
public class OperationTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int OperationTypeId { get; set; }
    public short OpCode { get; set; }
    [EditLink]
    public string Operation { get; set; }
}