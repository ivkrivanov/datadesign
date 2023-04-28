using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityContact")]
[BasedOnRow(typeof(BusinessEntityContactRow), CheckNames = true)]
public class BusinessEntityContactForm
{
    public long PersonId { get; set; }
    public long ContactTypeId { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}