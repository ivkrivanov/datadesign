using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.StateProvince")]
[BasedOnRow(typeof(StateProvinceRow), CheckNames = true)]
public class StateProvinceColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignCenter, SortOrder(1, descending: true)]
    //public int StateProvinceId { get; set; }
    //[EditLink]
    public string StateProvinceCode { get; set; }
    [EditLink, Width(100)]
    public string CountryName { get; set; }
    [EditLink, Width(200)]
    public string StateProvinceName { get; set; }
    //[Width(450)]
    //public Guid Rowguid { get; set; }
}