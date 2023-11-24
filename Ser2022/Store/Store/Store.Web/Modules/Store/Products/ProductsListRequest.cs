
namespace Store.Store
{
    using Serenity.Services;
    public class ProductsListRequest : ListRequest
    {
        public int? WaresId { get; set; }
    }
}
