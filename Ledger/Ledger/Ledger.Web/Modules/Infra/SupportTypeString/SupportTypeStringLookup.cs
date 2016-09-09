namespace Ledger.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("Infra.SupportTypeString")]
    public class SupportTypeStringLookup : MultiTenantRowLookupScript<SupportTypeStringRow>
    {
    }
}