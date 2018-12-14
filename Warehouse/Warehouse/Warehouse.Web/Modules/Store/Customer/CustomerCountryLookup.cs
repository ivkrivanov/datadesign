
namespace Warehouse.Store.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Warehouse.Store.Scripts;

    [LookupScript]
    public class CustomerCountryLookup : MultiTenantRowLookupScript<Entities.CustomerRow>
    {
        public CustomerCountryLookup()
        {
            IdField = TextField = "Country";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.Country)
                .Where(
                    new Criteria(fld.Country) != "" &
                    new Criteria(fld.Country).IsNotNull());

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}