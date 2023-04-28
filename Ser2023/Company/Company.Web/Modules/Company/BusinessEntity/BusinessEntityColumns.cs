using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public long BusinessEntityId { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}