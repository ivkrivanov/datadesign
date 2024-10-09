using Serenity.ComponentModel;
using System.ComponentModel;

namespace Company.Store.Columns;

[ColumnsScript("Store.Measures")]
[BasedOnRow(typeof(MeasuresRow), CheckNames = true)]
public class MeasuresColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int MeasureId { get; set; }
    [EditLink]
    public string MeasureName { get; set; }
}