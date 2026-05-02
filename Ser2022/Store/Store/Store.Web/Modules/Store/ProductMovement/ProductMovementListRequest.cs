
namespace Store.Store
{
    using Serenity.Services;
    public class ProductMovementListRequest : ListRequest
    {
        public int? ProductId { get; set; }
    }
}
