
namespace CoreStore.Store.Lookups
{
    using CoreStore.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class ProductMovementLookup : RowLookupScript<ProductMovementRow>
    {
        public ProductMovementLookup()
        {
            IdField = ProductMovementRow.Fields.ProductMoveId.PropertyName;
            TextField = ProductMovementRow.Fields.CounterpartyCompanyName.PropertyName;
        }
    }
}
