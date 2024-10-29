
using Serenity.ComponentModel;
using System;

namespace Company.Administration.Forms
{
    [FormScript("Administration.Tenant")]
    [BasedOnRow(typeof(TenantRow), CheckNames = true)]
    public class TenantForm
    {
        public String TenantName { get; set; }
    }
}