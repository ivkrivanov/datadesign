
namespace CoreStore.Store.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Store.Measures")]
    [BasedOnRow(typeof(Entities.MeasuresRow), CheckNames = true)]
    public class MeasuresColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeasureId { get; set; }
        [EditLink]
        public String MeasureName { get; set; }
    }
}