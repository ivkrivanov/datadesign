
namespace Serene1.Default.Infra.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript("Default.Infra.AddressType")]
    public class AddressTypeLookup : MultiTenantRowLookupScript<Entities.AddressTypeRow>
    {
        public AddressTypeLookup()
        {
            IdField = TextField = "DisplayName";
        }
    }
}