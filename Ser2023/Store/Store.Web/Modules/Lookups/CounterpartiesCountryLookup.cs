
namespace Store.Store.Lookups
{
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;

    [LookupScript("Store.CounterpartiesCountry")]
    public class CounterpartiesCountryLookup : MultiTenantRowLookupScript<Store.Entities.CounterpartiesRow>
    {
        public CounterpartiesCountryLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
            : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = TextField = "Country";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Store.Entities.CounterpartiesRow.Fields;
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
