using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Web;
using System.Linq;

namespace Company.Store.Lookups;

[LookupScript]

public class OrderLookup: MultiTenantRowLookupScript<OrderRow>
{
    public OrderLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base(sqlConnections, twoLevelCache, userAccessor)
    {
        IdField = OrderRow.Fields.OrderId.PropertyName;
        TextField = OrderRow.Fields.CompanyName.PropertyName;
    }
    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = WaresOrderRow.Fields;
        query.Distinct(true)
            .Select(fld.CompanyName)
            .Where(
                new Criteria(fld.CompanyName) != "" &
                new Criteria(fld.CompanyName).IsNotNull());

        AddTenantFilter(query);
    }

    protected override void ApplyOrder(SqlQuery query)
    {
    }
}
