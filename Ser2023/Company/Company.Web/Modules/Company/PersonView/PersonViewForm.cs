using Serenity.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.PersonView")]
[BasedOnRow(typeof(PersonViewRow), CheckNames = true)]
public class PersonViewForm
{
    public string PersonType { get; set; }
    public string Title { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    public string LastName { get; set; }
    public string Suffix { get; set; }
    public string Name { get; set; }
    public string PhoneNumberType { get; set; }
    public string AddressType { get; set; }
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string City { get; set; }
    public string PostalCode { get; set; }
    public string StateProvinceCode { get; set; }
    public string Country { get; set; }
}