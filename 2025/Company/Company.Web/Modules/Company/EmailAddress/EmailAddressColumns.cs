using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.EmailAddress")]
[BasedOnRow(typeof(EmailAddressRow), CheckNames = true)]
public class EmailAddressColumns
{
    public string BusinessEntityPersonType { get; set; }
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int EmailAddressId { get; set; }
    [EditLink]
    public string EmailAddress { get; set; }
    public short IsActive { get; set; }
    public int TenantId { get; set; }
}