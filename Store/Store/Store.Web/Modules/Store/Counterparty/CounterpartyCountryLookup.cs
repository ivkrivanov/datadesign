
namespace Store.Store.Lookups
{
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CounterpartyCountryLookup : MultiTenantRowLookupScript<Entities.CounterpartyRow>
    {
        public CounterpartyCountryLookup()
        {
            IdField = TextField = "Country";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CounterpartyRow.Fields;
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