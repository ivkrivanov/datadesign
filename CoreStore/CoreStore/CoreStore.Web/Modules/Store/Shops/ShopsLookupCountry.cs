
namespace CoreStore.Store.Lookups
{
    using CoreStore.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;

    [LookupScript("Store.ShopsCountry")]
    public class ShopsLookupCountry : MultiTenantRowLookupScript<Entities.ShopsRow>
    {
        public ShopsLookupCountry()
        {
            IdField = TextField = "Country";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ShopsRow.Fields;
            query.Distinct(true)
                .Select(fld.Country)
                .Where(
                    new Criteria(fld.Country) != "" &
                    new Criteria(fld.Country).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
