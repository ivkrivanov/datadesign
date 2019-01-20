
namespace Store.Store
{
    using Serenity.Services;
    public class WaresMovementListRequest : ListRequest
    {
        public int? WaresID { get; set; }
    }
}