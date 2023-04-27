using Serenity.ComponentModel;
using System;

namespace Company.Company.Forms;

[FormScript("Company.StateProvince")]
[BasedOnRow(typeof(StateProvinceRow), CheckNames = true)]
public class StateProvinceForm
{
    public string StateProvinceCode { get; set; }
    public string CountryCode { get; set; }
    public string Name { get; set; }
    public int TerritoryId { get; set; }
    //public Guid Rowguid { get; set; }
}