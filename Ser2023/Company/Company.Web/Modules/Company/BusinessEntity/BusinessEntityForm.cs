using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityForm
{
    public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}