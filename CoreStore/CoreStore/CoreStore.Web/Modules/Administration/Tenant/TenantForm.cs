
namespace CoreStore.Administration.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Administration.Tenant")]
    [BasedOnRow(typeof(Entities.TenantRow), CheckNames = true)]
    public class TenantForm
    {
        public String TenantName { get; set; }
    }
}