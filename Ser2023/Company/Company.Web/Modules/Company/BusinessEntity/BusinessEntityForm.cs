using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityForm
{
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

}