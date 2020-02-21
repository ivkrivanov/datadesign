
namespace Store.Store.Lookups
{
    using global::Store.Store.Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;

    [LookupScript]
    public class CounterpartyLookup : MultiTenantRowLookupScript<CounterpartyRow>
    {
        public CounterpartyLookup()
        {
            IdField = CounterpartyRow.Fields.CounterpartyID.PropertyName;
            TextField = CounterpartyRow.Fields.CompanyName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = CounterpartyRow.Fields;
            query.Distinct(true)
                .Select(fld.CounterpartyID)
                .Select(fld.CompanyName);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}