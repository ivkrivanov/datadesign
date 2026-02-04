namespace Company.Administration.Forms;

[ColumnsScript("Administration.Tenants")]
[BasedOnRow(typeof(TenantsRow), CheckNames = true)]
public class TenantsColumns
{
    [EditLink]
    public int TenantId { get; set; }
    [EditLink, SortOrder(1)]
    public string TenantName { get; set; }
}