
namespace Store.Store.Scripts
{
    using Store.Entities;
    //using Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Abstractions;

    [LookupScript("Store.Shops")]
    public class ShopsLookup : MultiTenantRowLookupScript<ShopsRow>
    {
        public ShopsLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) 
            : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = ShopsRow.Fields.ShopId.PropertyName;
            TextField = ShopsRow.Fields.ShopName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ShopsRow.Fields;
            query.Distinct(true)
                .Select(fld.ShopId)
                .Select(fld.ShopName)
                    .Where(
                        new Criteria(fld.ShopName) != "" &
                        new Criteria(fld.ShopName).IsNotNull());

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
