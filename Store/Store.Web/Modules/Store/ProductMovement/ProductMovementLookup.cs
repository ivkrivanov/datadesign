
namespace Store.Store.Lookups
{
    using global::Store.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class ProductMovementLookup : RowLookupScript<ProductMovementRow>
    {
        public ProductMovementLookup()
        {
            IdField = ProductMovementRow.Fields.ProductMoveID.PropertyName;
            TextField = ProductMovementRow.Fields.CounterpartyCompanyName.PropertyName;
        }
    }
}