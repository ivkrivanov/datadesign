using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.BusinessEntityAddress")]
[BasedOnRow(typeof(BusinessEntityAddressRow), CheckNames = true)]
public class BusinessEntityAddressColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public long BusinessEntityId { get; set; }
    public string AddressLine1 { get; set; }
    public string AddressTypeName { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}