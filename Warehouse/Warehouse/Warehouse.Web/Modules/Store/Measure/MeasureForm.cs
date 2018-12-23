
namespace Warehouse.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.Measure")]
    [BasedOnRow(typeof(Entities.MeasureRow), CheckNames = true)]
    public class MeasureForm
    {
        public String MeasureName { get; set; }
    }
}