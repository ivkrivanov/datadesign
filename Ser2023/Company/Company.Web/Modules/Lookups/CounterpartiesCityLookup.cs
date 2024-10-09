
namespace Company.Store.Lookups;

using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Abstractions;

[LookupScript, Module("Store.CounterpartiesCity")]
public class CounterpartiesCityLookup : MultiTenantRowLookupScript<CounterpartiesRow>
{
    public CounterpartiesCityLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base(sqlConnections, twoLevelCache, userAccessor)
    {
        IdField = TextField = CounterpartiesRow.Fields.City.PropertyName;
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = CounterpartiesRow.Fields;
        query.Distinct(true)
            .Select(fld.Country)
            .Select(fld.City)
            .Where(
                new Criteria(fld.Country) != "" &
                new Criteria(fld.Country).IsNotNull() &
                new Criteria(fld.City) != "" &
                new Criteria(fld.City).IsNotNull());

        AddTenantFilter(query);
    }

    protected override void ApplyOrder(SqlQuery query)
    {
    }
}
