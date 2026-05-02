using Serenity.ComponentModel;
using System.Collections.Generic;
using System.ComponentModel;

namespace Company.Company.Forms;

[FormScript("Company.StateProvince")]
[BasedOnRow(typeof(StateProvinceRow), CheckNames = true)]
public class StateProvinceForm
{
    [Category("Province Code")]
    [HalfWidth]
    public string StateProvinceCode { get; set; }
    [HalfWidth]
    public string StateProvinceName { get; set; }

    [Category("Country")]
    public string CountryCode { get; set; }

    //public Guid Rowguid { get; set; }
}