
namespace Serene1.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Serene1.Northwind.Scripts;

    [LookupScript]
    public class SupplierCountryLookup : MultiTenantRowLookupScript<Entities.SupplierRow>
    {
        public SupplierCountryLookup()
        {
            IdField = TextField = "Country";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.SupplierRow.Fields;
            query.Distinct(true)
                .Select(fld.Country)
                .Where(
                    new Criteria(fld.Country) != "" &
                    new Criteria(fld.Country).IsNotNull());

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}