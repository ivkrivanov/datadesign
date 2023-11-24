
namespace Store.Store.Scripts
{
    using Entities;
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Store.WaresMovement")]
    public class WaresMovementLookup : MultiTenantRowLookupScript<WaresMovementRow>
    {
        public WaresMovementLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) 
            : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = WaresMovementRow.Fields.WaresMoveId.PropertyName;
            TextField = WaresMovementRow.Fields.CounterpartyCompanyName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = WaresMovementRow.Fields;
            query.Distinct(true)
                .Select(fld.CounterpartyCompanyName)
                    .Where(
                        new Criteria(fld.CounterpartyCompanyName) != "" &
                        new Criteria(fld.CounterpartyCompanyName).IsNotNull());
            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
