namespace Company.Sales;

[FormScript("Sales.Measures")]
[BasedOnRow(typeof(MeasuresRow), CheckNames = true)]
public class MeasuresForm
{
    public string MeasureName { get; set; }
}