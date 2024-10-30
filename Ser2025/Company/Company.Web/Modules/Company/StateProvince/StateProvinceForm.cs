using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.StateProvince")]
[BasedOnRow(typeof(StateProvinceRow), CheckNames = true)]
public class StateProvinceForm
{
    public string StateProvinceCode { get; set; }
    public string StateProvinceName { get; set; }
    public string CountryCode { get; set; }

}