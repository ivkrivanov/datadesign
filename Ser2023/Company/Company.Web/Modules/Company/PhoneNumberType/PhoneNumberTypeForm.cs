using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.PhoneNumberType")]
[BasedOnRow(typeof(PhoneNumberTypeRow), CheckNames = true)]
public class PhoneNumberTypeForm
{
    public string Name { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}