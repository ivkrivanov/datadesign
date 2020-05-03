
namespace CoreStore.Store.Lookups
{
    using CoreStore.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using CoreStore.Store.Entities;

    [LookupScript]
    public class CounterpartiesLookup : MultiTenantRowLookupScript<CounterpartiesRow>
    {
        public CounterpartiesLookup()
        {
            IdField = CounterpartiesRow.Fields.CounterpartyId.PropertyName;
            TextField = CounterpartiesRow.Fields.CompanyName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CounterpartiesRow.Fields;
            query.Distinct(true)
                .Select(fld.CounterpartyId)
                .Select(fld.CompanyName);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
