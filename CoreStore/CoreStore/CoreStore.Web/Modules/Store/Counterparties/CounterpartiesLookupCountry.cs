
namespace CoreStore.Store.Lookups
{
    using CoreStore.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CounterpartiesLookupCountry : MultiTenantRowLookupScript<Entities.CounterpartiesRow>
    {
        public CounterpartiesLookupCountry()
        {
            IdField = TextField = "Country";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CounterpartiesRow.Fields;
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
