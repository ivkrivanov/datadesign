
namespace Store.Store.Columns
{
    using global::Store.Store.Entities;
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [ColumnsScript("Store.Measures")]
    [BasedOnRow(typeof(MeasuresRow), CheckNames = true)]
    public class MeasuresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public int MeasureId { get; set; }
        [EditLink]
        public string MeasureName { get; set; }
    }
}