﻿
namespace Store.Store.Lookups
{
    using Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

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