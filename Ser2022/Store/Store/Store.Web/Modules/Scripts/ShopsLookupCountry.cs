
namespace Store.Store.Scripts
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Serenity.Abstractions;

    [LookupScript("Store.ShopsCountry")]
    public class ShopsLookupCountry : MultiTenantRowLookupScript<Entities.ShopsRow>
    {
        public ShopsLookupCountry(ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) : base(sqlConnections, twoLevelCache, userAccessor)
        {
            //IdField = TextField = "Country";
            IdField = TextField = Entities.ShopsRow.Fields.Country.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ShopsRow.Fields;
            query.Distinct(true)
                .Select(fld.Country)
                .Where(
                    new Criteria(fld.Country) != "" &
                    new Criteria(fld.Country).IsNotNull());
            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
