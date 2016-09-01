
namespace Ledger.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    [LookupScript("Infra.Category")]
    public class CategoryLookup:MultiTenantRowLookupScript<CategoryRow>
    {
    }
}