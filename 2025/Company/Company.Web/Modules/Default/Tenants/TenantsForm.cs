using Serenity.ComponentModel;

namespace Company.Default.Forms;

[FormScript("Default.Tenants")]
[BasedOnRow(typeof(TenantsRow), CheckNames = true)]
public class TenantsForm
{
    public string TenantName { get; set; }
}