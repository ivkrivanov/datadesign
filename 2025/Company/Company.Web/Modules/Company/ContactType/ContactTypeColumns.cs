namespace Company.Company.Columns;

[ColumnsScript("Company.ContactType")]
[BasedOnRow(typeof(ContactTypeRow), CheckNames = true)]
public class ContactTypeColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int ContactTypeId { get; set; }
    [EditLink]
    public string Name { get; set; }
}