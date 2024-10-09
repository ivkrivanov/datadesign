using Serenity.ComponentModel;
<<<<<<< HEAD
using Serenity.Data;
using System;
=======
using System.Collections.Generic;
>>>>>>> revert
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityForm
{
<<<<<<< HEAD
    //public Guid Rowguid { get; set; }

    [Category("Person")]
    //[HalfWidth]
    //public string PersonType { get; set; }
    [HalfWidth]
    public string Title { get; set; }
    [HalfWidth]
    public string FirstName { get; set; }
    [HalfWidth]
    public string MiddleName { get; set; }
    [HalfWidth]
    public string LastName { get; set; }
    [HalfWidth]
    public string FullName { get; set; }
    [HalfWidth]
    public string Suffix { get; set; }

=======
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
>>>>>>> revert
}