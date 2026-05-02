namespace Company.Sales;

[FormScript("Sales.Currency")]
[BasedOnRow(typeof(CurrencyRow), CheckNames = true)]
public class CurrencyForm
{
    public string CurrencyCode { get; set; }
    public string Name { get; set; }
}