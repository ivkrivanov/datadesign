
namespace CoreStore.Store.Lookups
{
    using Entities;
    using CoreStore.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;

    [LookupScript]
    public class ShopsLookupCity : MultiTenantRowLookupScript<Entities.ShopsRow>
    {
        public ShopsLookupCity()
        {
            IdField = TextField = ShopsRow.Fields.City.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.ShopsRow.Fields;
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
