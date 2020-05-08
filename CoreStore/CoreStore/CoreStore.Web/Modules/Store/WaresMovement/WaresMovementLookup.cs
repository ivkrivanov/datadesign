
namespace CoreStore.Store.Lookups
{
    using CoreStore.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class WaresMovementLookup : RowLookupScript<WaresMovementRow>
    {
        public WaresMovementLookup()
        {
            IdField = WaresMovementRow.Fields.WaresMoveId.PropertyName;
            TextField = WaresMovementRow.Fields.CounterpartyCompanyName.PropertyName;
        }
    }
}
