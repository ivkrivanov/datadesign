
namespace Store.Store.Lookups
{
    using Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class CustomerLookup : MultiTenantRowLookupScript<CustomerRow>
    {
        public CustomerLookup()
        {
            IdField = CustomerRow.Fields.CustomerID.PropertyName;
            TextField = CustomerRow.Fields.CompanyName.PropertyName;
        }
    }
}