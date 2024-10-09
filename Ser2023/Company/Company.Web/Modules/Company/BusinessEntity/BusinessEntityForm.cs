using Serenity.ComponentModel;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityForm
{
    [Category("Person")]
    public string PersonType { get; set; }
    public string Title { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    public string LastName { get; set; }
    public string Suffix { get; set; }
    //public string AddressTypeName { get; set; }

    [Category("Address Type")]
    //[AddressTypeEditor]
    public List<AddressRow> AddressType { get; set; }  

    //[Category("Addresses")]
    //[BusinessEntityAddressEditor]
    //public List<BusinessEntityAddressRow> BusinessEntityAddresses { get; set; }
}