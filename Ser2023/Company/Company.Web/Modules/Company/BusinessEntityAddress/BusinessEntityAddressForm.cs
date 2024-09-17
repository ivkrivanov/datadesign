using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.BusinessEntityAddress")]
[BasedOnRow(typeof(BusinessEntityAddressRow), CheckNames = true)]
public class BusinessEntityAddressForm
{
    public long AddressId { get; set; }
    public long AddressTypeId { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}