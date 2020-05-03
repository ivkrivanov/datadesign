
namespace CoreStore.Store.Lookups
{
    using CoreStore.Store.Entities;
    using CoreStore.Scripts;
    using Serenity.ComponentModel;
    using Serenity.Data;

    [LookupScript]
    public class ShopsLookup : MultiTenantRowLookupScript<ShopsRow>
    {
        public ShopsLookup()
        {
            IdField = ShopsRow.Fields.ShopId.PropertyName;
            TextField = ShopsRow.Fields.ShopName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ShopsRow.Fields;
            query.Distinct(true)
                .Select(fld.ShopId)
                .Select(fld.ShopName);

            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}
