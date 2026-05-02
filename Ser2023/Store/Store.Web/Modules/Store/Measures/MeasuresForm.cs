
namespace Store.Store.Forms
{
    using global::Store.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [FormScript("Store.Measures")]
    [BasedOnRow(typeof(MeasuresRow), CheckNames = true)]
    public class MeasuresForm
    {
        public string MeasureName { get; set; }
    }
}