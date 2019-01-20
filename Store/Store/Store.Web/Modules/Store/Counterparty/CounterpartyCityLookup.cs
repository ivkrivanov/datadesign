
namespace Store.Store.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Entities;
    using global::Store.Store.Scripts;

    [LookupScript]
    public class CounterpartyCityLookup : MultiTenantRowLookupScript<Entities.CounterpartyRow>
    {
        public CounterpartyCityLookup()
        {
            IdField = TextField = CounterpartyRow.Fields.City.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CounterpartyRow.Fields;
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