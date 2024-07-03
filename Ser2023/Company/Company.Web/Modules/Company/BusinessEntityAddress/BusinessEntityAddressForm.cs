using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityAddress")]
[BasedOnRow(typeof(BusinessEntityAddressRow), CheckNames = true)]
public class BusinessEntityAddressForm
{

    //public long AddressId { get; set; }
    public long AddressTypeId { get; set; }
    //public string AddressTypeName {  get; set; }
    [Category("Address Type")]
    public string AddressTypeName { get; set; }
    //[Category("Addresses")]
    //public List<int> Addresses { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}