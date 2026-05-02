using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.PhoneNumberType")]
[BasedOnRow(typeof(PhoneNumberTypeRow), CheckNames = true)]
public class PhoneNumberTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int PhoneNumberTypeId { get; set; }
    [EditLink]
    public string Name { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}