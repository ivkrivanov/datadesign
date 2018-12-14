
namespace Warehouse.Store.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Warehouse.Store.Scripts;

    [LookupScript]
    public class OrderShipCountryLookup : MultiTenantRowLookupScript<Entities.OrderRow>
    {
        public OrderShipCountryLookup()
        {
            IdField = TextField = OrderRow.Fields.ShipCountry.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = OrderRow.Fields;
            query.Distinct(true)
                .Select(fld.ShipCountry)
                .Where(
                    new Criteria(fld.ShipCountry) != "" &
                    new Criteria(fld.ShipCountry).IsNotNull());

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}