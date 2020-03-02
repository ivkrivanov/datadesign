
namespace Store.Store.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("Store.StoreAverage")]
    public class StoreAverageForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}