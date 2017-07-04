
namespace Store.Infra.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Infra.SupportType")]
    [BasedOnRow(typeof(Entities.SupportTypeRow))]
    public class SupportTypeForm
    {
        public string EnumValue { get; set; }
        public String EnumName { get; set; }
    }
}