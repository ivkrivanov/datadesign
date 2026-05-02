namespace Company.Company.Forms;

[FormScript("Company.Province")]
[BasedOnRow(typeof(ProvinceRow), CheckNames = true)]
public class ProvinceForm
{
    public string ProvinceCode { get; set; }
    public int CountryId { get; set; }
    public string ProvinceName { get; set; }
}