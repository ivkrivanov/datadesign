using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Address.Address.Columns
{
    [ColumnsScript("Address.StateProvince")]
    [BasedOnRow(typeof(StateProvinceRow), CheckNames = true)]
    public class StateProvinceColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int StateProvinceId { get; set; }
        [EditLink]
        public string StateProvinceCode { get; set; }
        public string CountryCodeName { get; set; }
        public string Name { get; set; }
        public int TerritoryId { get; set; }
        public Guid Rowguid { get; set; }
        public short IsActive { get; set; }
    }
}