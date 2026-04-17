namespace Company.Sales.Forms;

[FormScript("Sales.Accounts")]
[BasedOnRow(typeof(AccountsRow), CheckNames = true)]
public class AccountsForm
{
    public int Account { get; set; }
    public int SubAccount { get; set; }
    public int AccountTypeId { get; set; }
    public string Description { get; set; }
    public DateTime StartDate { get; set; }
    public DateTime EndDate { get; set; }
}