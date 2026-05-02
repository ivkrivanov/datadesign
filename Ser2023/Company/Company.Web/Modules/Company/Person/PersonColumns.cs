using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Person.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int BusinessEntityId { get; set; }

    //[AlignRight]
    //public int BEId {  get; set; }
    [EditLink, Width(60)]
    public string PersonType { get; set; }
    //public string Title { get; set; }
    //public string FirstName { get; set; }
    //public string MiddleName { get; set; }
    //public string LastName { get; set; }
    [EditLink, Width(250)]
    public string FullName { get; set; }

    //public string Suffix { get; set; }
}