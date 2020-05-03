
namespace CoreStore.Store.Lookups
{
    using Entities;
    using CoreStore.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class WaresLookupCategories : MultiTenantRowLookupScript<Entities.WaresRow>
    {
        public WaresLookupCategories()
        {
            IdField = TextField = WaresRow.Fields.Type.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = WaresRow.Fields;
            query.Distinct(true)
                .Select(fld.Type)
                .Where(new Criteria(fld.Type) < 400);

            AddTenantFilter(query);
        }
    }
}
