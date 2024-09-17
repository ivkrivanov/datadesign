
namespace Address.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.Tenant")]
    [BasedOnRow(typeof(TenantRow), CheckNames = true)]
    public class TenantForm
    {
        public String TenantName { get; set; }
    }
}