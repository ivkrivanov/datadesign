using Serenity.ComponentModel;
using System;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityAddress")]
[BasedOnRow(typeof(BusinessEntityAddressRow), CheckNames = true)]
public class BusinessEntityAddressForm
{
    public long BusinessEntityId { get; set; }
    public long AddressId { get; set; }
    public long AddressTypeId { get; set; }
    //public string AddressTypeName {  get; set; }
    //[Category("Address Type")]
    //public string AddressType { get; set; }
    //public List<AddressTypeRow> AddressType { get; set; }
    //[Category("Addresses")]
    //public List<int> Addresses { get; set; }
    //public Guid Rowguid { get; set; }
}