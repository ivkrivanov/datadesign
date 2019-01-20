
namespace Store.Store.Lookups
{
    using Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class WaresCategoryLookup : MultiTenantRowLookupScript<Entities.WaresRow>
    {
        public WaresCategoryLookup()
        {
            IdField = TextField = WaresRow.Fields.Type.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = WaresRow.Fields;
            query.Distinct(true)
                .Select(fld.CategoryID)
                .Where(new Criteria(fld.Type) == 100);


            AddTenantFilter(query);
        }
    }
}