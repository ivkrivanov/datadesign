﻿
namespace Serene1.Northwind.Lookups
{
    using Entities;
    using Serene1.Northwind.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerCityLookup : MultiTenantRowLookupScript<Entities.CustomerRow>
    {
        public CustomerCityLookup()
        {
            IdField = TextField = CustomerRow.Fields.City.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
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