﻿
namespace Store.Store.Lookups
{
    using Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;

    [LookupScript]
    public class OrderShipCityLookup : MultiTenantRowLookupScript<Entities.OrderRow>
    {
        public OrderShipCityLookup()
        {
            IdField = TextField = OrderRow.Fields.ShipCity.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OrderRow.Fields;
            query.Distinct(true)
                .Select(fld.ShipCountry)
                .Select(fld.ShipCity)
                .Where(
                    new Criteria(fld.ShipCountry) != "" &
                    new Criteria(fld.ShipCountry).IsNotNull() &
                    new Criteria(fld.ShipCity) != "" &
                    new Criteria(fld.ShipCity).IsNotNull());

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}