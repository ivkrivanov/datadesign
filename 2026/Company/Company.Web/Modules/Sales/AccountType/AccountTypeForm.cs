namespace Company.Sales.Forms;

[FormScript("Sales.AccountType")]
[BasedOnRow(typeof(AccountTypeRow), CheckNames = true)]
public class AccountTypeForm
{
    public string Description { get; set; }
}