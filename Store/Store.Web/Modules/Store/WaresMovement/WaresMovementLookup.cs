
namespace Store.Store.Lookups
{
    using global::Store.Store.Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class WaresMovementLookup: RowLookupScript<WaresMovementRow>
    {
        public WaresMovementLookup()
        {
            IdField = WaresMovementRow.Fields.WaresMoveID.PropertyName;
            TextField = WaresMovementRow.Fields.CounterpartyCompanyName.PropertyName;
        }
    }
}