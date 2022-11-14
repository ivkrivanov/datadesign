
namespace Store.Store.Scripts
{
    using Entities;
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class WaresMovementLookup : MultiTenantRowLookupScript<WaresMovementRow>
    {
        public WaresMovementLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = WaresMovementRow.Fields.WaresMoveId.PropertyName;
            TextField = WaresMovementRow.Fields.CounterpartyCompanyName.PropertyName;
        }
    }
}
