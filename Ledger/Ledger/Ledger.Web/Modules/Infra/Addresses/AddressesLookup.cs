
namespace Ledger.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("Infra.Addresses")]
    public class AddressesLookup : MultiTenantRowLookupScript<AddressesRow>
    {
    }
}