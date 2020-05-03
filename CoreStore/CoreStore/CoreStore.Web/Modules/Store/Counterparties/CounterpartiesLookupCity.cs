
namespace CoreStore.Store.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Entities;
    using CoreStore.Scripts;

    [LookupScript]
    public class CounterpartiesLookupCity : MultiTenantRowLookupScript<Entities.CounterpartiesRow>
    {
        public CounterpartiesLookupCity()
        {
            IdField = TextField = CounterpartiesRow.Fields.City.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CounterpartiesRow.Fields;
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
