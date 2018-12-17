
namespace Warehouse.Store
{
    using Serenity.Services;
    public class ProductListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}