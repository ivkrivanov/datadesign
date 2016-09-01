
namespace Ledger.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("Infra.Currency")]
    public class CurrencyLookup:MultiTenantRowLookupScript<CurrencyRow>
    {
    }
}