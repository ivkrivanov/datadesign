using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.BusinessEntityContact")]
[BasedOnRow(typeof(BusinessEntityContactRow), CheckNames = true)]
public class BusinessEntityContactColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public long BusinessEntityId { get; set; }
    public long PersonId { get; set; }
    public string ContactTypeName { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}