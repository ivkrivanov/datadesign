using Serenity.ComponentModel;
using Serenity.Web;
using System;

namespace Address.Address.Forms
{
    [FormScript("Address.StateProvince")]
    [BasedOnRow(typeof(StateProvinceRow), CheckNames = true)]
    public class StateProvinceForm
    {
        public string StateProvinceCode { get; set; }
        public string CountryCode { get; set; }
        public string Name { get; set; }
        public int TerritoryId { get; set; }
        public Guid Rowguid { get; set; }
        public short IsActive { get; set; }
    }
}