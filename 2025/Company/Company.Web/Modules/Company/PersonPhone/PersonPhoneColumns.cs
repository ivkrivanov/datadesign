using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.PersonPhone")]
[BasedOnRow(typeof(PersonPhoneRow), CheckNames = true)]
public class PersonPhoneColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public string BusinessEntityPersonType { get; set; }
    [EditLink]
    public string PhoneNumber { get; set; }
    public string PhoneNumberTypeName { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}