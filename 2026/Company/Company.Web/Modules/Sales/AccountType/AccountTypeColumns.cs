namespace Company.Sales.Columns;

[ColumnsScript("Sales.AccountType")]
[BasedOnRow(typeof(AccountTypeRow), CheckNames = true)]
public class AccountTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int AccountTypeId { get; set; }
    [EditLink]
    public string Description { get; set; }
}