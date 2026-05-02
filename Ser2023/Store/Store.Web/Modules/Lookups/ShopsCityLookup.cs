
namespace Store.Store.Lookups
{
    using Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Serenity.Abstractions;

    [LookupScript("Store.ShopsCity")]
    public class ShopsCityLookup : MultiTenantRowLookupScript<ShopsRow>
    {
        public ShopsCityLookup(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor)
            : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = TextField = ShopsRow.Fields.City.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ShopsRow.Fields;
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
}
