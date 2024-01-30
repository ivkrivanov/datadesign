namespace Company.Company.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Abstractions;
    using System.Linq;

    [LookupScript("Address.Country")]
    public class AddressCountryLookup : MultiTenantRowLookupScript<AddressRow>
    {
        public AddressCountryLookup(ISqlConnections sqlConnections, ITwoLevelCache twolevelcache, IUserAccessor userAccessor)
            : base (sqlConnections, twolevelcache, userAccessor)
        {
            IdField = TextField = AddressRow.Fields.CountryCode.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = AddressRow.Fields;
            query.Distinct(true)
                .Select(fld.CountryCode)
                .Select(fld.City)
                .Where(
                new Criteria(fld.CountryCode) != "" &
                new Criteria(fld.CountryCode).IsNotNull() &
                new Criteria(fld.City) != "" &
                new Criteria(fld.City).IsNotNull());

            AddTenantFilter(query);
        }
        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
