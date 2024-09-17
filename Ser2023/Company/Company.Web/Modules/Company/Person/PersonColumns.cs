using Serenity.ComponentModel;
using System;
using System.ComponentModel;

namespace Company.Company.Columns;

[ColumnsScript("Company.Person")]
[BasedOnRow(typeof(PersonRow), CheckNames = true)]
public class PersonColumns
{
    //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    //public long BusinessEntityId { get; set; }
    //public long PersonId { get; set; }
    [EditLink]
    //public string PersonType { get; set; }
    public string Title { get; set; }
    public string FirstName { get; set; }
    public string MiddleName { get; set; }
    public string LastName { get; set; }
    public string Suffix { get; set; }
    //public Guid Rowguid { get; set; }
    //public short IsActive { get; set; }
    //public int TenantId { get; set; }
}