using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonForm
{
    //public string PersonType { get; set; }
    public string Title { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    public string LastName { get; set; }
    public string Suffix { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}