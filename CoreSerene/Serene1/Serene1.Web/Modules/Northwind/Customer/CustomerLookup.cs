
namespace Serene1.Northwind.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;
    using Serene1.Northwind.Scripts;
    using Serenity.Data;

    [LookupScript]
    public class CustomerLookup : MultiTenantRowLookupScript<CustomerRow>
    {
        public CustomerLookup()
        {
            IdField = CustomerRow.Fields.CustomerID.PropertyName;
            TextField = CustomerRow.Fields.CompanyName.PropertyName;
        }
        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.CustomerID)
                .Select(fld.CompanyName);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}