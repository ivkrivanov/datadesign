
namespace CoreStore.Store.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Store.Measures")]
    [BasedOnRow(typeof(Entities.MeasuresRow), CheckNames = true)]
    public class MeasuresForm
    {
        public String MeasureName { get; set; }
    }
}