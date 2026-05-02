
namespace Store.Store.Lookups
{
    using Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Abstractions;

    [LookupScript("Store.Counterparties")]
    public class CounterpartiesLookup : MultiTenantRowLookupScript<CounterpartiesRow>
    {
        public CounterpartiesLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
            : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = CounterpartiesRow.Fields.CounterpartyId.PropertyName;
            TextField = CounterpartiesRow.Fields.CompanyName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CounterpartiesRow.Fields;
            query.Distinct(true)
                .Select(fld.CounterpartyId)
                .Select(fld.CompanyName);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
