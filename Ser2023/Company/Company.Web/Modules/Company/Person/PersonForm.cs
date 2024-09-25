using Serenity.ComponentModel;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Person.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonForm
{
    public long BusinessEntityId {  get; set; }


    [Category("Person")]
    public string PersonType { get; set; }
    public string Title { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    public string LastName { get; set; }
    public string Suffix { get; set; }

    //[Category("Addresses")]
    //public List<AddressRow> Addresses { get; set; }
}