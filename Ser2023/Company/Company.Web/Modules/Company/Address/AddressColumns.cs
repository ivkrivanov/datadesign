using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.Address")]
[BasedOnRow(typeof(AddressRow), CheckNames = true)]
public class AddressColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public long AddressId { get; set; }
    [EditLink]
    public string AddressLine1 { get; set; }
    public string AddressLine2 { get; set; }
    public string Name {  get; set; }
    public string City { get; set; }
    public string StateProvinceCode { get; set; }
    public string PostalCode { get; set; }
    //public Guid Rowguid { get; set; }
}