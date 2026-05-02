namespace Company.Sales.Forms;

[FormScript("Sales.CategoriesType")]
[BasedOnRow(typeof(CategoriesTypeRow), CheckNames = true)]
public class CategoriesTypeForm
{
    public short Type { get; set; }
    public string CategoryType { get; set; }
}