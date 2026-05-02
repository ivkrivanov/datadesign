using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.ContactType")]
[BasedOnRow(typeof(ContactTypeRow), CheckNames = true)]
public class ContactTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public long ContactTypeId { get; set; }
    [EditLink]
    public string Name { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}