
namespace Warehouse.Store.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Store.Measure")]
    [BasedOnRow(typeof(Entities.MeasureRow), CheckNames = true)]
    public class MeasureColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MeasureId { get; set; }
        [EditLink]
        public String MeasureName { get; set; }
    }
}