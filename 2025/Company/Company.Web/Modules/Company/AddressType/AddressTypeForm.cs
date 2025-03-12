namespace Company.Company.Forms;

[FormScript("Company.AddressType")]
[BasedOnRow(typeof(AddressTypeRow), CheckNames = true)]
public class AddressTypeForm
{
    public string AddressTypeName { get; set; }
}