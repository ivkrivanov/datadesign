using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.AddressType")]
[BasedOnRow(typeof(AddressTypeRow), CheckNames = true)]
public class AddressTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public long AddressTypeId { get; set; }
    [EditLink]
    public string AddressTypeName { get; set; }
    //public Guid Rowguid { get; set; }
}