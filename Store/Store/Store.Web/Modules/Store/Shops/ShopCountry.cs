
namespace Store.Store.Lookups
{
    using Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class ShopCountryLookup : MultiTenantRowLookupScript<Entities.ShopsRow>
    {
        public ShopCountryLookup()
        {
            IdField = TextField = ShopsRow.Fields.Country.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ShopsRow.Fields;
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