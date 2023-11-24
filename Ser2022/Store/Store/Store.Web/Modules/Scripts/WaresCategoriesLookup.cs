
namespace Store.Store.Scripts
{
    using Entities;
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class WaresCategoriesLookup : MultiTenantRowLookupScript<WaresRow>
    {
        public WaresCategoriesLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = TextField = WaresRow.Fields.Type.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = WaresRow.Fields;
            query.Distinct(true)
                .Select(fld.Type)
                .Where(new Criteria(fld.Type) < 400);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
