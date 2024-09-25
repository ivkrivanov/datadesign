using Serenity.ComponentModel;
using Serenity.Web;
using System;

namespace Company.Store.Forms;

[FormScript("Store.StoreAverage")]
public class StoreAverageForm
{
    [FileUploadEditor, Required]
    public String FileName { get; set; }
}
