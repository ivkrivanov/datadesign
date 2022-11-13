
namespace Store.Store.Scripts
{
    using Entities;
    using Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Serenity.Abstractions;

    [LookupScript]
    public class WaresLookupCategories : MultiTenantRowLookupScript<Entities.WaresRow>
    {
        public WaresLookupCategories(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) : base(sqlConnections, twoLevelCache, userAccessor)
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
    }
}
