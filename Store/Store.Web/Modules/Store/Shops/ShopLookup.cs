
namespace Store.Store.Lookups
{
    using global::Store.Store.Entities;
    using global::Store.Store.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;

    [LookupScript]
    public class ShopsLookup : MultiTenantRowLookupScript<ShopsRow>
    {
        public ShopsLookup()
        {
            IdField = ShopsRow.Fields.ShopID.PropertyName;
            TextField = ShopsRow.Fields.ShopName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ShopsRow.Fields;
            query.Distinct(true)
                .Select(fld.ShopID)
                .Select(fld.ShopName);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}