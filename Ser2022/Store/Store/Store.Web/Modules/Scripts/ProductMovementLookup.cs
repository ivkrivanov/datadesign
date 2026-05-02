
namespace Store.Store.Lookups
{
    using Serenity.Abstractions;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using Store.Entities;

    [LookupScript]
    public class ProductMovementLookup : MultiTenantRowLookupScript<ProductMovementRow>
    {
        public ProductMovementLookup(Serenity.Data.ISqlConnections sqlConnections, ITwoLevelCache twoLevelCache, IUserAccessor userAccessor) 
            : base(sqlConnections, twoLevelCache, userAccessor)
        {
            IdField = ProductMovementRow.Fields.ProductMoveId.PropertyName;
            TextField = ProductMovementRow.Fields.CounterpartyCompanyName.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ProductMovementRow.Fields;
            query.Distinct(true)
                .Select(fld.CounterpartyCompanyName)
                    .Where(
                        new Criteria(fld.CounterpartyCompanyName) != "" &
                        new Criteria(fld.CounterpartyCompanyName).IsNotNull());
            AddTenantFilter(query);
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }


    }
}
