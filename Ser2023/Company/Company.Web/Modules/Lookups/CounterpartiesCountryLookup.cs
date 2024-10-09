using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;

namespace Company.Store.Lookups;

[LookupScript("Store.CounterpartiesCountry")]
public class CounterpartiesCountryLookup : MultiTenantRowLookupScript<CounterpartiesRow>
{
    public CounterpartiesCountryLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base(sqlConnections, twoLevelCache, userAccessor)
    {
        IdField = TextField = "Country";
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = CounterpartiesRow.Fields;
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
