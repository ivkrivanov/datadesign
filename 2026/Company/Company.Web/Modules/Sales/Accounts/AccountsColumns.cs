namespace Company.Sales.Columns;

[ColumnsScript("Sales.Accounts")]
[BasedOnRow(typeof(AccountsRow), CheckNames = true)]
public class AccountsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int AccountId { get; set; }
    public int Account { get; set; }
    public int SubAccount { get; set; }
    public string AccountTypeDescription { get; set; }
    [EditLink]
    public string Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
}