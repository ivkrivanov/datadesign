using Serenity.Abstractions;
using Serenity.ComponentModel;
using Serenity.Data;
using System.Linq;

namespace Company.Company.Lookups;

[LookupScript("Address.City")]
public class AddressCityLookup : MultiTenantRowLookupScript<AddressRow>
{
    public AddressCityLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
        : base(sqlConnections, twoLevelCache, userAccessor)
    {
        IdField = TextField = AddressRow.Fields.City.PropertyName;
    }

    protected override void PrepareQuery(SqlQuery query)
    {
        var fld = AddressRow.Fields;
        query.Distinct(true)
            .Select(fld.StateProvinceId)
            .Select(fld.City)
            .Where(
            new Criteria(fld.StateProvinceId) != "" &
            new Criteria(fld.StateProvinceId).IsNotNull() &
            new Criteria(fld.City) != "" &
            new Criteria(fld.City).IsNotNull());

        AddTenantFilter(query);
    }
    protected override void ApplyOrder(SqlQuery query)
    {
    }
}
