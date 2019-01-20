
namespace Store.Store
{
    using Serenity.Services;
    public class ProductListRequest : ListRequest
    {
        public int? WaresID { get; set; }
    }
}