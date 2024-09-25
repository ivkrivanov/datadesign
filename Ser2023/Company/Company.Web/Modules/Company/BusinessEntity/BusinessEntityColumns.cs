using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.BusinessEntity")]
[BasedOnRow(typeof(BusinessEntityRow), CheckNames = true)]
public class BusinessEntityColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int BusinessEntityId { get; set; }

    //[EditLink, Width(60)]
    //public string PersonType { get; set; }
    //public string Title { get; set; }
    //public string FirstName { get; set; }
    //public string MiddleName { get; set; }
    //public string LastName { get; set; }
    //public string Suffix { get; set; }
    [EditLink, Width(250)]
    public string FullName { get; set; }


}