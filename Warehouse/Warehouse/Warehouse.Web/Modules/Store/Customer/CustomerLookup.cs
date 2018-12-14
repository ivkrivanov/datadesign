
namespace Warehouse.Store.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Warehouse.Store.Scripts;

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