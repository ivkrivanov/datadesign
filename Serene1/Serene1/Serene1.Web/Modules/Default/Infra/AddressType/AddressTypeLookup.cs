
namespace Serene1.Default.Infra.Scripts
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    [LookupScript("Default.Infra.AddressType")]
    public class AddressTypeLookup : MultiTenantRowLookupScript<AddressTypeRow>
    {
    }
}